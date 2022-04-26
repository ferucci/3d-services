/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('01 may 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst menu = () => {\r\n  const two = 'I am twoModule';\r\n\r\n  console.log(two);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (deadline) => {\r\n  const timerDays = document.getElementById('timer-days');\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  let idInterval;\r\n\r\n  const getTimeRemaining = () => {\r\n\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    // Высчитываю разность между датами:\r\n    let timeRemaning = (dateStop - dateNow) / 1000; // получаю секунды\r\n\r\n    let days = Math.floor(timeRemaning / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaning / 60 / 60) % 24); // остаток от деления на 24\r\n    let minutes = Math.floor((timeRemaning / 60) % 60); // вычитываются минуты, а ниже секунды\r\n    let seconds = Math.floor(timeRemaning % 60); // остаток от деления на 60\r\n\r\n    return { timeRemaning, days, hours, minutes, seconds };\r\n  }\r\n\r\n  // Создаю ф-цию, которая будет обновлять таймер и переношу сюда значения\r\n  const updateClock = () => {\r\n\r\n    let getTime = getTimeRemaining('01 may 2022');\r\n\r\n    timerDays.textContent = ('0' + getTime.days).slice(-2);\r\n    timerHours.textContent = ('0' + getTime.hours).slice(-2);\r\n    timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);\r\n    timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);\r\n\r\n    if (getTime.timeRemaning > 0) {\r\n      clearInterval(idInterval);\r\n      idInterval = setInterval(updateClock, 1000, '01 may 2022');\r\n    } else if (getTime.timeRemaning <= 0) {\r\n      clearInterval(idInterval);\r\n      timerDays.textContent = ('0' + '0');\r\n      timerHours.textContent = ('0' + '0');\r\n      timerMinutes.textContent = ('0' + '0');\r\n      timerSeconds.textContent = ('0' + '0');\r\n    }\r\n\r\n  }\r\n  updateClock();\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;