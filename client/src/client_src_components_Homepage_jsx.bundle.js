"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreatlas"] = self["webpackChunkreatlas"] || []).push([["client_src_components_Homepage_jsx"],{

/***/ "./client/src/components/Homepage.jsx":
/*!********************************************!*\
  !*** ./client/src/components/Homepage.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Homepage_NotFound_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Homepage/NotFound.jsx */ \"./client/src/components/Homepage/NotFound.jsx\");\n/* harmony import */ var _Homepage_DisplayCountries_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Homepage/DisplayCountries.jsx */ \"./client/src/components/Homepage/DisplayCountries.jsx\");\n/* harmony import */ var _Homepage_Loading_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Homepage/Loading.jsx */ \"./client/src/components/Homepage/Loading.jsx\");\n\n\n\n\n\nvar Homepage = function Homepage(_ref) {\n  var displayed = _ref.displayed,\n      searchString = _ref.searchString;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"countries\"\n  }, !displayed.length && searchString ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Homepage_NotFound_jsx__WEBPACK_IMPORTED_MODULE_1__.default, null) : displayed.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Homepage_DisplayCountries_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n    displayed: displayed\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Homepage_Loading_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n//# sourceURL=webpack://reatlas/./client/src/components/Homepage.jsx?");

/***/ }),

/***/ "./client/src/components/Homepage/CountryCard.jsx":
/*!********************************************************!*\
  !*** ./client/src/components/Homepage/CountryCard.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar CountryCard = function CountryCard(_ref) {\n  var countryData = _ref.countryData;\n\n  var parsePopulation = function parsePopulation() {\n    var parsed = new Intl.NumberFormat(\"en-US\");\n    return parsed.format(countryData.population);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"country\",\n    \"aria-label\": \"See more details about \".concat(countryData.name)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: countryData.flag,\n    alt: \"Flag of \".concat(countryData.name)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, countryData.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"Population:\"), \" \", parsePopulation()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"Region:\"), \" \", countryData.region), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"Capital:\"), \" \", countryData.capital)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryCard);\n\n//# sourceURL=webpack://reatlas/./client/src/components/Homepage/CountryCard.jsx?");

/***/ }),

/***/ "./client/src/components/Homepage/DisplayCountries.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/Homepage/DisplayCountries.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Homepage_CountryCard_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Homepage/CountryCard.jsx */ \"./client/src/components/Homepage/CountryCard.jsx\");\n\n\n\n\nvar DisplayCountries = function DisplayCountries(_ref) {\n  var displayed = _ref.displayed;\n  return displayed.map(function (country) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      to: {\n        pathname: \"/\".concat(country.name),\n        state: {\n          country: country\n        }\n      },\n      key: country.alpha3Code\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Homepage_CountryCard_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n      key: country.name,\n      countryData: country\n    }));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayCountries);\n\n//# sourceURL=webpack://reatlas/./client/src/components/Homepage/DisplayCountries.jsx?");

/***/ }),

/***/ "./client/src/components/Homepage/Loading.jsx":
/*!****************************************************!*\
  !*** ./client/src/components/Homepage/Loading.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\nvar Loading = function Loading() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"loader\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSpinner,\n    spin: true\n  }), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Loading...\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);\n\n//# sourceURL=webpack://reatlas/./client/src/components/Homepage/Loading.jsx?");

/***/ }),

/***/ "./client/src/components/Homepage/NotFound.jsx":
/*!*****************************************************!*\
  !*** ./client/src/components/Homepage/NotFound.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\nvar NotFound = function NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"not-found\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faExclamation\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Country not found\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\n\n//# sourceURL=webpack://reatlas/./client/src/components/Homepage/NotFound.jsx?");

/***/ })

}]);