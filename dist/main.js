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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/Roboto-Thin.ttf */ \"./src/fonts/Roboto-Thin.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/Roboto-Light.ttf */ \"./src/fonts/Roboto-Light.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/Roboto-Regular.ttf */ \"./src/fonts/Roboto-Regular.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../fonts/Roboto-Medium.ttf */ \"./src/fonts/Roboto-Medium.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../fonts/Roboto-Bold.ttf */ \"./src/fonts/Roboto-Bold.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/bg-img.jpg */ \"./src/img/bg-img.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-weight: 200;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); }\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-weight: 300;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"); }\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-weight: 400;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \"); }\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-weight: 600;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \"); }\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-weight: 700;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \"); }\\n\\n* {\\n  border: 0;\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: Roboto, serif;\\n  text-decoration: none; }\\n\\n.container {\\n  width: 90%;\\n  max-width: 1000px;\\n  margin: 0 auto; }\\n\\n/* ==================================================== header ====================================================== */\\nheader {\\n  height: 550px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  background-size: cover;\\n  color: #fff;\\n  width: 100%;\\n  position: relative; }\\n  header nav {\\n    display: flex;\\n    justify-content: flex-end;\\n    position: relative;\\n    z-index: 1; }\\n    header nav a {\\n      color: #fff;\\n      display: inline-block;\\n      margin: 30px 30px;\\n      font-size: 20px;\\n      font-weight: 200;\\n      border-bottom: solid 1px transparent; }\\n      header nav a:hover {\\n        border-bottom: solid 1px #fff; }\\n  header .title-container {\\n    height: 100%;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    display: flex;\\n    flex-wrap: wrap;\\n    align-content: center; }\\n    header .title-container h1, header .title-container h3 {\\n      width: 100%;\\n      text-align: center; }\\n    header .title-container h1 {\\n      margin-bottom: 15px;\\n      font-weight: 300;\\n      font-size: 48px; }\\n    header .title-container h3 {\\n      font-weight: 200;\\n      font-style: italic;\\n      font-size: 24px; }\\n\\n/* ==================================================== home ======================================================== */\\n.home .img-container {\\n  width: 80%;\\n  height: 400px;\\n  overflow: hidden; }\\n  .home .img-container img {\\n    width: 100%; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/sass/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: location, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"location\", function() { return location; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\nconst location = () => {\n\n    const location = document.createElement('div');\n    const address = document.createElement('div');\n    const schedule = document.createElement('div');\n    const title = document.createElement('h3');\n    const street = document.createElement('p');\n    const phone = document.createElement('p');\n    const email = document.createElement('p');\n    const subtitle = document.createElement('h4');\n    const week = document.createElement('p');\n    const weekend = document.createElement('p');\n\n    title.innerText = 'Location';\n\n    street.innerText = '1 Macquarie St, Sydney NSW 2000, Australia';\n    phone.innerText = '+61 2 9240 2255';\n    email.innerText = 'example@email.com';\n    address.appendChild(street);\n    address.appendChild(phone);\n    address.appendChild(email);\n\n    subtitle.innerText = 'Schedule';\n    week.innerText = 'Monday to Friday 12:00 - 22:30';\n    weekend.innerText = 'Saturday and Sunday 12:00 - 22:00';\n    schedule.appendChild(subtitle);\n    schedule.appendChild(week);\n    schedule.appendChild(weekend);\n\n    location.appendChild(title);\n    location.appendChild(address);\n    location.appendChild(schedule);\n\n    return location;\n\n};\n\n// method for insert a map\nconst map = () => {\n\n    const map = document.createElement('iframe');\n\n    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.3397555421225!2d151.21314029242754!3d-33.85956641319514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae67d5541c77%3A0x8af817cc7e3857d7!2sAria%20Restaurant%20Sydney!5e0!3m2!1ses!2smx!4v1578622220577!5m2!1ses!2smx';\n    map.width = '800';\n    map.height = '600';\n    map.frameBorder = '0';\n    map.style.border = '0';\n\n    return map;\n};\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/fonts/Roboto-Bold.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Roboto-Bold.ttf ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e07df86cef2e721115583d61d1fb68a6.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Roboto-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto-Light.ttf":
/*!************************************!*\
  !*** ./src/fonts/Roboto-Light.ttf ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"88823c2015ffd5fa89d567e17297a137.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Roboto-Light.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto-Medium.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Roboto-Medium.ttf ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"58aef543c97bbaf6a9896e8484456d98.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Roboto-Medium.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"11eabca2251325cfc5589c9c6fb57b46.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto-Thin.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Roboto-Thin.ttf ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"321de678e592d0b8f44f1a82d7ca4b62.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Roboto-Thin.ttf?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\nconst footer = () => {\n\n    const footer = document.createElement('footer');\n    const text = document.createElement('p');\n\n    text.innerText = 'Oscar De La Lanza 2020';\n    footer.appendChild(text);\n\n    return footer;\n\n};\n\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: homeLink, menuLink, contactLink, nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeLink\", function() { return homeLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuLink\", function() { return menuLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactLink\", function() { return contactLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nav\", function() { return nav; });\nconst homeLink = document.createElement('a');\nconst menuLink = document.createElement('a');\nconst contactLink = document.createElement('a');\n\n// navigation menu\nconst nav = () => {\n\n    const header = document.createElement('header');\n    const navTag = document.createElement('nav');\n    const titleContainer = document.createElement('div');\n    const title = document.createElement('h1');\n    const subtitle = document.createElement('h3');\n\n    homeLink.innerText = 'Home';\n    homeLink.href = '#';\n\n    menuLink.innerText = 'Menu';\n    menuLink.href = '#';\n\n    contactLink.innerText = 'Contact Us';\n    contactLink.href = '#';\n\n    titleContainer.classList.add('title-container');\n    titleContainer.classList.add('container');\n    title.innerText = 'The Coffee Shop';\n    subtitle.innerText = 'The Coffee Shop, but with smaller characters :)';\n\n    navTag.className = 'container';\n    titleContainer.appendChild(title);\n    titleContainer.appendChild(subtitle);\n    navTag.appendChild(homeLink);\n    navTag.appendChild(menuLink);\n    navTag.appendChild(contactLink);\n    header.appendChild(navTag);\n    header.appendChild(titleContainer);\n\n    return header;\n\n};\n\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony import */ var _img_about_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/about-img.jpg */ \"./src/img/about-img.jpg\");\n\n\n// home page\nconst home = () => {\n\n    const home = document.createElement('div');\n    const title = document.createElement('h2');\n    const subtitle = document.createElement('h4');\n    const description = document.createElement('p');\n    const imgContainer = document.createElement('div');\n    const img = document.createElement('img');\n\n    title.innerText = 'About The Coffee Shop';\n    subtitle.innerText = 'Here should be the description but instead of that here is just a random text :)';\n    description.innerText = 'Morbi euismod lacus arcu, volutpat rutrum lacus vulputate quis. Suspendisse eget risus ' +\n        'luctus eros aliquet vestibulum vel nec sem. Aenean facilisis elementum dolor, sed lobortis eros lacinia vel. ' +\n        'Mauris nec quam eu metus porttitor pharetra tincidunt a lacus. Donec sit amet viverra augue. Aenean nunc ' +\n        'sapien, posuere nec suscipit non, convallis at metus. Sed accumsan fringilla diam. Sed tempus, diam ut rutrum ' +\n        'accumsan, leo dolor pharetra mauris, non scelerisque quam est id velit.';\n    img.src = _img_about_img_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    imgContainer.className = 'img-container';\n    home.classList.add('container');\n    home.classList.add('home');\n\n    imgContainer.appendChild(img);\n    home.appendChild(title);\n    home.appendChild(subtitle);\n    home.appendChild(imgContainer);\n    home.appendChild(description);\n\n    return home;\n\n};\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/img/about-img.jpg":
/*!*******************************!*\
  !*** ./src/img/about-img.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5f0e5e5d2aee701ad8cfdfbd4723c519.jpg\");\n\n//# sourceURL=webpack:///./src/img/about-img.jpg?");

/***/ }),

/***/ "./src/img/bg-img.jpg":
/*!****************************!*\
  !*** ./src/img/bg-img.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fe7988be77cc336cf7bf0ee8d7bca7fa.jpg\");\n\n//# sourceURL=webpack:///./src/img/bg-img.jpg?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst content = document.getElementById('content');\n\ncontent.appendChild(Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"nav\"])());\ncontent.appendChild(Object(_home__WEBPACK_IMPORTED_MODULE_1__[\"home\"])());\ncontent.appendChild(Object(_footer__WEBPACK_IMPORTED_MODULE_4__[\"footer\"])());\n\n_header__WEBPACK_IMPORTED_MODULE_0__[\"homeLink\"].addEventListener('click', () => {\n\n    content.innerHTML = '';\n    content.appendChild(Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"nav\"])());\n    content.appendChild(Object(_home__WEBPACK_IMPORTED_MODULE_1__[\"home\"])());\n    content.appendChild(Object(_footer__WEBPACK_IMPORTED_MODULE_4__[\"footer\"])());\n\n});\n\n_header__WEBPACK_IMPORTED_MODULE_0__[\"menuLink\"].addEventListener('click', () => {\n\n    content.innerHTML = '';\n    content.appendChild(Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"nav\"])());\n    content.appendChild(Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"menu\"])());\n    content.appendChild(Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"gallery\"])());\n    content.appendChild(Object(_footer__WEBPACK_IMPORTED_MODULE_4__[\"footer\"])());\n\n});\n\n_header__WEBPACK_IMPORTED_MODULE_0__[\"contactLink\"].addEventListener('click', () => {\n\n    content.innerHTML = '';\n    content.appendChild(Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"nav\"])());\n    content.appendChild(Object(_contact__WEBPACK_IMPORTED_MODULE_3__[\"location\"])());\n    content.appendChild(Object(_contact__WEBPACK_IMPORTED_MODULE_3__[\"map\"])());\n    content.appendChild(Object(_footer__WEBPACK_IMPORTED_MODULE_4__[\"footer\"])());\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menu, gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gallery\", function() { return gallery; });\n/* harmony import */ var _img_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/gallery-1.jpg */ \"./src/img/gallery-1.jpg\");\n/* harmony import */ var _img_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/gallery-2.jpg */ \"./src/img/gallery-2.jpg\");\n/* harmony import */ var _img_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/gallery-3.jpg */ \"./src/img/gallery-3.jpg\");\n/* harmony import */ var _img_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/gallery-4.jpg */ \"./src/img/gallery-4.jpg\");\n/* harmony import */ var _img_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/gallery-5.jpg */ \"./src/img/gallery-5.jpg\");\n/* harmony import */ var _img_gallery_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/gallery-6.jpg */ \"./src/img/gallery-6.jpg\");\n/* harmony import */ var _img_gallery_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/gallery-7.jpg */ \"./src/img/gallery-7.jpg\");\n/* harmony import */ var _img_gallery_8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/gallery-8.jpg */ \"./src/img/gallery-8.jpg\");\n// method for create a basic menu\n\n\n\n\n\n\n\n\n\nconst menu = () => {\n    const menu = document.createElement('div');\n    const articleDrinks = document.createElement('article');\n    const articleFoods = document.createElement('article');\n    const title = document.createElement('h3');\n\n    title.innerText = 'Menu';\n\n    for (let i = 0; i < 5; i++) {\n\n        const name = document.createElement('p');\n        const price = document.createElement('p');\n        const description = document. createElement('p');\n\n        name.innerText = 'Lorem ipsum dolor.';\n        price.innerText = '$' + Math.floor(Math.random() * 30).toString();\n        description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non.';\n\n        articleDrinks.appendChild(name);\n        articleDrinks.appendChild(price);\n        articleDrinks.appendChild(description);\n        articleFoods.appendChild(name);\n        articleFoods.appendChild(price);\n        articleFoods.appendChild(description);\n\n    }\n\n    menu.appendChild(title);\n    menu.appendChild(articleDrinks);\n    menu.appendChild(articleFoods);\n\n    return menu;\n\n};\n\n// method for create a basic image gallery\nconst gallery = () => {\n\n    const gallery = document.createElement('div');\n    const images = [_img_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _img_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _img_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _img_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _img_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _img_gallery_6_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _img_gallery_7_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _img_gallery_8_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n\n    images.forEach(element => {\n\n        const img = document.createElement('img');\n\n        img.src = element;\n        gallery.appendChild(img);\n\n    });\n\n    return gallery;\n\n};\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });