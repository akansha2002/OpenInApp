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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Form */ \"(app-pages-browser)/./components/Form.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_insta_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/insta.png */ \"(app-pages-browser)/./public/insta.png\");\n/* harmony import */ var _public_twitter_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/twitter.png */ \"(app-pages-browser)/./public/twitter.png\");\n/* harmony import */ var _public_linkedin_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/linkedin.png */ \"(app-pages-browser)/./public/linkedin.png\");\n/* harmony import */ var _public_discord_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/discord.png */ \"(app-pages-browser)/./public/discord.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    // const scrollRef = useRef(null);\n    // const handleScrollDown = () => {\n    //   window.scrollBy({\n    //     top: window.innerHeight,\n    //     behavior: \"smooth\",\n    //   });\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (session.status == \"authenticated\") {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.redirect)(\"/dashboard\");\n        }\n    }, [\n        session.status\n    ]);\n    const triangleClipPath = \"polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)\";\n    const backgroundStyle = {\n        clipPath: triangleClipPath,\n        WebkitClipPath: triangleClipPath,\n        background: \"linear-gradient(180deg, #4285F4 0%, #286DE0 100%)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-screen h-screen\",\n        id: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-[1.5] flex-col justify-center items-center bg-[#F8FAFF] text-white font-bold text-4xl lg:text-[72px]\",\n                style: backgroundStyle,\n                id: \"left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-bold text-xl absolute top-4 left-4 font-Poppins\",\n                        children: \"LOGO\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Board.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex absolute bottom-5 left-auto  w-[70%] m-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _public_insta_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                className: \"mx-12\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _public_twitter_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                className: \"mx-12\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _public_linkedin_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                className: \"mx-12\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _public_discord_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                                className: \"mx-12\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#FFF] flex-[1.5] flex justify-center items-center\",\n                id: \"right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2Cwzv6aK/79pVXN56+G1JajcesE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FDO0FBQ1E7QUFDSDtBQUNDO0FBQ1o7QUFDUztBQUNJO0FBQ0U7QUFDRjtBQUU3QixTQUFTVTs7SUFDdEIsTUFBTUMsVUFBVVYsMkRBQVVBO0lBRTFCLGtDQUFrQztJQUVsQyxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLEtBQUs7SUFFTEUsZ0RBQVNBLENBQUM7UUFDUixJQUFJUSxRQUFRQyxNQUFNLElBQUksaUJBQWlCO1lBQ3JDUix5REFBUUEsQ0FBQztRQUNYO0lBQ0YsR0FBRztRQUFDTyxRQUFRQyxNQUFNO0tBQUM7SUFFbkIsTUFBTUMsbUJBQW1CO0lBQ3pCLE1BQU1DLGtCQUFrQjtRQUN0QkMsVUFBVUY7UUFDVkcsZ0JBQWdCSDtRQUNoQkksWUFBWTtJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7UUFBeUJDLElBQUc7OzBCQUN6Qyw4REFBQ0Y7Z0JBQ0NDLFdBQVU7Z0JBQ1ZFLE9BQU9QO2dCQUNQTSxJQUFHOztrQ0FFSCw4REFBQ0U7d0JBQUtILFdBQVU7a0NBQWtFOzs7Ozs7a0NBR2xGLDhEQUFDSTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2QsbURBQUtBO2dDQUFDb0IsS0FBS25CLHlEQUFLQTtnQ0FBRWEsV0FBVTs7Ozs7OzBDQUM3Qiw4REFBQ2QsbURBQUtBO2dDQUFDb0IsS0FBS2xCLDJEQUFPQTtnQ0FBRVksV0FBVTs7Ozs7OzBDQUMvQiw4REFBQ2QsbURBQUtBO2dDQUFDb0IsS0FBS2pCLDREQUFRQTtnQ0FBRVcsV0FBVTs7Ozs7OzBDQUNoQyw4REFBQ2QsbURBQUtBO2dDQUFDb0IsS0FBS2hCLDJEQUFPQTtnQ0FBRVUsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtuQyw4REFBQ0Q7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLElBQUc7MEJBRUgsNEVBQUNwQix3REFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjtHQXREd0JVOztRQUNOVCx1REFBVUE7OztLQURKUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1cIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgaW5zdGEgZnJvbSBcIi4uL3B1YmxpYy9pbnN0YS5wbmdcIjtcclxuaW1wb3J0IHR3aXR0ZXIgZnJvbSBcIi4uL3B1YmxpYy90d2l0dGVyLnBuZ1wiO1xyXG5pbXBvcnQgbGlua2VkaW4gZnJvbSBcIi4uL3B1YmxpYy9saW5rZWRpbi5wbmdcIjtcclxuaW1wb3J0IGRpc2NvcmQgZnJvbSBcIi4uL3B1YmxpYy9kaXNjb3JkLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICAvLyBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZVNjcm9sbERvd24gPSAoKSA9PiB7XHJcbiAgLy8gICB3aW5kb3cuc2Nyb2xsQnkoe1xyXG4gIC8vICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAvLyAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlc3Npb24uc3RhdHVzID09IFwiYXV0aGVudGljYXRlZFwiKSB7XHJcbiAgICAgIHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvbi5zdGF0dXNdKTtcclxuXHJcbiAgY29uc3QgdHJpYW5nbGVDbGlwUGF0aCA9IFwicG9seWdvbigwJSAwJSwgMTAwJSAwJSwgODAlIDEwMCUsIDAlIDEwMCUpXCI7XHJcbiAgY29uc3QgYmFja2dyb3VuZFN0eWxlID0ge1xyXG4gICAgY2xpcFBhdGg6IHRyaWFuZ2xlQ2xpcFBhdGgsXHJcbiAgICBXZWJraXRDbGlwUGF0aDogdHJpYW5nbGVDbGlwUGF0aCxcclxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQyODVGNCAwJSwgIzI4NkRFMCAxMDAlKVwiLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1zY3JlZW4gaC1zY3JlZW5cIiBpZD1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LVsxLjVdIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1bI0Y4RkFGRl0gdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC00eGwgbGc6dGV4dC1bNzJweF1cIlxyXG4gICAgICAgIHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9XHJcbiAgICAgICAgaWQ9XCJsZWZ0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgYWJzb2x1dGUgdG9wLTQgbGVmdC00IGZvbnQtUG9wcGluc1wiPlxyXG4gICAgICAgICAgTE9HT1xyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aDE+Qm9hcmQuPC9oMT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgYm90dG9tLTUgbGVmdC1hdXRvICB3LVs3MCVdIG0tYXV0b1wiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aW5zdGF9IGNsYXNzTmFtZT1cIm14LTEyXCIgLz5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3R3aXR0ZXJ9IGNsYXNzTmFtZT1cIm14LTEyXCIgLz5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xpbmtlZGlufSBjbGFzc05hbWU9XCJteC0xMlwiIC8+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtkaXNjb3JkfSBjbGFzc05hbWU9XCJteC0xMlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0ZGRl0gZmxleC1bMS41XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgaWQ9XCJyaWdodFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZvcm0iLCJ1c2VTZXNzaW9uIiwidXNlUmVmIiwidXNlRWZmZWN0IiwicmVkaXJlY3QiLCJJbWFnZSIsImluc3RhIiwidHdpdHRlciIsImxpbmtlZGluIiwiZGlzY29yZCIsIkhvbWUiLCJzZXNzaW9uIiwic3RhdHVzIiwidHJpYW5nbGVDbGlwUGF0aCIsImJhY2tncm91bmRTdHlsZSIsImNsaXBQYXRoIiwiV2Via2l0Q2xpcFBhdGgiLCJiYWNrZ3JvdW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJzdHlsZSIsInNwYW4iLCJoMSIsImJyIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});