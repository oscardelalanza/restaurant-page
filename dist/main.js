/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/*! exports provided: main, footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\n/* harmony import */ var _img_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/gallery-1.jpg */ \"./src/img/gallery-1.jpg\");\n/* harmony import */ var _img_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/gallery-2.jpg */ \"./src/img/gallery-2.jpg\");\n/* harmony import */ var _img_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/gallery-3.jpg */ \"./src/img/gallery-3.jpg\");\n/* harmony import */ var _img_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/gallery-4.jpg */ \"./src/img/gallery-4.jpg\");\n/* harmony import */ var _img_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/gallery-5.jpg */ \"./src/img/gallery-5.jpg\");\n/* harmony import */ var _img_gallery_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/gallery-6.jpg */ \"./src/img/gallery-6.jpg\");\n/* harmony import */ var _img_gallery_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/gallery-7.jpg */ \"./src/img/gallery-7.jpg\");\n/* harmony import */ var _img_gallery_8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/gallery-8.jpg */ \"./src/img/gallery-8.jpg\");\n\n\n\n\n\n\n\n\n\n// method for create a basic image gallery\nconst _gallery = () => {\n\n    const gallery = document.createElement('div');\n    const images = [_img_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _img_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _img_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _img_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _img_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _img_gallery_6_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _img_gallery_7_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _img_gallery_8_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n\n    images.forEach(element => {\n\n        const img = document.createElement('img');\n\n        img.src = element;\n        gallery.appendChild(img);\n\n    });\n\n    return gallery;\n\n};\n\nconst _location = () => {\n\n    const location = document.createElement('div');\n    const address = document.createElement('div');\n    const schedule = document.createElement('div');\n    const title = document.createElement('h3');\n    const street = document.createElement('p');\n    const phone = document.createElement('p');\n    const email = document.createElement('p');\n    const subtitle = document.createElement('h4');\n    const week = document.createElement('p');\n    const weekend = document.createElement('p');\n\n    title.textContent = 'Location';\n\n    street.textContent = '1 Macquarie St, Sydney NSW 2000, Australia';\n    phone.textContent = '+61 2 9240 2255';\n    email.textContent = 'example@email.com';\n    address.appendChild(street);\n    address.appendChild(phone);\n    address.appendChild(email);\n\n    subtitle.textContent = 'Schedule';\n    week.textContent = 'Monday to Friday 12:00 - 22:30';\n    weekend.textContent = 'Saturday and Sunday 12:00 - 22:00';\n    schedule.appendChild(subtitle);\n    schedule.appendChild(week);\n    schedule.appendChild(weekend);\n\n    location.appendChild(title);\n    location.appendChild(address);\n    location.appendChild(schedule);\n\n    return location;\n\n};\n\n// method for insert a map\nconst _map = () => {\n\n    const map = document.createElement('iframe');\n\n    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.3397555421225!2d151.21314029242754!3d-33.85956641319514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae67d5541c77%3A0x8af817cc7e3857d7!2sAria%20Restaurant%20Sydney!5e0!3m2!1ses!2smx!4v1578622220577!5m2!1ses!2smx';\n    map.width = '800';\n    map.height = '600';\n    map.frameBorder = '0';\n    map.style.border = '0';\n    map.allowFullscreen = '';\n\n\n    return map;\n};\n\n/* =============================================== Exported Methods ================================================= */\n\n// method for create main\nconst main = () => {\n\n    const main = document.createElement('main');\n    const menu = document.createElement('section');\n    const gallery = document.createElement('section');\n    const location = document.createElement('section');\n    const map = document.createElement('section');\n\n    menu.appendChild(_menu());\n    gallery.appendChild(_gallery());\n    location.appendChild(_location());\n    map.appendChild(_map());\n\n    main.appendChild(menu);\n    main.appendChild(gallery);\n    main.appendChild(location);\n    main.appendChild(map);\n\n    return main;\n\n};\n\nconst footer = () => {\n\n    const footer = document.createElement('footer');\n    const text = document.createElement('p');\n\n    text.textContent = 'Oscar De La Lanza 2020';\n    footer.appendChild(text);\n\n    return footer;\n\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/domElements.js?");

/***/ }),

/***/ "./src/img/gallery-1.jpg":
/*!*******************************!*\
  !*** ./src/img/gallery-1.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"af5bba8fdf58ed0378cf0cbccb5034a4.jpg\");\n\n//# sourceURL=webpack:///./src/img/gallery-1.jpg?");

/***/ }),

/***/ "./src/img/gallery-2.jpg":
/*!*******************************!*\
  !*** ./src/img/gallery-2.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"02e0a359eee4428980de8cf074707567.jpg\");\n\n//# sourceURL=webpack:///./src/img/gallery-2.jpg?");

/***/ }),

/***/ "./src/img/gallery-3.jpg":
/*!*******************************!*\
  !*** ./src/img/gallery-3.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"16984ccdd9ca1ffd4d23ae9c79e7f5eb.jpg\");\n\n//# sourceURL=webpack:///./src/img/gallery-3.jpg?");

/***/ }),

/***/ "./src/img/gallery-4.jpg":
/*!*******************************!*\
  !*** ./src/img/gallery-4.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a96d8909dac51ea3c28fc3adb0ff1f1b.jpg\");\n\n//# sourceURL=webpack:///./src/img/gallery-4.jpg?");

/***/ }),

/***/ "./src/img/gallery-5.jpg":
/*!*******************************!*\
  !*** ./src/img/gallery-5.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cffadaa8d7a6b5133489a0a1109b71ad.jpg\");\n\n//# sourceURL=webpack:///./src/img/gallery-5.jpg?");

/***/ }),

/***/ "./src/img/gallery-6.jpg":
/*!*******************************!*\
  !*** ./src/img/gallery-6.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"efc8ebea7ab9e478a2cce6a59507ad84.jpg\");\n\n//# sourceURL=webpack:///./src/img/gallery-6.jpg?");

/***/ }),

/***/ "./src/img/gallery-7.jpg":
/*!*******************************!*\
  !*** ./src/img/gallery-7.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"eaec130dcf9be01afd66bfcbc3cc9703.jpg\");\n\n//# sourceURL=webpack:///./src/img/gallery-7.jpg?");

/***/ }),

/***/ "./src/img/gallery-8.jpg":
/*!*******************************!*\
  !*** ./src/img/gallery-8.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"276bb4ad2255f37ede19550346ecf5b5.jpg\");\n\n//# sourceURL=webpack:///./src/img/gallery-8.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n\n\nconst content = document.getElementById('content');\n\ncontent.appendChild(Object(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"header\"])());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });