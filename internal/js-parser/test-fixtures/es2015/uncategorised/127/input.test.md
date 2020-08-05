# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 127`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/uncategorised/127/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/uncategorised/127/input.js"
		end: Object {
			column: 29
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
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Constructor cannot be a generator"}]}
			}
			location: Object {
				filename: "es2015/uncategorised/127/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 22
					line: 1
				}
				start: Object {
					column: 11
					line: 1
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "es2015/uncategorised/127/input.js"
					identifierName: "A"
					end: Object {
						column: 7
						line: 1
					}
					start: Object {
						column: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "es2015/uncategorised/127/input.js"
				end: Object {
					column: 29
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "es2015/uncategorised/127/input.js"
					end: Object {
						column: 29
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "constructor"
								loc: Object {
									filename: "es2015/uncategorised/127/input.js"
									identifierName: "constructor"
									end: Object {
										column: 22
										line: 1
									}
									start: Object {
										column: 11
										line: 1
									}
								}
							}
							loc: Object {
								filename: "es2015/uncategorised/127/input.js"
								end: Object {
									column: 22
									line: 1
								}
								start: Object {
									column: 11
									line: 1
								}
							}
						}
						loc: Object {
							filename: "es2015/uncategorised/127/input.js"
							end: Object {
								column: 27
								line: 1
							}
							start: Object {
								column: 10
								line: 1
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "es2015/uncategorised/127/input.js"
								end: Object {
									column: 27
									line: 1
								}
								start: Object {
									column: 25
									line: 1
								}
							}
						}
						head: JSFunctionHead {
							async: false
							generator: true
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "es2015/uncategorised/127/input.js"
								end: Object {
									column: 24
									line: 1
								}
								start: Object {
									column: 22
									line: 1
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 10
								line: 1
							}
							loc: Object {
								filename: "es2015/uncategorised/127/input.js"
								end: Object {
									column: 22
									line: 1
								}
								start: Object {
									column: 10
									line: 1
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/127/input.js:1:11 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Constructor cannot be a generator

    class A { *constructor() {} }
               ^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```