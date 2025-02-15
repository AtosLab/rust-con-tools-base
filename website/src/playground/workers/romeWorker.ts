import init, {
	Configuration,
	DiagnosticPrinter,
	RomePath,
	RuleCategories,
	Workspace,
} from "@rometools/wasm-web";
import {
	IndentStyle,
	LoadingState,
	PlaygroundState,
	QuoteProperties,
	QuoteStyle,
	RomeOutput,
	SourceType,
} from "../types";

let workspace: Workspace | null = null;

const PATH_SCRIPT = {
	path: "main.js",
	id: 0,
};

const PATHS_MODULE = [
	{ path: "main.mjs", id: 1 },
	{ path: "main.jsx", id: 2 },
	{ path: "main.ts", id: 3 },
	{ path: "main.tsx", id: 4 },
];

function getPathForType(
	sourceType: SourceType,
	isTypeScript: boolean,
	isJsx: boolean,
): RomePath {
	if (sourceType === SourceType.Script) {
		return PATH_SCRIPT;
	}

	return PATHS_MODULE[Number(isTypeScript) * 2 + Number(isJsx)]!;
}

type CurrentFile = {
	path: RomePath;
	version: number;
};

let currentFile: CurrentFile | null = null;

self.addEventListener("message", async (e) => {
	switch (e.data.type) {
		case "init": {
			try {
				await init();

				workspace = new Workspace();

				self.postMessage({ type: "init", loadingState: LoadingState.Success });
			} catch (err) {
				console.error(err);
				self.postMessage({ type: "init", loadingState: LoadingState.Error });
			}

			break;
		}

		case "format": {
			if (!workspace) {
				console.error("Workspace was not initialized");
				break;
			}

			const playgroundState: PlaygroundState = e.data.playgroundState;
			const {
				code,
				lineWidth,
				indentStyle,
				indentWidth,
				quoteStyle,
				quoteProperties,
				typescript: isTypeScript,
				jsx: isJsx,
				sourceType,
				cursorPosition,
				enabledNurseryRules,
        enabledLinting,
				trailingComma,
			} = playgroundState;

			const configuration: Configuration = {
				formatter: {
					enabled: true,
					formatWithErrors: true,
					lineWidth: lineWidth,
					indentStyle: indentStyle === IndentStyle.Tab ? "tab" : "space",
					indentSize: indentWidth,
				},
				linter: {
					enabled: enabledLinting,
				},
				javascript: {
					formatter: {
						quoteStyle: quoteStyle === QuoteStyle.Double ? "double" : "single",
						quoteProperties:
							quoteProperties === QuoteProperties.Preserve
								? "preserve"
								: "asNeeded",
						trailingComma,
					},
				},
			};
			if (enabledNurseryRules) {
				configuration.linter = {
					enabled: enabledLinting,
					rules: {
						nursery: {
							noConstAssign: "error",
							useExhaustiveDependencies: "error",
						},
					},
				};
			}
			workspace.updateSettings({
				configuration,
			});

			const path = getPathForType(sourceType, isTypeScript, isJsx);
			if (currentFile && currentFile?.path === path) {
				workspace.changeFile({
					path,
					version: currentFile.version++,
					content: code,
				});
			} else {
				if (currentFile) {
					workspace.closeFile({
						path: currentFile.path,
					});
				}

				currentFile = {
					path,
					version: 0,
				};

				workspace.openFile({
					path,
					version: currentFile.version++,
					content: code,
				});
			}

			const syntax_tree = workspace.getSyntaxTree({
				path,
			});
			const control_flow_graph = workspace.getControlFlowGraph({
				path,
				cursor: cursorPosition,
			});
			const formatter_ir = workspace.getFormatterIr({
				path,
			});

			const categories: RuleCategories = [];
			if (configuration.formatter?.enabled) {
					categories.push("Syntax");
			}
			if (configuration.linter?.enabled) {
					categories.push("Lint");
			}
			const diagnostics = workspace.pullDiagnostics({
				path,
				categories: categories,
				max_diagnostics: Number.MAX_SAFE_INTEGER,
			});

			const printer = new DiagnosticPrinter(path.path, code);
			for (const diag of diagnostics.diagnostics) {
				printer.print(diag);
			}

			const printed = workspace.formatFile({
				path,
			});

			const romeOutput: RomeOutput = {
				ast: syntax_tree.ast,
				cst: syntax_tree.cst,
				errors: printer.finish(),
				formatted_code: printed.code,
				formatter_ir,
				control_flow_graph,
			};

			self.postMessage({
				type: "formatted",
				romeOutput,
			});
			break;
		}

		default:
			console.error(`Unknown message '${e.data.type}'.`);
	}
});
