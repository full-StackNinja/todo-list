/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/index.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/index.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Set overall page structure */
.page-container {
     height: 100%;
     width: 100%;
     display: grid;
     overflow-y: hidden;
     grid-template-areas:
          "header header"
          "sidebar content";
     grid-template-columns: minmax(auto, 300rem) 1fr;
     grid-template-rows: auto 1fr;
}

.header-container {
     padding: 10rem 40rem;
     grid-area: header;
     background-color: #e2e8f0;
     display: grid;
     grid-auto-flow: column;
     grid-template-columns: auto auto;
     justify-content: space-between;
     align-items: center;
}

.header-item {
     height: 40rem;
     border-radius: 5rem;
}

.header-left {
     display: flex;
     gap: 10rem;
}

.header-right {
     display: flex;
     gap: 10rem;
}

.login-button,
.signup-button {
     padding: 8rem 40rem;
     border-radius: 8rem;
}

input {
     margin: 0;
     padding-left: 20rem;
     padding-right: 10rem;
}

.header-left :hover,
.header-right :hover {
     background-color: #cbd5e1;
     cursor: pointer;
}

.searchbar-container {
     height: 30rem;
     border-radius: 5rem;
     margin: 0;
     padding: 0;
     display: flex;
     align-items: center;
}

.searchbar-container input {
     background-color: hsla(0, 9%, 87%, 0.8);
}

.searchbar-container :hover {
     cursor: text;
     background-color: #fafaf9;
}

.searchbar-container :focus {
     width: 400rem;
}

.search-bar {
     height: 30rem;
     align-self: center;
     border: none;
     outline: none;
     border-radius: 5rem;
     position: relative;
}

.search-item {
     position: absolute;
     z-index: 1;
     height: 20rem;
}

.header-left .menu-item {
     position: relative;
}

.sidebar-container {
     display: flex;
     gap: 16rem;
     position: relative;
     transition: ease left 0.3s;
     left: 0;
     height: 100vh;
     flex-direction: column;
     background-color: #f1f5f9;
     color: #222;
     padding: 40rem 10rem;
}

/* toggle sidebar container list on menu icon click */
.toggle {
     left: -100%;
}

.sidebar-container .projects-container {
     margin-top: 40rem;
}

.projects-header {
     display: flex;
}

.projects-header .projects-heading {
     display: inline-block;
     margin-right: auto;
     font-weight: bold;
}

.projects-header :nth-child(n + 2) {
     opacity: 0;
}

.projects-header .show-icon {
     opacity: 1;
}

.sidebar-container .sidebar-item {
     display: flex;
     gap: 16rem;
     justify-content: left;
     align-items: center;
     padding: 5rem;
     border-radius: 5rem;
     cursor: pointer;
}

.sidebar-container .sidebar-item:hover,
.sidebar-container .sidebar-item:active {
     /* background-color: #ccc; */
}

.projects-container:hover,
.projects-container:active{
     background-color:#f1f5f9;
}

.projects-container {
     flex-direction: column;
}

.projects-container :first-child {
     width: 100%;
}

.projects-header :nth-child(n) {
     height: 24rem;
}

.project-form{
     display: flex;
     flex-direction: column;
     gap: 5rem;
     justify-content: center;
     align-items:center;
}

input#new-project {
     display: block;
     height: 30rem;
     outline: none;
     border: none;
     border-radius: 5rem;
}

.add-project-btn, .cancel-project-btn{
     flex-grow: 0;
     display: inline-block;
     border: 1px solid #ccc;
     border-radius: 5rem;
     background-color:#bfdbfe;
     max-width: 70rem;
     min-width: 70rem;
     padding: 5rem 10rem;

}

.project-btns{
     display: flex;
     align-self:flex-end;
     gap: 10rem;
}

.new-project-container{
     border: 1px solid;
     display: flex;
     justify-content: space-between;
     width: 100%;
     gap: 10rem;
     align-items: center;
}

.project-first-icon{
     justify-self:flex-start;
     margin-left: 10rem;
}

.new-project{
     font-weight: 700;
     flex:1;
}

.project-last-icon{
     opacity: 0;
}

.show-remove-icon{
     opacity: 1;
}


.content-container {
     grid-area: content;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/index.css"],"names":[],"mappings":"AAAA,+BAA+B;AAC/B;KACK,YAAY;KACZ,WAAW;KACX,aAAa;KACb,kBAAkB;KAClB;;2BAEsB;KACtB,+CAA+C;KAC/C,4BAA4B;AACjC;;AAEA;KACK,oBAAoB;KACpB,iBAAiB;KACjB,yBAAyB;KACzB,aAAa;KACb,sBAAsB;KACtB,gCAAgC;KAChC,8BAA8B;KAC9B,mBAAmB;AACxB;;AAEA;KACK,aAAa;KACb,mBAAmB;AACxB;;AAEA;KACK,aAAa;KACb,UAAU;AACf;;AAEA;KACK,aAAa;KACb,UAAU;AACf;;AAEA;;KAEK,mBAAmB;KACnB,mBAAmB;AACxB;;AAEA;KACK,SAAS;KACT,mBAAmB;KACnB,oBAAoB;AACzB;;AAEA;;KAEK,yBAAyB;KACzB,eAAe;AACpB;;AAEA;KACK,aAAa;KACb,mBAAmB;KACnB,SAAS;KACT,UAAU;KACV,aAAa;KACb,mBAAmB;AACxB;;AAEA;KACK,uCAAuC;AAC5C;;AAEA;KACK,YAAY;KACZ,yBAAyB;AAC9B;;AAEA;KACK,aAAa;AAClB;;AAEA;KACK,aAAa;KACb,kBAAkB;KAClB,YAAY;KACZ,aAAa;KACb,mBAAmB;KACnB,kBAAkB;AACvB;;AAEA;KACK,kBAAkB;KAClB,UAAU;KACV,aAAa;AAClB;;AAEA;KACK,kBAAkB;AACvB;;AAEA;KACK,aAAa;KACb,UAAU;KACV,kBAAkB;KAClB,0BAA0B;KAC1B,OAAO;KACP,aAAa;KACb,sBAAsB;KACtB,yBAAyB;KACzB,WAAW;KACX,oBAAoB;AACzB;;AAEA,qDAAqD;AACrD;KACK,WAAW;AAChB;;AAEA;KACK,iBAAiB;AACtB;;AAEA;KACK,aAAa;AAClB;;AAEA;KACK,qBAAqB;KACrB,kBAAkB;KAClB,iBAAiB;AACtB;;AAEA;KACK,UAAU;AACf;;AAEA;KACK,UAAU;AACf;;AAEA;KACK,aAAa;KACb,UAAU;KACV,qBAAqB;KACrB,mBAAmB;KACnB,aAAa;KACb,mBAAmB;KACnB,eAAe;AACpB;;AAEA;;KAEK,4BAA4B;AACjC;;AAEA;;KAEK,wBAAwB;AAC7B;;AAEA;KACK,sBAAsB;AAC3B;;AAEA;KACK,WAAW;AAChB;;AAEA;KACK,aAAa;AAClB;;AAEA;KACK,aAAa;KACb,sBAAsB;KACtB,SAAS;KACT,uBAAuB;KACvB,kBAAkB;AACvB;;AAEA;KACK,cAAc;KACd,aAAa;KACb,aAAa;KACb,YAAY;KACZ,mBAAmB;AACxB;;AAEA;KACK,YAAY;KACZ,qBAAqB;KACrB,sBAAsB;KACtB,mBAAmB;KACnB,wBAAwB;KACxB,gBAAgB;KAChB,gBAAgB;KAChB,mBAAmB;;AAExB;;AAEA;KACK,aAAa;KACb,mBAAmB;KACnB,UAAU;AACf;;AAEA;KACK,iBAAiB;KACjB,aAAa;KACb,8BAA8B;KAC9B,WAAW;KACX,UAAU;KACV,mBAAmB;AACxB;;AAEA;KACK,uBAAuB;KACvB,kBAAkB;AACvB;;AAEA;KACK,gBAAgB;KAChB,MAAM;AACX;;AAEA;KACK,UAAU;AACf;;AAEA;KACK,UAAU;AACf;;;AAGA;KACK,kBAAkB;AACvB","sourcesContent":["/* Set overall page structure */\n.page-container {\n     height: 100%;\n     width: 100%;\n     display: grid;\n     overflow-y: hidden;\n     grid-template-areas:\n          \"header header\"\n          \"sidebar content\";\n     grid-template-columns: minmax(auto, 300rem) 1fr;\n     grid-template-rows: auto 1fr;\n}\n\n.header-container {\n     padding: 10rem 40rem;\n     grid-area: header;\n     background-color: #e2e8f0;\n     display: grid;\n     grid-auto-flow: column;\n     grid-template-columns: auto auto;\n     justify-content: space-between;\n     align-items: center;\n}\n\n.header-item {\n     height: 40rem;\n     border-radius: 5rem;\n}\n\n.header-left {\n     display: flex;\n     gap: 10rem;\n}\n\n.header-right {\n     display: flex;\n     gap: 10rem;\n}\n\n.login-button,\n.signup-button {\n     padding: 8rem 40rem;\n     border-radius: 8rem;\n}\n\ninput {\n     margin: 0;\n     padding-left: 20rem;\n     padding-right: 10rem;\n}\n\n.header-left :hover,\n.header-right :hover {\n     background-color: #cbd5e1;\n     cursor: pointer;\n}\n\n.searchbar-container {\n     height: 30rem;\n     border-radius: 5rem;\n     margin: 0;\n     padding: 0;\n     display: flex;\n     align-items: center;\n}\n\n.searchbar-container input {\n     background-color: hsla(0, 9%, 87%, 0.8);\n}\n\n.searchbar-container :hover {\n     cursor: text;\n     background-color: #fafaf9;\n}\n\n.searchbar-container :focus {\n     width: 400rem;\n}\n\n.search-bar {\n     height: 30rem;\n     align-self: center;\n     border: none;\n     outline: none;\n     border-radius: 5rem;\n     position: relative;\n}\n\n.search-item {\n     position: absolute;\n     z-index: 1;\n     height: 20rem;\n}\n\n.header-left .menu-item {\n     position: relative;\n}\n\n.sidebar-container {\n     display: flex;\n     gap: 16rem;\n     position: relative;\n     transition: ease left 0.3s;\n     left: 0;\n     height: 100vh;\n     flex-direction: column;\n     background-color: #f1f5f9;\n     color: #222;\n     padding: 40rem 10rem;\n}\n\n/* toggle sidebar container list on menu icon click */\n.toggle {\n     left: -100%;\n}\n\n.sidebar-container .projects-container {\n     margin-top: 40rem;\n}\n\n.projects-header {\n     display: flex;\n}\n\n.projects-header .projects-heading {\n     display: inline-block;\n     margin-right: auto;\n     font-weight: bold;\n}\n\n.projects-header :nth-child(n + 2) {\n     opacity: 0;\n}\n\n.projects-header .show-icon {\n     opacity: 1;\n}\n\n.sidebar-container .sidebar-item {\n     display: flex;\n     gap: 16rem;\n     justify-content: left;\n     align-items: center;\n     padding: 5rem;\n     border-radius: 5rem;\n     cursor: pointer;\n}\n\n.sidebar-container .sidebar-item:hover,\n.sidebar-container .sidebar-item:active {\n     /* background-color: #ccc; */\n}\n\n.projects-container:hover,\n.projects-container:active{\n     background-color:#f1f5f9;\n}\n\n.projects-container {\n     flex-direction: column;\n}\n\n.projects-container :first-child {\n     width: 100%;\n}\n\n.projects-header :nth-child(n) {\n     height: 24rem;\n}\n\n.project-form{\n     display: flex;\n     flex-direction: column;\n     gap: 5rem;\n     justify-content: center;\n     align-items:center;\n}\n\ninput#new-project {\n     display: block;\n     height: 30rem;\n     outline: none;\n     border: none;\n     border-radius: 5rem;\n}\n\n.add-project-btn, .cancel-project-btn{\n     flex-grow: 0;\n     display: inline-block;\n     border: 1px solid #ccc;\n     border-radius: 5rem;\n     background-color:#bfdbfe;\n     max-width: 70rem;\n     min-width: 70rem;\n     padding: 5rem 10rem;\n\n}\n\n.project-btns{\n     display: flex;\n     align-self:flex-end;\n     gap: 10rem;\n}\n\n.new-project-container{\n     border: 1px solid;\n     display: flex;\n     justify-content: space-between;\n     width: 100%;\n     gap: 10rem;\n     align-items: center;\n}\n\n.project-first-icon{\n     justify-self:flex-start;\n     margin-left: 10rem;\n}\n\n.new-project{\n     font-weight: 700;\n     flex:1;\n}\n\n.project-last-icon{\n     opacity: 0;\n}\n\n.show-remove-icon{\n     opacity: 1;\n}\n\n\n.content-container {\n     grid-area: content;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/my-css-reset.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/my-css-reset.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/****** Elad Shechter's RESET *******/
/*** box sizing border-box for all elements ***/
*,
*::before,
*::after {
     box-sizing: border-box;
}
a {
     text-decoration: none;
     color: inherit;
     cursor: pointer;
}
button {
     background-color: transparent;
     color: inherit;
     border-width: 0;
     padding: 0;
     cursor: pointer;
}
figure {
     margin: 0;
}
input::-moz-focus-inner {
     border: 0;
     padding: 0;
     margin: 0;
}
ul,
ol,
dd {
     margin: 0;
     padding: 0;
     list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
     margin: 0;
     font-size: inherit;
     font-weight: inherit;
}
p {
     margin: 0;
}
cite {
     font-style: normal;
}
fieldset {
     border-width: 0;
     padding: 0;
     margin: 0;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/my-css-reset.css"],"names":[],"mappings":"AAAA,qCAAqC;AACrC,+CAA+C;AAC/C;;;KAGK,sBAAsB;AAC3B;AACA;KACK,qBAAqB;KACrB,cAAc;KACd,eAAe;AACpB;AACA;KACK,6BAA6B;KAC7B,cAAc;KACd,eAAe;KACf,UAAU;KACV,eAAe;AACpB;AACA;KACK,SAAS;AACd;AACA;KACK,SAAS;KACT,UAAU;KACV,SAAS;AACd;AACA;;;KAGK,SAAS;KACT,UAAU;KACV,gBAAgB;AACrB;AACA;;;;;;KAMK,SAAS;KACT,kBAAkB;KAClB,oBAAoB;AACzB;AACA;KACK,SAAS;AACd;AACA;KACK,kBAAkB;AACvB;AACA;KACK,eAAe;KACf,UAAU;KACV,SAAS;AACd","sourcesContent":["/****** Elad Shechter's RESET *******/\n/*** box sizing border-box for all elements ***/\n*,\n*::before,\n*::after {\n     box-sizing: border-box;\n}\na {\n     text-decoration: none;\n     color: inherit;\n     cursor: pointer;\n}\nbutton {\n     background-color: transparent;\n     color: inherit;\n     border-width: 0;\n     padding: 0;\n     cursor: pointer;\n}\nfigure {\n     margin: 0;\n}\ninput::-moz-focus-inner {\n     border: 0;\n     padding: 0;\n     margin: 0;\n}\nul,\nol,\ndd {\n     margin: 0;\n     padding: 0;\n     list-style: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n     margin: 0;\n     font-size: inherit;\n     font-weight: inherit;\n}\np {\n     margin: 0;\n}\ncite {\n     font-style: normal;\n}\nfieldset {\n     border-width: 0;\n     padding: 0;\n     margin: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/normalize.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/normalize.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/typography.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/typography.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
     font-size: 1px; /*for using REM units*/
}
body {
     font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
     font-size: 16rem;
     font-weight: 400;
     line-height: 1.3;
     color: #222;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/typography.css"],"names":[],"mappings":"AAAA;KACK,cAAc,EAAE,sBAAsB;AAC3C;AACA;KACK,mJAAmJ;KACnJ,gBAAgB;KAChB,gBAAgB;KAChB,gBAAgB;KAChB,WAAW;AAChB","sourcesContent":["html {\n     font-size: 1px; /*for using REM units*/\n}\nbody {\n     font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n     font-size: 16rem;\n     font-weight: 400;\n     line-height: 1.3;\n     color: #222;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheets/index.css":
/*!***********************************!*\
  !*** ./src/stylesheets/index.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/my-css-reset.css":
/*!******************************************!*\
  !*** ./src/stylesheets/my-css-reset.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./my-css-reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/my-css-reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/normalize.css":
/*!***************************************!*\
  !*** ./src/stylesheets/normalize.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/typography.css":
/*!****************************************!*\
  !*** ./src/stylesheets/typography.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./typography.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/typography.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/script-files/dom-manipulation.js":
/*!**********************************************!*\
  !*** ./src/script-files/dom-manipulation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_header_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/header/menu-icon.svg */ "./src/assets/header/menu-icon.svg");
/* harmony import */ var _assets_header_home_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/header/home.svg */ "./src/assets/header/home.svg");
/* harmony import */ var _assets_header_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/header/search.svg */ "./src/assets/header/search.svg");
/* harmony import */ var _assets_header_user_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/header/user-icon.svg */ "./src/assets/header/user-icon.svg");
/* harmony import */ var _assets_sidebar_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sidebar/plus.svg */ "./src/assets/sidebar/plus.svg");
/* harmony import */ var _assets_sidebar_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sidebar/chevron-down.svg */ "./src/assets/sidebar/chevron-down.svg");
/* harmony import */ var _assets_sidebar_chevron_left_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/sidebar/chevron-left.svg */ "./src/assets/sidebar/chevron-left.svg");
/* harmony import */ var _assets_sidebar_circle_outline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/sidebar/circle-outline.svg */ "./src/assets/sidebar/circle-outline.svg");
/* harmony import */ var _assets_sidebar_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/sidebar/close.svg */ "./src/assets/sidebar/close.svg");
// Import required assets for header section





// Import required assets for sidebar section






// IIFE Module for all the dom-manipulation related tasks
const domManipulation = (function () {
     // Set overall page structure
     const setPageStructure = function () {
          // create Container Elements
          const pageContainer = document.createElement("div");
          const headerContainer = document.createElement("header");
          const sidebarContainer = document.createElement("div");
          const contentContainer = document.createElement("main");

          // Add classes to each container
          pageContainer.classList.add("page-container");
          headerContainer.classList.add("header-container");
          sidebarContainer.classList.add("sidebar-container");
          contentContainer.classList.add("content-container");

          // Define parent-child relationship for above containers
          pageContainer.appendChild(headerContainer);
          pageContainer.appendChild(sidebarContainer);
          pageContainer.appendChild(contentContainer);

          // Finally attach parent Container to the body of the page.
          document.body.appendChild(pageContainer);
     };

     // Add header items
     const setHeaderStructure = function () {
          const headerContainer = document.querySelector(".header-container");

          const headerLeft = document.createElement("div");
          const headerRight = document.createElement("div");
          const searchBarContainer = document.createElement("div");

          headerLeft.classList.add("header-left");
          headerRight.classList.add("header-right");
          searchBarContainer.classList.add("searchbar-container");

          const loginBtn = document.createElement("button");
          const signupBtn = document.createElement("button");
          const searchBar = document.createElement("input");

          const menuItem = new Image();
          const homeItem = new Image();
          const searchItem = new Image();
          const userPicture = new Image();

          menuItem.src = _assets_header_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
          homeItem.src = _assets_header_home_svg__WEBPACK_IMPORTED_MODULE_1__;
          searchItem.src = _assets_header_search_svg__WEBPACK_IMPORTED_MODULE_2__;
          userPicture.src = _assets_header_user_icon_svg__WEBPACK_IMPORTED_MODULE_3__;

          menuItem.classList.add("menu-item", "header-item");
          homeItem.classList.add("home-item", "header-item");
          searchBar.classList.add("search-bar", "header-item");
          searchItem.classList.add("search-item");

          loginBtn.classList.add("login-button", "header-item");
          signupBtn.classList.add("signup-button", "header-item");
          userPicture.classList.add("user-picture", "header-item");

          searchBar.type = "search";

          // Append search items to searchbar container
          searchBarContainer.append(searchItem, searchBar);

          loginBtn.textContent = "Login";
          signupBtn.textContent = "Sign up";

          // Append  left side and right side items to parents
          headerLeft.append(menuItem, homeItem, searchBarContainer);
          headerRight.append(loginBtn, signupBtn, userPicture);

          // Append header left and right to header container
          headerContainer.append(headerLeft, headerRight);
     };

     // Add sidebar items
     const setSidebarStructure = function () {
          // Call sidebar container
          const sidebarContainer = document.querySelector(".sidebar-container");

          const todayTask = document.createElement("div");
          const thisWeekTasks = document.createElement("div");
          const allTasks = document.createElement("div");
          const projectsContainer = document.createElement("div");
          const projectsHeader = document.createElement("div");
          // Add classes
          todayTask.classList.add("sidebar-item", "today-task");
          thisWeekTasks.classList.add("sidebar-item", "this-week-tasks");
          allTasks.classList.add("sidebar-item", "all-tasks");
          projectsHeader.classList.add("projects-header");
          projectsContainer.classList.add("sidebar-item", "projects-container");

          // Add tabindex attributes to make them focusable
          todayTask.setAttribute("tabindex", "-1");
          thisWeekTasks.setAttribute("tabindex", "-1");
          allTasks.setAttribute("tabindex", "-1");
          projectsHeader.setAttribute("tabindex", "-1");
          projectsContainer.setAttribute("tabindex", "-1");

          const todayTaskIcon = document.createElement("span");
          const todayTaskText = document.createElement("span");

          todayTaskIcon.innerHTML = "&#x23F0";
          todayTaskText.innerHTML = "Today";

          // Append to their immediate parent
          todayTask.append(todayTaskIcon, todayTaskText);

          const thisWeekIcon = document.createElement("span");
          const thisWeekText = document.createElement("span");

          thisWeekIcon.innerHTML = "&#x1F5D3";
          thisWeekText.innerHTML = "This Week";

          // Append them to their immediate parent
          thisWeekTasks.append(thisWeekIcon, thisWeekText);

          const allTasksIcon = document.createElement("span");
          const allTasksText = document.createElement("span");

          allTasksIcon.innerHTML = "&#x1F4DC";
          allTasksText.innerHTML = "All Tasks";

          // Append to their parent
          allTasks.append(allTasksIcon, allTasksText);

          const projectText = document.createElement("span");
          const projectPlusIcon = new Image();
          const projectChevronIcon = new Image();

          projectText.innerHTML = "Projects";
          projectPlusIcon.src = _assets_sidebar_plus_svg__WEBPACK_IMPORTED_MODULE_4__;
          projectChevronIcon.src = _assets_sidebar_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5__;

          // Add classes
          projectText.classList.add("projects-heading");
          projectPlusIcon.classList.add("add-project");
          projectChevronIcon.classList.add("toggle-projects-list");

          // Append them to their parent
          projectsHeader.append(projectText, projectPlusIcon, projectChevronIcon);

          // Append projects header to projectsContainer
          projectsContainer.appendChild(projectsHeader);

          // Append sidebar children
          sidebarContainer.append(todayTask, thisWeekTasks, allTasks, projectsContainer);
     };

     // Toggle sidebar container on 'menu icon' click
     const toggleSidebar = function () {
          const sidebarContainer = document.querySelector(".sidebar-container");
          sidebarContainer.classList.toggle("toggle");
     };

     // show/hide projects' add icons on mouse enter to/leave from sidebar container
     const showProjectIcons = function () {
          const projectsHeader = document.querySelector(".projects-header");
          projectsHeader.querySelectorAll("img").forEach((image) => {
               image.classList.add("show-icon");
          });
     };

     const hideProjectIcons = function () {
          const projectsHeader = document.querySelector(".projects-header");
          projectsHeader.querySelectorAll("img").forEach((image) => {
               image.classList.remove("show-icon");
          });
     };

     // Show addTask form
     const showAddTaskForm = function () {
          // TODO - show task form stuff here
     };

     // Get taskForm data

     const getTaskFormData = function () {
          // TODO - related stuff here
     };
     // Count total projects
     let projectCount = 0;
     const showProjectForm = function () {
          const projectsContainer = document.querySelector(".projects-container");

          const projectForm = document.createElement("form");
          const projectName = document.createElement("input");
          const projectBtns = document.createElement("div");
          const addBtn = document.createElement("button");
          const cancelBtn = document.createElement("button");

          projectName.type = "text";
          projectName.name = `new-project`;
          projectName.id = `${++projectCount}`;
          projectName.classList.add("project-name-field");
          projectName.placeholder = "Project Name";

          addBtn.type = "submit";
          addBtn.innerHTML = "Add";
          cancelBtn.type = "reset";
          cancelBtn.innerHTML = "Cancel";

          // Add classes
          projectForm.classList.add("project-form");
          projectBtns.classList.add("project-btns");
          addBtn.classList.add("add-project-btn");
          cancelBtn.classList.add("cancel-project-btn");

          // Append children
          projectBtns.append(cancelBtn, addBtn);

          // Append children
          projectForm.append(projectName, projectBtns);

          // Append project name input field to projects container
          projectsContainer.appendChild(projectForm);
     };

     const getProjectData = function (event) {
          const projectsContainer = document.querySelector(".projects-container");
          const projectName = document.querySelector(".project-name-field");
          event.preventDefault();
          const projectData = {};
          projectData.name = projectName.name;
          projectData.id = projectName.id;
          projectData.value = projectName.value;
          projectsContainer.removeChild(projectsContainer.lastChild);
          return projectData;
     };

     const addProjectToDom = function (projectData) {
          const projectsContainer = document.querySelector(".projects-container");

          const newProjectContainer = document.createElement("div");
          newProjectContainer.id = `${projectData.id}`;
          newProjectContainer.classList.add("new-project-container");

          const projectIcon = new Image();
          const removeProject = new Image();

          projectIcon.src = _assets_sidebar_circle_outline_svg__WEBPACK_IMPORTED_MODULE_7__;
          removeProject.src = _assets_sidebar_close_svg__WEBPACK_IMPORTED_MODULE_8__;

          projectIcon.style.width = "20rem";
          removeProject.style.width = "20rem";
          projectIcon.classList.add("project-first-icon");
          removeProject.classList.add("project-last-icon");

          const newProject = document.createElement("span");
          newProject.classList.add("new-project");

          newProject.innerHTML = `${projectData.value}`;

          newProjectContainer.append(projectIcon, newProject, removeProject);

          projectsContainer.appendChild(newProjectContainer);
     };

     const toggleProjectRemoveIcon = function (event) {
          const projectsHeader = document.querySelector(".projects-header");

          if (event.target !== projectsHeader) {
               const newProjectContainer = document.querySelector(".new-project-container");
               console.log(newProjectContainer)
               // const removeIcon = newProjectContainer.querySelector(".last-project-icon");
               // removeIcon.classList.toggle("show-remove-icon");
          }
     };

     const cancelProject = function () {
          const projectsContainer = document.querySelector("projects-container");
          projectsContainer.remove(projectsContainer.lastChild);
     };

     return {
          setPageStructure,
          setHeaderStructure,
          setSidebarStructure,
          toggleSidebar,
          showProjectIcons,
          hideProjectIcons,
          showProjectForm,
          getProjectData,
          addProjectToDom,
          toggleProjectRemoveIcon,
     };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManipulation);


/***/ }),

/***/ "./src/script-files/project-manager.js":
/*!*********************************************!*\
  !*** ./src/script-files/project-manager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectManager = (function () {
     const projectsList = []
     const saveProject = function (projectData) {
        projectsList.push(projectData)
     }  
     return {saveProject}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);

/***/ }),

/***/ "./src/assets/header/home.svg":
/*!************************************!*\
  !*** ./src/assets/header/home.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05860554faa6ff6112f2.svg";

/***/ }),

/***/ "./src/assets/header/menu-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/header/menu-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f140de7684063011fa6.svg";

/***/ }),

/***/ "./src/assets/header/search.svg":
/*!**************************************!*\
  !*** ./src/assets/header/search.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d8096ec2e669bd4bbb1.svg";

/***/ }),

/***/ "./src/assets/header/user-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/header/user-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efdab8d30dcc8bfc8e8b.svg";

/***/ }),

/***/ "./src/assets/sidebar/chevron-down.svg":
/*!*********************************************!*\
  !*** ./src/assets/sidebar/chevron-down.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da1d4548b671a011dfa4.svg";

/***/ }),

/***/ "./src/assets/sidebar/chevron-left.svg":
/*!*********************************************!*\
  !*** ./src/assets/sidebar/chevron-left.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3490f5eea08639f690a3.svg";

/***/ }),

/***/ "./src/assets/sidebar/circle-outline.svg":
/*!***********************************************!*\
  !*** ./src/assets/sidebar/circle-outline.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fecdc070e9b39da8fba6.svg";

/***/ }),

/***/ "./src/assets/sidebar/close.svg":
/*!**************************************!*\
  !*** ./src/assets/sidebar/close.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/assets/sidebar/plus.svg":
/*!*************************************!*\
  !*** ./src/assets/sidebar/plus.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/script-files/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/normalize.css */ "./src/stylesheets/normalize.css");
/* harmony import */ var _stylesheets_my_css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/my-css-reset.css */ "./src/stylesheets/my-css-reset.css");
/* harmony import */ var _stylesheets_typography_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/typography.css */ "./src/stylesheets/typography.css");
/* harmony import */ var _stylesheets_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/index.css */ "./src/stylesheets/index.css");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-manipulation */ "./src/script-files/dom-manipulation.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-manager */ "./src/script-files/project-manager.js");
// Import necessary stylesheets





// Import Modules into main/index script file



// set overall page structure
_dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].setPageStructure();

// Add header Items
_dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].setHeaderStructure();

// Add sidebar items
_dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].setSidebarStructure();

// Toggle sidebar container on menu icon click
const menuIcon = document.querySelector(".menu-item");
menuIcon.onclick = _dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].toggleSidebar; 

// show/hide projects' add icons on mouse enter to/leave from sidebar container
const sidebarContainer = document.querySelector(".sidebar-container");

sidebarContainer.onmouseover = _dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].showProjectIcons;
sidebarContainer.onmouseleave = _dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].hideProjectIcons;

// Add project when user click on Plus icon in projects
const addProject = document.querySelector('.add-project')
addProject.addEventListener("click", _dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].showProjectForm)

// get project data for further use when user press add button
const projectsContainer = document.querySelector('.projects-container')
const addProjectBtn = document.querySelector('.add-project-btn')

projectsContainer.addEventListener("submit", (event) => {
     const projectData = _dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].getProjectData(event)
     _project_manager__WEBPACK_IMPORTED_MODULE_5__["default"].saveProject(projectData)
     _dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].addProjectToDom(projectData)
}) 

// Todo... 
// Show/hide project cancel icon on mouseover/mouseleave
projectsContainer.onmouseover = _dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].toggleProjectRemoveIcon;
projectsContainer.onmouseleave = _dom_manipulation__WEBPACK_IMPORTED_MODULE_4__["default"].toggleProjectRemoveIcon;
// Todo...
// Cancel adding of the project
const cancelProjectBtn = document.querySelector('.cancel-project-btn')

// cancelProjectBtn.onclick = domManipulation.cancelProject;

// Toggle projects list on "Chevron Icon" click
const toggleProjectsList = document.querySelector(".toggle-projects-list");
// toggleProjectsList.addEventListener('click', domManipulation.toggleProjectsList)
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map