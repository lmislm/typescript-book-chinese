(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{245:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"never"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#never","aria-hidden":"true"}},[t._v("#")]),t._v(" Never")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://egghead.io/lessons/typescript-use-the-never-type-to-avoid-code-with-dead-ends-using-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个关于 never 的介绍视频"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("程序语言的设计确实应该存在一个底部类型的概念，当你在分析代码流的时候，这会是一个理所当然存在的类型。TypeScript 就是这样一种分析代码流的语言（😎），因此它需要一个可靠的，代表永远不会发生的类型。")]),t._v(" "),a("p",[a("code",[t._v("never")]),t._v(" 类型是 TypeScript 中的底层类型。它自然被分配的一些例子：")]),t._v(" "),a("ul",[a("li",[t._v("一个从来不会有返回值的函数（如：如果函数内含有 "),a("code",[t._v("while(true) {}")]),t._v("）；")]),t._v(" "),a("li",[t._v("一个总是会抛出错误的函数（如："),a("code",[t._v("function foo() { throw new Error('Not Implemented') }")]),t._v("，"),a("code",[t._v("foo")]),t._v(" 的返回类型是 "),a("code",[t._v("never")]),t._v("）；")])]),t._v(" "),a("p",[t._v("你也可以将它用做类型注解：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" never"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\n")])])]),a("p",[t._v("但是，"),a("code",[t._v("never")]),t._v(" 类型仅能被赋值给另外一个 "),a("code",[t._v("never")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" never "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error: number 类型不能赋值给 never 类型")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ok, 做为函数返回类型的 never")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" never "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Throw my hands in the air like I just dont care'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("很棒，现在让我们看看它的关键用例。")]),t._v(" "),a("h2",{attrs:{id:"用例：详细的检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用例：详细的检查","aria-hidden":"true"}},[t._v("#")]),t._v(" 用例：详细的检查")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果不是一个 never 类型，这会报错：")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// - 不是所有条件都有返回值 （严格模式下）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// - 或者检查到无法访问的代码")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是由于 TypeScript 理解 `fail` 函数返回为 `never` 类型")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 它可以让你调用它，因为你可能会在运行时用它来做安全或者详细的检查。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Unexhaustive'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" never "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("never")]),t._v(" 仅能被赋值给另外一个 "),a("code",[t._v("never")]),t._v(" 类型，因此你可以用它来进行编译时的全面的检查，我们将会在"),a("router-link",{attrs:{to:"/typings/discrominatedUnion.html"}},[t._v("辨析联合类型")]),t._v("中讲解它。")],1),t._v(" "),a("h2",{attrs:{id:"与-void-的差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-void-的差异","aria-hidden":"true"}},[t._v("#")]),t._v(" 与 "),a("code",[t._v("void")]),t._v(" 的差异")]),t._v(" "),a("p",[t._v("一旦有人告诉你，"),a("code",[t._v("never")]),t._v(" 表示一个从来不会优雅的返回的函数时，你可能马上就会想到与此类似的 "),a("code",[t._v("void")]),t._v("，然而实际上，"),a("code",[t._v("void")]),t._v(" 表示没有任何类型，"),a("code",[t._v("never")]),t._v(" 表示永远不存在的值的类型。")]),t._v(" "),a("p",[t._v("当一个函数没有返回值时，它返回了一个 "),a("code",[t._v("void")]),t._v(" 类型，但是，当一个函数根本就没有返回值时（或者总是抛出错误），它返回了一个 "),a("code",[t._v("never")]),t._v("，"),a("code",[t._v("void")]),t._v(" 指可以被赋值的类型（在 "),a("code",[t._v("strictNullChecking")]),t._v(" 为 false 时），但是 "),a("code",[t._v("never")]),t._v(" 不能赋值给其他任何类型，除了 "),a("code",[t._v("never")]),t._v("。")])])},[],!1,null,null,null);s.default=e.exports}}]);