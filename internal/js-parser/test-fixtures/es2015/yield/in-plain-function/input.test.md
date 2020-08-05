# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > in-plain-function`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/yield/in-plain-function/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/yield/in-plain-function/input.js"
		end: Object {
			column: 26
			line: 1
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Expected a semicolon or a line terminator"}]}
			}
			location: Object {
				filename: "es2015/yield/in-plain-function/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 20
					line: 1
				}
				start: Object {
					column: 21
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2015/yield/in-plain-function/input.js"
				end: Object {
					column: 26
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSFunctionExpression {
				id: undefined
				loc: Object {
					filename: "es2015/yield/in-plain-function/input.js"
					end: Object {
						column: 25
						line: 1
					}
					start: Object {
						column: 1
						line: 1
					}
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: Object {
						filename: "es2015/yield/in-plain-function/input.js"
						end: Object {
							column: 12
							line: 1
						}
						start: Object {
							column: 10
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "es2015/yield/in-plain-function/input.js"
						end: Object {
							column: 25
							line: 1
						}
						start: Object {
							column: 13
							line: 1
						}
					}
					body: Array [
						JSExpressionStatement {
							loc: Object {
								filename: "es2015/yield/in-plain-function/input.js"
								end: Object {
									column: 20
									line: 1
								}
								start: Object {
									column: 15
									line: 1
								}
							}
							expression: JSReferenceIdentifier {
								name: "yield"
								loc: Object {
									filename: "es2015/yield/in-plain-function/input.js"
									identifierName: "yield"
									end: Object {
										column: 20
										line: 1
									}
									start: Object {
										column: 15
										line: 1
									}
								}
							}
						}
						JSExpressionStatement {
							loc: Object {
								filename: "es2015/yield/in-plain-function/input.js"
								end: Object {
									column: 23
									line: 1
								}
								start: Object {
									column: 21
									line: 1
								}
							}
							expression: JSNumericLiteral {
								value: 10
								format: undefined
								loc: Object {
									filename: "es2015/yield/in-plain-function/input.js"
									end: Object {
										column: 23
										line: 1
									}
									start: Object {
										column: 21
										line: 1
									}
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/yield/in-plain-function/input.js:1:21 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    (function () { yield 10 })
                         ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```