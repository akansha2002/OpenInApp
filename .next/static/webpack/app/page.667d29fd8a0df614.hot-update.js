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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Form */ \"(app-pages-browser)/./components/Form.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_insta_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/insta.png */ \"(app-pages-browser)/./public/insta.png\");\n/* harmony import */ var _public_twitter_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/twitter.png */ \"(app-pages-browser)/./public/twitter.png\");\n/* harmony import */ var _public_linkedin_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/linkedin.png */ \"(app-pages-browser)/./public/linkedin.png\");\n/* harmony import */ var _public_discord_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/discord.png */ \"(app-pages-browser)/./public/discord.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (session.status == \"authenticated\") {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.redirect)(\"/dashboard\");\n        }\n    }, [\n        session.status\n    ]);\n    const triangleClipPath = \"polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)\";\n    const backgroundStyle = {\n        clipPath: triangleClipPath,\n        WebkitClipPath: triangleClipPath,\n        background: \"linear-gradient(180deg, #4285F4 0%, #286DE0 100%)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col lg:flex-row h-screen\",\n        id: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex flex-col justify-center items-center bg-[#F8FAFF] text-white font-bold text-4xl lg:text-[72px]\",\n                style: backgroundStyle,\n                id: \"left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-bold text-xl absolute top-4 left-4 font-Poppins\",\n                        children: \"LOGO\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center\",\n                        children: \"Board.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center mt-5 lg:mt-0 absolute bottom-10 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: _public_insta_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                    className: \"w-12 mx-4\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: _public_twitter_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    className: \"w-12 mx-4\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: _public_linkedin_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                    className: \"w-12 mx-4\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: _public_discord_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                                    className: \"w-12 mx-4\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#FFF] flex-1 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2Cwzv6aK/79pVXN56+G1JajcesE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FDO0FBQ1E7QUFDWDtBQUNTO0FBQ1o7QUFDUztBQUNJO0FBQ0U7QUFDRjtBQUU3QixTQUFTUzs7SUFDdEIsTUFBTUMsVUFBVVQsMkRBQVVBO0lBRTFCQyxnREFBU0EsQ0FBQztRQUNSLElBQUlRLFFBQVFDLE1BQU0sSUFBSSxpQkFBaUI7WUFDckNSLHlEQUFRQSxDQUFDO1FBQ1g7SUFDRixHQUFHO1FBQUNPLFFBQVFDLE1BQU07S0FBQztJQUVuQixNQUFNQyxtQkFBbUI7SUFDekIsTUFBTUMsa0JBQWtCO1FBQ3RCQyxVQUFVRjtRQUNWRyxnQkFBZ0JIO1FBQ2hCSSxZQUFZO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFxQ0MsSUFBRzs7MEJBQ3JELDhEQUFDRjtnQkFDQ0MsV0FBVTtnQkFDVkUsT0FBT1A7Z0JBQ1BNLElBQUc7O2tDQUVILDhEQUFDRTt3QkFBS0gsV0FBVTtrQ0FBa0U7Ozs7OztrQ0FHbEYsOERBQUNJO3dCQUFHSixXQUFVO2tDQUFjOzs7Ozs7a0NBQzVCLDhEQUFDSzs7Ozs7a0NBQ0QsOERBQUNOO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNkLG1EQUFLQTtvQ0FBQ29CLEtBQUtuQix5REFBS0E7b0NBQUVhLFdBQVU7Ozs7Ozs4Q0FDN0IsOERBQUNkLG1EQUFLQTtvQ0FBQ29CLEtBQUtsQiwyREFBT0E7b0NBQUVZLFdBQVU7Ozs7Ozs4Q0FDL0IsOERBQUNkLG1EQUFLQTtvQ0FBQ29CLEtBQUtqQiw0REFBUUE7b0NBQUVXLFdBQVU7Ozs7Ozs4Q0FDaEMsOERBQUNkLG1EQUFLQTtvQ0FBQ29CLEtBQUtoQiwyREFBT0E7b0NBQUVVLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlyQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNsQix3REFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjtHQTFDd0JTOztRQUNOUix1REFBVUE7OztLQURKUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1cIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGluc3RhIGZyb20gXCIuLi9wdWJsaWMvaW5zdGEucG5nXCI7XHJcbmltcG9ydCB0d2l0dGVyIGZyb20gXCIuLi9wdWJsaWMvdHdpdHRlci5wbmdcIjtcclxuaW1wb3J0IGxpbmtlZGluIGZyb20gXCIuLi9wdWJsaWMvbGlua2VkaW4ucG5nXCI7XHJcbmltcG9ydCBkaXNjb3JkIGZyb20gXCIuLi9wdWJsaWMvZGlzY29yZC5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZXNzaW9uLnN0YXR1cyA9PSBcImF1dGhlbnRpY2F0ZWRcIikge1xyXG4gICAgICByZWRpcmVjdChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICB9XHJcbiAgfSwgW3Nlc3Npb24uc3RhdHVzXSk7XHJcblxyXG4gIGNvbnN0IHRyaWFuZ2xlQ2xpcFBhdGggPSBcInBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDgwJSAxMDAlLCAwJSAxMDAlKVwiO1xyXG4gIGNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHtcclxuICAgIGNsaXBQYXRoOiB0cmlhbmdsZUNsaXBQYXRoLFxyXG4gICAgV2Via2l0Q2xpcFBhdGg6IHRyaWFuZ2xlQ2xpcFBhdGgsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0Mjg1RjQgMCUsICMyODZERTAgMTAwJSlcIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGgtc2NyZWVuXCIgaWQ9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1bI0Y4RkFGRl0gdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC00eGwgbGc6dGV4dC1bNzJweF1cIlxyXG4gICAgICAgIHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9XHJcbiAgICAgICAgaWQ9XCJsZWZ0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgYWJzb2x1dGUgdG9wLTQgbGVmdC00IGZvbnQtUG9wcGluc1wiPlxyXG4gICAgICAgICAgTE9HT1xyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Cb2FyZC48L2gxPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtNSBsZzptdC0wIGFic29sdXRlIGJvdHRvbS0xMCBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtMCBsZzpnYXAtMFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbnN0YX0gY2xhc3NOYW1lPVwidy0xMiBteC00XCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17dHdpdHRlcn0gY2xhc3NOYW1lPVwidy0xMiBteC00XCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17bGlua2VkaW59IGNsYXNzTmFtZT1cInctMTIgbXgtNFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Rpc2NvcmR9IGNsYXNzTmFtZT1cInctMTIgbXgtNFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGRkZdIGZsZXgtMSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxGb3JtIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRm9ybSIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJyZWRpcmVjdCIsIkltYWdlIiwiaW5zdGEiLCJ0d2l0dGVyIiwibGlua2VkaW4iLCJkaXNjb3JkIiwiSG9tZSIsInNlc3Npb24iLCJzdGF0dXMiLCJ0cmlhbmdsZUNsaXBQYXRoIiwiYmFja2dyb3VuZFN0eWxlIiwiY2xpcFBhdGgiLCJXZWJraXRDbGlwUGF0aCIsImJhY2tncm91bmQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsInN0eWxlIiwic3BhbiIsImgxIiwiYnIiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});