/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ (() => {

eval("var index = 1;\ndocument.getElementById(\"add-local-viking-api-key\").addEventListener(\"click\", function () {\n  index = index + 1;\n  var input = \"\\n    <label for=\\\"local-viking-api-key-\".concat(index, \"\\\" class=\\\"form-label\\\">Local Viking API Key \").concat(index, \"*</label>\\n    <input id=\\\"local-viking-api-key-\").concat(index, \"\\\" class=\\\"form-control\\\" type=\\\"text\\\" name=\\\"localVikingAPIKey[]\\\">\\n  \");\n  var container = document.getElementById(\"local-viking-api-inputs\");\n  container.insertAdjacentHTML(\"beforeend\", input);\n});\n\n//# sourceURL=webpack://wp-plugin/./src/settings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/settings.js"]();
/******/ 	
/******/ })()
;