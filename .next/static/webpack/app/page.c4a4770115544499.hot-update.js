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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Form */ \"(app-pages-browser)/./components/Form.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_insta_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/insta.png */ \"(app-pages-browser)/./public/insta.png\");\n/* harmony import */ var _public_twitter_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/twitter.png */ \"(app-pages-browser)/./public/twitter.png\");\n/* harmony import */ var _public_linkedin_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/linkedin.png */ \"(app-pages-browser)/./public/linkedin.png\");\n/* harmony import */ var _public_discord_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/discord.png */ \"(app-pages-browser)/./public/discord.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    // const scrollRef = useRef(null);\n    // const handleScrollDown = () => {\n    //   window.scrollBy({\n    //     top: window.innerHeight,\n    //     behavior: \"smooth\",\n    //   });\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (session.status == \"authenticated\") {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.redirect)(\"/dashboard\");\n        }\n    }, [\n        session.status\n    ]);\n    const triangleClipPath = \"polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)\";\n    const backgroundStyle = {\n        clipPath: triangleClipPath,\n        WebkitClipPath: triangleClipPath,\n        background: \"linear-gradient(180deg, #4285F4 0%, #286DE0 100%)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-screen h-screen\",\n        id: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-[1.5] flex-col justify-center items-center bg-[#F8FAFF] text-white font-bold text-4xl lg:text-[72px]\",\n                style: backgroundStyle,\n                id: \"left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-bold text-xl absolute top-4 left-4 font-Poppins\",\n                        children: \"LOGO\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center\",\n                        children: \"Board.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex absolute bottom-10 left-0 right-0 justify-center items-center mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            src: _public_insta_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            className: \"mx-7 w-12 h-12 lg:w-16 lg:h-16\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#FFF] flex-[1.5] flex justify-center items-center\",\n                id: \"right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n                lineNumber: 56,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\documents\\\\openinapp\\\\app\\\\page.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2Cwzv6aK/79pVXN56+G1JajcesE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FDO0FBQ1E7QUFDSDtBQUNDO0FBQ1o7QUFDUztBQUNJO0FBQ0U7QUFDRjtBQUU3QixTQUFTVTs7SUFDdEIsTUFBTUMsVUFBVVYsMkRBQVVBO0lBRTFCLGtDQUFrQztJQUVsQyxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLEtBQUs7SUFFTEUsZ0RBQVNBLENBQUM7UUFDUixJQUFJUSxRQUFRQyxNQUFNLElBQUksaUJBQWlCO1lBQ3JDUix5REFBUUEsQ0FBQztRQUNYO0lBQ0YsR0FBRztRQUFDTyxRQUFRQyxNQUFNO0tBQUM7SUFFbkIsTUFBTUMsbUJBQW1CO0lBQ3pCLE1BQU1DLGtCQUFrQjtRQUN0QkMsVUFBVUY7UUFDVkcsZ0JBQWdCSDtRQUNoQkksWUFBWTtJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7UUFBeUJDLElBQUc7OzBCQUMzQyw4REFBQ0Y7Z0JBQ0NDLFdBQVU7Z0JBQ1ZFLE9BQU9QO2dCQUNQTSxJQUFHOztrQ0FFSCw4REFBQ0U7d0JBQUtILFdBQVU7a0NBQWtFOzs7Ozs7a0NBR2xGLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBYzs7Ozs7O2tDQUM1Qiw4REFBQ0s7Ozs7O2tDQUNELDhEQUFDTjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2QsbURBQUtBOzRCQUFDb0IsS0FBS25CLHlEQUFLQTs0QkFBRWEsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWpDLDhEQUFDRDtnQkFDQ0MsV0FBVTtnQkFDVkMsSUFBRzswQkFFSCw0RUFBQ3BCLHdEQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBckR3QlU7O1FBQ05ULHVEQUFVQTs7O0tBREpTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvRm9ybVwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBpbnN0YSBmcm9tIFwiLi4vcHVibGljL2luc3RhLnBuZ1wiO1xyXG5pbXBvcnQgdHdpdHRlciBmcm9tIFwiLi4vcHVibGljL3R3aXR0ZXIucG5nXCI7XHJcbmltcG9ydCBsaW5rZWRpbiBmcm9tIFwiLi4vcHVibGljL2xpbmtlZGluLnBuZ1wiO1xyXG5pbXBvcnQgZGlzY29yZCBmcm9tIFwiLi4vcHVibGljL2Rpc2NvcmQucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gIC8vIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlU2Nyb2xsRG93biA9ICgpID0+IHtcclxuICAvLyAgIHdpbmRvdy5zY3JvbGxCeSh7XHJcbiAgLy8gICAgIHRvcDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIC8vICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAvLyAgIH0pO1xyXG4gIC8vIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcclxuICAgICAgcmVkaXJlY3QoXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtzZXNzaW9uLnN0YXR1c10pO1xyXG5cclxuICBjb25zdCB0cmlhbmdsZUNsaXBQYXRoID0gXCJwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCA4MCUgMTAwJSwgMCUgMTAwJSlcIjtcclxuICBjb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSB7XHJcbiAgICBjbGlwUGF0aDogdHJpYW5nbGVDbGlwUGF0aCxcclxuICAgIFdlYmtpdENsaXBQYXRoOiB0cmlhbmdsZUNsaXBQYXRoLFxyXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDI4NUY0IDAlLCAjMjg2REUwIDEwMCUpXCIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBoLXNjcmVlblwiIGlkPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1bMS41XSBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctWyNGOEZBRkZdIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtNHhsIGxnOnRleHQtWzcycHhdXCJcclxuICAgICAgc3R5bGU9e2JhY2tncm91bmRTdHlsZX1cclxuICAgICAgaWQ9XCJsZWZ0XCJcclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bCBhYnNvbHV0ZSB0b3AtNCBsZWZ0LTQgZm9udC1Qb3BwaW5zXCI+XHJcbiAgICAgICAgTE9HT1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkJvYXJkLjwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgYm90dG9tLTEwIGxlZnQtMCByaWdodC0wIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC1hdXRvXCI+XHJcbiAgICAgICAgPEltYWdlIHNyYz17aW5zdGF9IGNsYXNzTmFtZT1cIm14LTcgdy0xMiBoLTEyIGxnOnctMTYgbGc6aC0xNlwiIC8+XHJcbiAgICAgICAgey8qIDxJbWFnZSBzcmM9e3R3aXR0ZXJ9IGNsYXNzTmFtZT1cIm14LTcgdy0xMiBoLTEyIGxnOnctMTYgbGc6aC0xNlwiIC8+XHJcbiAgICAgICAgPEltYWdlIHNyYz17bGlua2VkaW59IGNsYXNzTmFtZT1cIm14LTcgdy0xMiBoLTEyIGxnOnctMTYgbGc6aC0xNlwiIC8+XHJcbiAgICAgICAgPEltYWdlIHNyYz17ZGlzY29yZH0gY2xhc3NOYW1lPVwibXgtNyB3LTEyIGgtMTIgbGc6dy0xNiBsZzpoLTE2XCIgLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImJnLVsjRkZGXSBmbGV4LVsxLjVdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgaWQ9XCJyaWdodFwiXHJcbiAgICA+XHJcbiAgICAgIDxGb3JtIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBcclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGb3JtIiwidXNlU2Vzc2lvbiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInJlZGlyZWN0IiwiSW1hZ2UiLCJpbnN0YSIsInR3aXR0ZXIiLCJsaW5rZWRpbiIsImRpc2NvcmQiLCJIb21lIiwic2Vzc2lvbiIsInN0YXR1cyIsInRyaWFuZ2xlQ2xpcFBhdGgiLCJiYWNrZ3JvdW5kU3R5bGUiLCJjbGlwUGF0aCIsIldlYmtpdENsaXBQYXRoIiwiYmFja2dyb3VuZCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJzcGFuIiwiaDEiLCJiciIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});