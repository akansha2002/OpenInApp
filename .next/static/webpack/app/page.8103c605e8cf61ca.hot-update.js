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

/***/ "(app-pages-browser)/./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Form = ()=>{\n    const styles = {\n        background: \"linear-gradient(180deg, #4285F4 0%, #286DE0 100%)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"main-div\",\n        className: \"w-[386px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold\",\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-bold\",\n                children: \"Sign in to your account\"\n            }, void 0, false, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"login-buttons\",\n                className: \"flex justify-between my-5 mx-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"google\", {\n                                callbackUrl: \"/dashboard\"\n                            }),\n                        className: \"w-[180px] text-[#858585] text-[12px] font-Montserrat tracking-wider justify-center flex items-center px-2 py-2 font-bold bg-white border-none rounded-[10px] cursor-pointer  transition duration-500\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"https://i.ibb.co/cgTYRDJ/google-logo-png-29546.png\",\n                                alt: \"Google\",\n                                width: 24,\n                                height: 24,\n                                style: {\n                                    marginRight: \"4px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Sign in with Google\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-[180px] text-[#858585] text-[12px] font-Montserrat tracking-wider justify-center flex items-center py-2 px-2 font-bold bg-white border-none rounded-md cursor-pointer  transition duration-500\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"https://i.ibb.co/ykw4txp/apple-1-3x.png\",\n                                alt: \"Apple\",\n                                width: 18,\n                                height: 20,\n                                style: {\n                                    marginRight: \"8px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mt-1\",\n                                children: \"Sign in with Apple\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"form\",\n                className: \"bg-white flex flex-col py-6 px-8 rounded-2xl font-Lato\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: \"Email address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        id: \"input\",\n                        className: \"bg-[#f5f5f5] border-none p-3 rounded-[10px] my-[10px] mx-0 text-base font-normal\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"input\",\n                        className: \"bg-[#f5f5f5] border-none p-3 rounded-[10px] my-[9px] mx-0 text-base font-normal\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#346bd4] my-5 mx-0 cursor-pointer\",\n                        children: \"Forgot Password?\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>alert(\"Please use Sign In with Google\"),\n                        className: \"font-Montserrat text-white rounded-[10px] p-3 text-base font-bold border-none cursor-pointer transition duration-500\",\n                        style: styles,\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[#858585] text-center \",\n                children: [\n                    \"Don't have an account?\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[#346bd4] my-5 mx-0 cursor-pointer\",\n                        children: [\n                            \" \",\n                            \"Register here\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\documents\\\\openinapp\\\\components\\\\Form.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUNVO0FBRXpDLE1BQU1FLE9BQU87SUFDWCxNQUFNQyxTQUFTO1FBQ2JDLFlBQVk7SUFDZDtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxJQUFHO1FBQVdDLFdBQVU7OzBCQUMzQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDRTtnQkFBRUYsV0FBVTswQkFBWTs7Ozs7OzBCQUN6Qiw4REFBQ0Y7Z0JBQUlDLElBQUc7Z0JBQWdCQyxXQUFVOztrQ0FDaEMsOERBQUNHO3dCQUNDQyxTQUFTLElBQU1WLHVEQUFNQSxDQUFDLFVBQVU7Z0NBQUVXLGFBQWE7NEJBQWE7d0JBQzVETCxXQUFVOzswQ0FFViw4REFBQ1AsbURBQUtBO2dDQUNKYSxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxPQUFPO29DQUFFQyxhQUFhO2dDQUFNOzs7Ozs7MENBRTlCLDhEQUFDQzswQ0FBSzs7Ozs7Ozs7Ozs7O2tDQUVSLDhEQUFDVDt3QkFBT0gsV0FBVTs7MENBQ2hCLDhEQUFDUCxtREFBS0E7Z0NBQ0phLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLE9BQU87b0NBQUVDLGFBQWE7Z0NBQU07Ozs7OzswQ0FFOUIsOERBQUNDO2dDQUFLWixXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzNCLDhEQUFDRjtnQkFDQ0MsSUFBRztnQkFDSEMsV0FBVTs7a0NBRVYsOERBQUNhO3dCQUFNQyxTQUFRO2tDQUFHOzs7Ozs7a0NBQ2xCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTGpCLElBQUc7d0JBQ0hDLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ2lCOzs7OztrQ0FFRCw4REFBQ0o7d0JBQU1DLFNBQVE7a0NBQUc7Ozs7OztrQ0FDbEIsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMakIsSUFBRzt3QkFDSEMsV0FBVTs7Ozs7O2tDQUdaLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBMEM7Ozs7OztrQ0FJdkQsOERBQUNHO3dCQUNDQyxTQUFTLElBQU1jLE1BQU07d0JBQ3JCbEIsV0FBVTt3QkFDVlUsT0FBT2Q7a0NBQ1I7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ007Z0JBQUVGLFdBQVU7O29CQUE4QjtrQ0FFekMsOERBQUNZO3dCQUFLWixXQUFVOzs0QkFDYjs0QkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0tBMUVNTDtBQTRFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0uanN4PzI5MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuXHJcbmNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDI4NUY0IDAlLCAjMjg2REUwIDEwMCUpXCIsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW4tZGl2XCIgY2xhc3NOYW1lPVwidy1bMzg2cHhdXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5TaWduIEluPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+U2lnbiBpbiB0byB5b3VyIGFjY291bnQ8L3A+XHJcbiAgICAgIDxkaXYgaWQ9XCJsb2dpbi1idXR0b25zXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXktNSBteC0wXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKFwiZ29vZ2xlXCIsIHsgY2FsbGJhY2tVcmw6IFwiL2Rhc2hib2FyZFwiIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bMTgwcHhdIHRleHQtWyM4NTg1ODVdIHRleHQtWzEycHhdIGZvbnQtTW9udHNlcnJhdCB0cmFja2luZy13aWRlciBqdXN0aWZ5LWNlbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHB5LTIgZm9udC1ib2xkIGJnLXdoaXRlIGJvcmRlci1ub25lIHJvdW5kZWQtWzEwcHhdIGN1cnNvci1wb2ludGVyICB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vY2dUWVJESi9nb29nbGUtbG9nby1wbmctMjk1NDYucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiR29vZ2xlXCJcclxuICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezI0fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI0cHhcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPlNpZ24gaW4gd2l0aCBHb29nbGU8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LVsxODBweF0gdGV4dC1bIzg1ODU4NV0gdGV4dC1bMTJweF0gZm9udC1Nb250c2VycmF0IHRyYWNraW5nLXdpZGVyIGp1c3RpZnktY2VudGVyIGZsZXggaXRlbXMtY2VudGVyIHB5LTIgcHgtMiBmb250LWJvbGQgYmctd2hpdGUgYm9yZGVyLW5vbmUgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL3lrdzR0eHAvYXBwbGUtMS0zeC5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJBcHBsZVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXsxOH1cclxuICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiOHB4XCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0xXCI+U2lnbiBpbiB3aXRoIEFwcGxlPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPVwiZm9ybVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleCBmbGV4LWNvbCBweS02IHB4LTggcm91bmRlZC0yeGwgZm9udC1MYXRvXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgaWQ9XCJpbnB1dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI2Y1ZjVmNV0gYm9yZGVyLW5vbmUgcC0zIHJvdW5kZWQtWzEwcHhdIG15LVsxMHB4XSBteC0wIHRleHQtYmFzZSBmb250LW5vcm1hbFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGlkPVwiaW5wdXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNmNWY1ZjVdIGJvcmRlci1ub25lIHAtMyByb3VuZGVkLVsxMHB4XSBteS1bOXB4XSBteC0wIHRleHQtYmFzZSBmb250LW5vcm1hbFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzM0NmJkNF0gbXktNSBteC0wIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydChcIlBsZWFzZSB1c2UgU2lnbiBJbiB3aXRoIEdvb2dsZVwiKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtTW9udHNlcnJhdCB0ZXh0LXdoaXRlIHJvdW5kZWQtWzEwcHhdIHAtMyB0ZXh0LWJhc2UgZm9udC1ib2xkIGJvcmRlci1ub25lIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzg1ODU4NV0gdGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgRG9uJmFwb3M7dCBoYXZlIGFuIGFjY291bnQ/XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzM0NmJkNF0gbXktNSBteC0wIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICBSZWdpc3RlciBoZXJlXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwic2lnbkluIiwiRm9ybSIsInN0eWxlcyIsImJhY2tncm91bmQiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjYWxsYmFja1VybCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJtYXJnaW5SaWdodCIsInNwYW4iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJiciIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Form.jsx\n"));

/***/ })

});