"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Form */ \"(app-pages-browser)/./components/Form.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_insta_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/insta.png */ \"(app-pages-browser)/./public/insta.png\");\n/* harmony import */ var _public_twitter_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/twitter.png */ \"(app-pages-browser)/./public/twitter.png\");\n/* harmony import */ var _public_linkedin_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/linkedin.png */ \"(app-pages-browser)/./public/linkedin.png\");\n/* harmony import */ var _public_discord_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/discord.png */ \"(app-pages-browser)/./public/discord.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    // const scrollRef = useRef(null);\n    // const handleScrollDown = () => {\n    //   window.scrollBy({\n    //     top: window.innerHeight,\n    //     behavior: \"smooth\",\n    //   });\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (session.status == \"authenticated\") {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.redirect)(\"/dashboard\");\n        }\n    }, [\n        session.status\n    ]);\n    const triangleClipPath = \"polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)\";\n    const backgroundStyle = {\n        clipPath: triangleClipPath,\n        WebkitClipPath: triangleClipPath,\n        background: \"linear-gradient(180deg, #4285F4 0%, #286DE0 100%)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-screen h-screen\",\n        id: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-[1.5] flex-col justify-center items-center bg-[#F8FAFF] text-white font-bold text-4xl lg:text-[72px]\",\n                style: backgroundStyle,\n                id: \"left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-bold text-xl absolute top-4 left-4 font-Poppins\",\n                        children: \"LOGO\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center\",\n                        children: \"Board.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex absolute bottom-10   justify-center items-center mx-auto w-3/5 lg:w-[80%]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _public_insta_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                className: \"mx-7 w-12 \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                lineNumber: 50,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _public_twitter_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                className: \"mx-7 w-12\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                lineNumber: 51,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _public_linkedin_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                className: \"mx-7 w-12 \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                lineNumber: 52,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _public_discord_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                                className: \"mx-7 w-12  \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                lineNumber: 53,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#FFF] flex-[1.5] flex justify-center items-center\",\n                id: \"right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                lineNumber: 56,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2Cwzv6aK/79pVXN56+G1JajcesE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FDO0FBQ1E7QUFDSDtBQUNDO0FBQ1o7QUFDUztBQUNJO0FBQ0U7QUFDRjtBQUU3QixTQUFTVTs7SUFDdEIsTUFBTUMsVUFBVVYsMkRBQVVBO0lBRTFCLGtDQUFrQztJQUVsQyxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLEtBQUs7SUFFTEUsZ0RBQVNBLENBQUM7UUFDUixJQUFJUSxRQUFRQyxNQUFNLElBQUksaUJBQWlCO1lBQ3JDUix5REFBUUEsQ0FBQztRQUNYO0lBQ0YsR0FBRztRQUFDTyxRQUFRQyxNQUFNO0tBQUM7SUFFbkIsTUFBTUMsbUJBQW1CO0lBQ3pCLE1BQU1DLGtCQUFrQjtRQUN0QkMsVUFBVUY7UUFDVkcsZ0JBQWdCSDtRQUNoQkksWUFBWTtJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7UUFBeUJDLElBQUc7OzBCQUM3Qyw4REFBQ0Y7Z0JBQ0NDLFdBQVU7Z0JBQ1ZFLE9BQU9QO2dCQUNQTSxJQUFHOztrQ0FFSCw4REFBQ0U7d0JBQUtILFdBQVU7a0NBQWtFOzs7Ozs7a0NBR2xGLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBYzs7Ozs7O2tDQUM1Qiw4REFBQ0s7Ozs7O2tDQUNELDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNkLG1EQUFLQTtnQ0FBQ29CLEtBQUtuQix5REFBS0E7Z0NBQUVhLFdBQVU7Ozs7OzswQ0FDN0IsOERBQUNkLG1EQUFLQTtnQ0FBQ29CLEtBQUtsQiwyREFBT0E7Z0NBQUVZLFdBQVU7Ozs7OzswQ0FDL0IsOERBQUNkLG1EQUFLQTtnQ0FBQ29CLEtBQUtqQiw0REFBUUE7Z0NBQUVXLFdBQVU7Ozs7OzswQ0FDaEMsOERBQUNkLG1EQUFLQTtnQ0FBQ29CLEtBQUtoQiwyREFBT0E7Z0NBQUVVLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbkMsOERBQUNEO2dCQUNDQyxXQUFVO2dCQUNWQyxJQUFHOzBCQUVILDRFQUFDcEIsd0RBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0F0RHdCVTs7UUFDTlQsdURBQVVBOzs7S0FESlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGluc3RhIGZyb20gXCIuLi9wdWJsaWMvaW5zdGEucG5nXCI7XHJcbmltcG9ydCB0d2l0dGVyIGZyb20gXCIuLi9wdWJsaWMvdHdpdHRlci5wbmdcIjtcclxuaW1wb3J0IGxpbmtlZGluIGZyb20gXCIuLi9wdWJsaWMvbGlua2VkaW4ucG5nXCI7XHJcbmltcG9ydCBkaXNjb3JkIGZyb20gXCIuLi9wdWJsaWMvZGlzY29yZC5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgLy8gY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVTY3JvbGxEb3duID0gKCkgPT4ge1xyXG4gIC8vICAgd2luZG93LnNjcm9sbEJ5KHtcclxuICAvLyAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgLy8gICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZXNzaW9uLnN0YXR1cyA9PSBcImF1dGhlbnRpY2F0ZWRcIikge1xyXG4gICAgICByZWRpcmVjdChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICB9XHJcbiAgfSwgW3Nlc3Npb24uc3RhdHVzXSk7XHJcblxyXG4gIGNvbnN0IHRyaWFuZ2xlQ2xpcFBhdGggPSBcInBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDgwJSAxMDAlLCAwJSAxMDAlKVwiO1xyXG4gIGNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHtcclxuICAgIGNsaXBQYXRoOiB0cmlhbmdsZUNsaXBQYXRoLFxyXG4gICAgV2Via2l0Q2xpcFBhdGg6IHRyaWFuZ2xlQ2xpcFBhdGgsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0Mjg1RjQgMCUsICMyODZERTAgMTAwJSlcIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGgtc2NyZWVuXCIgaWQ9XCJjb250YWluZXJcIj5cclxuICA8ZGl2XHJcbiAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtWzEuNV0gZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLVsjRjhGQUZGXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LTR4bCBsZzp0ZXh0LVs3MnB4XVwiXHJcbiAgICBzdHlsZT17YmFja2dyb3VuZFN0eWxlfVxyXG4gICAgaWQ9XCJsZWZ0XCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXhsIGFic29sdXRlIHRvcC00IGxlZnQtNCBmb250LVBvcHBpbnNcIj5cclxuICAgICAgTE9HT1xyXG4gICAgPC9zcGFuPlxyXG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Qm9hcmQuPC9oMT5cclxuICAgIDxiciAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFic29sdXRlIGJvdHRvbS0xMCAgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC1hdXRvIHctMy81IGxnOnctWzgwJV1cIj5cclxuICAgICAgPEltYWdlIHNyYz17aW5zdGF9IGNsYXNzTmFtZT1cIm14LTcgdy0xMiBcIiAvPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXt0d2l0dGVyfSBjbGFzc05hbWU9XCJteC03IHctMTJcIiAgLz5cclxuICAgICAgPEltYWdlIHNyYz17bGlua2VkaW59IGNsYXNzTmFtZT1cIm14LTcgdy0xMiBcIiAvPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtkaXNjb3JkfSBjbGFzc05hbWU9XCJteC03IHctMTIgIFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2XHJcbiAgICBjbGFzc05hbWU9XCJiZy1bI0ZGRl0gZmxleC1bMS41XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICBpZD1cInJpZ2h0XCJcclxuICA+XHJcbiAgICA8Rm9ybSAvPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgXHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRm9ybSIsInVzZVNlc3Npb24iLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJyZWRpcmVjdCIsIkltYWdlIiwiaW5zdGEiLCJ0d2l0dGVyIiwibGlua2VkaW4iLCJkaXNjb3JkIiwiSG9tZSIsInNlc3Npb24iLCJzdGF0dXMiLCJ0cmlhbmdsZUNsaXBQYXRoIiwiYmFja2dyb3VuZFN0eWxlIiwiY2xpcFBhdGgiLCJXZWJraXRDbGlwUGF0aCIsImJhY2tncm91bmQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsInN0eWxlIiwic3BhbiIsImgxIiwiYnIiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});