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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_stylesheets_src_application_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/stylesheets/src/application.scss */ \"./assets/stylesheets/src/application.scss\");\n\n\nconst test = () => {\n  console.log('test');\n};\n\ntest();\nconst navToggle = document.querySelector('.services__container__title');\nconst articleToggle = document.getElementsByClassName('container__dropDown__info');\n\nfunction Toggle() {\n  for (let index = 0; index < articleToggle.length; index++) {\n    const element = articleToggle[index];\n    element.classList.toggle('show');\n  }\n}\n\nnavToggle.addEventListener('click', Toggle); //TOGGLE DETAILS\n\nconst linkToggle = document.querySelector('.link__moreInformation');\nconst detailsToggle = document.getElementById('section__details__dropDown');\n\nfunction ToggleMoreInformation() {\n  detailsToggle.classList.toggle('display');\n  console.log('hice click');\n}\n\nlinkToggle.addEventListener('click', ToggleMoreInformation);\n\n//# sourceURL=webpack://tck-prueba-front-maquetacion/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/stylesheets/src/application.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/stylesheets/src/application.scss ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n/* elementos */\\n/* bloques */\\n/* modulos */\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --color--background2: #fafafa;\\n  --color--background: #ffffff;\\n  --color--gray: #f2f2f2;\\n  --color--principal: #003970;\\n  --color--text: #4e5055;\\n  --color--btn--option--active: #033970;\\n  --color--secondary: #0c75c5;\\n  --height--header: 42px;\\n  --color--border--card: #326c96;\\n  --font--title--card: \\\"Roboto\\\", sans-serif;\\n  --font--title--service: \\\"Roboto Slab\\\", serif;\\n}\\n\\n#section__tabs,\\n#section__services {\\n  padding: 0 20px 0 20px;\\n  height: fit-content;\\n  background-color: var(--color--background2);\\n}\\n\\n/*SECTION HEADER TAB 1*/\\nheader {\\n  background-color: var(--color--background);\\n  width: 100%;\\n  height: var(--height--header);\\n  display: flex;\\n  justify-content: flex-end;\\n  display: none;\\n}\\n\\n.tabs__container__button {\\n  width: 30%;\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\nbutton {\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n  color: var(--color--principal);\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n.tabs__button--active {\\n  color: var(--color--principal);\\n}\\n\\n.tabs__button--disable {\\n  color: var(---color--secondary);\\n}\\n\\n/* TITLE HOTEL TAB 1*/\\n#container__general__card {\\n  padding-top: 40px;\\n}\\n\\n.main__title__hotel,\\nspan {\\n  color: var(--color--principal);\\n}\\n\\n.main__container__title {\\n  text-align: center;\\n}\\n\\n.main__title__hotel {\\n  font-family: Roboto Slab;\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 16px;\\n  line-height: 30px;\\n  text-transform: capitalize;\\n}\\n\\nspan {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-weight: 700;\\n}\\n\\n.main__title__hotel__rating {\\n  margin-left: 10px;\\n}\\n\\n/*CARD HOTEL TAB1*/\\n.card__container {\\n  background-color: var(--color--background);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 70vh;\\n  align-items: center;\\n  padding: 24px;\\n  margin-top: 40px;\\n  border: 1px solid var(--color--border--card);\\n  box-sizing: border-box;\\n  border-radius: 2px;\\n  justify-content: space-between;\\n}\\n\\n.card__title {\\n  color: var(--color--principal);\\n  text-align: center;\\n  font-size: 16px;\\n  line-height: 16px;\\n  font-family: var(--font--title--card);\\n}\\n\\nhr {\\n  color: var(--color--principal);\\n  margin-top: 23px;\\n  margin-bottom: 18px;\\n}\\n\\nul {\\n  padding: 20px;\\n}\\n\\nul > li.card__list {\\n  color: var(--color--principal);\\n  font-size: 16px;\\n  line-height: 24px;\\n  font-family: var(--font--title--card);\\n}\\n\\n.card__form {\\n  width: 100%;\\n  padding: 15px;\\n  border: 1px solid var(--color--border--card);\\n  transition: ease-in 0.3s;\\n  cursor: pointer;\\n  background-color: var(--color--gray);\\n}\\n\\n.card__label__button {\\n  cursor: pointer;\\n  color: var(--color--btn--option--active);\\n}\\n\\n/*!*****************************************************!*\\\\\\n/*!*****************************************************!*\\\\\\n/*MEDIA QUERIES TAB1*/\\n@media screen and (min-width: 768px) {\\n  #container__general__card {\\n    display: grid;\\n    column-gap: 15px;\\n    grid-template-columns: repeat(2, auto);\\n    grid-template-rows: repeat(2, auto);\\n  }\\n\\n  .card__container {\\n    height: 72vh;\\n  }\\n}\\n@media screen and (min-width: 1280px) {\\n  #container__general__card {\\n    display: grid;\\n    grid-template-columns: repeat(12, auto);\\n    column-gap: 20px;\\n  }\\n\\n  #card__one {\\n    grid-column-start: 1;\\n    grid-column-end: 4;\\n  }\\n\\n  #card__two {\\n    grid-column-start: 4;\\n    grid-column-end: 7;\\n  }\\n\\n  #card__three {\\n    grid-column-start: 7;\\n    grid-column-end: 10;\\n  }\\n\\n  #card__four {\\n    grid-column-start: 10;\\n    grid-column-end: 13;\\n  }\\n}\\n/*!*****************************************************!*\\\\\\n/*!*****************************************************!*\\\\\\n\\n\\n\\n/* STYLE TAB2*/\\n.nav__bar__mobile {\\n  display: flex;\\n  width: 100%;\\n  justify-content: flex-end;\\n  padding: 8px;\\n  right: 13px;\\n  position: fixed;\\n  top: 0;\\n  z-index: 999;\\n}\\n\\n#btn-switch-tab1 {\\n  border: 1px solid var(--color--secondary);\\n  cursor: pointer;\\n  font-family: var(--font--title--card);\\n  color: var(--color--principal);\\n  padding: 10px;\\n  background: var(--color--background);\\n  border-radius: 2px;\\n  text-decoration: none;\\n}\\n\\n#section__services {\\n  display: flex;\\n  flex-direction: column;\\n  background-color: var(--color--background2);\\n  height: fit-content;\\n  padding: 20px;\\n}\\n\\n#section__mejor__estancia,\\n#section__roomService {\\n  background-color: var(--color--background);\\n  width: 100%;\\n  position: relative;\\n  margin-top: 50px;\\n}\\n\\n.service__website {\\n  position: absolute;\\n  top: 0;\\n  right: 0px;\\n}\\n\\n.services__container__title {\\n  display: flex;\\n  flex-direction: row;\\n  height: 14vh;\\n  align-items: baseline;\\n  justify-content: space-around;\\n  padding: 39px 5px 5px 0px;\\n}\\n\\n.services__container__title > img {\\n  width: 16px;\\n  height: 8px;\\n  cursor: pointer;\\n}\\n\\n.service__title {\\n  color: var(--color--secondary);\\n  font-family: var(--font--title--service);\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 24px;\\n  line-height: 38px;\\n  transition: ease-in;\\n}\\n\\n.optional {\\n  font-family: Roboto;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 20px;\\n  color: var(--color--text);\\n}\\n\\n/*!*****************************************************!*\\\\\\n/*DESPLEGABLE MEJORA TU ESTANCIA */\\n.container__dropDown__info {\\n  border: 1px solid rgba(97, 100, 105, 0.2);\\n  padding: 12px;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: var(--color--background);\\n}\\n\\n.services__image {\\n  width: 268px;\\n  height: 180px;\\n}\\n\\n.article__services__title {\\n  margin-bottom: 10px;\\n}\\n\\n.article__services__hotel {\\n  text-align: justify;\\n  margin-top: 30px;\\n}\\n\\n.container__dropDown__image {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.text {\\n  font-family: var(--font--title--card);\\n  color: var(--color--text);\\n  font-size: 14px;\\n  line-height: 20px;\\n  text-align: justify;\\n}\\n\\n.show {\\n  display: flex;\\n}\\n\\n.link__moreInformation {\\n  font-family: var(--font--title--service);\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 14px;\\n  line-height: 20px;\\n  color: var(--color--secondary);\\n  margin-top: 20px;\\n  cursor: pointer;\\n}\\n\\n.display {\\n  display: block;\\n}\\n\\n#container__moreDetails {\\n  margin-top: 20px;\\n  display: none;\\n}\\n\\n#promotions {\\n  margin-top: 20px;\\n}\\n\\n#section__roomService {\\n  margin-top: 50px;\\n}\\n\\n/*!*****************************************************!*\\\\\\n/*!*****************************************************!*\\\\\\n/*MEDIA QUERIES TAB2*/\\n@media only screen and (min-width: 768px) {\\n  .nav__bar__mobile {\\n    display: none;\\n  }\\n\\n  #tabs {\\n    display: flex;\\n  }\\n\\n  .tabs__container__button {\\n    width: 12%;\\n  }\\n\\n  .services__container__title {\\n    width: 46vw;\\n    height: 10vh;\\n  }\\n\\n  .container__article {\\n    display: flex;\\n  }\\n\\n  .article__services__title {\\n    text-align: start;\\n  }\\n\\n  .article__services__hotel {\\n    text-align: justify;\\n    padding: 20px;\\n    margin-top: 0;\\n  }\\n\\n  #section__details__dropDown {\\n    display: grid;\\n    grid-template-columns: auto auto auto;\\n    column-gap: 10px;\\n    padding: 30px;\\n  }\\n\\n  .details {\\n    padding: 0px 41px;\\n  }\\n}\\n@media only screen and (min-width: 1280px) {\\n  .nav__bar__mobile {\\n    display: none;\\n  }\\n\\n  .article__services__hotel {\\n    padding: 25px 268px 66px 32px;\\n  }\\n\\n  #section__details__dropDown {\\n    display: grid;\\n    grid-template-columns: auto auto auto;\\n    column-gap: 43px;\\n  }\\n\\n  .services__container__title {\\n    width: 30vw;\\n    height: 8vh;\\n  }\\n\\n  #section__servicio-habitación {\\n    margin-top: 50px;\\n    margin-bottom: 119px;\\n  }\\n\\n  .container__dropDown__info {\\n    margin-bottom: 32px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tck-prueba-front-maquetacion/./assets/stylesheets/src/application.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tck-prueba-front-maquetacion/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./assets/stylesheets/src/application.scss":
/*!*************************************************!*\
  !*** ./assets/stylesheets/src/application.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_application_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./application.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/stylesheets/src/application.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_application_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_application_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_application_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_application_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://tck-prueba-front-maquetacion/./assets/stylesheets/src/application.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://tck-prueba-front-maquetacion/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tck-prueba-front-maquetacion/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tck-prueba-front-maquetacion/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tck-prueba-front-maquetacion/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;