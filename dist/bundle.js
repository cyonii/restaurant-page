/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/food.jpg");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Stop Over</title>\n</head>\n\n<body>\n  <div id=\"content\"></div>\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "landingPage": () => (/* binding */ landingPage)
/* harmony export */ });
/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/food.jpg */ "./src/images/food.jpg");




function landingPage() {
  const heroContainer = document.createElement('div');
  const heroWrapper = document.createElement('div', { id: 'homePoop' });
  const heroBody = document.createElement('div');
  const heroFooter = document.createElement('div');
  const heroImage = document.createElement('img');
  const heroButton = document.createElement('a');
  const heroTagline = document.createElement('p');

  heroImage.src = _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__.default;
  heroImage.classList.add('hero-image');
  heroButton.href = '#';
  heroButton.innerText = 'Open Menu';
  heroButton.classList.add('hero-btn');
  heroTagline.innerHTML = 'Treat yourself to the best intercontinental dishes. <br /> Stop over';
  heroTagline.classList.add('hero-tagline');
  heroBody.classList.add('hero-body');
  heroFooter.classList.add('hero-footer');
  heroWrapper.classList.add('hero');
  heroContainer.classList.add('container');

  heroBody.appendChild(heroImage);
  heroBody.appendChild(heroButton);
  heroFooter.appendChild(heroTagline);
  heroWrapper.appendChild(heroBody);
  heroWrapper.appendChild(heroFooter);
  heroContainer.appendChild(heroWrapper);

  return heroContainer;
}




/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });



function createMenuItem(linkName, active=false) {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a')

  navItem.classList.add('nav-item');
  navLink.href = '#';
  navLink.innerText = linkName;
  navLink.classList.add('nav-link');

  if (active) navLink.classList.add('active');

  navItem.appendChild(navLink);
  return navItem;
}

function navbar() {
  const navLinks = ['Home', 'Menu', 'Contact'];
  const header = document.createElement('header');
  const navbar = document.createElement('nav');
  const navbarMenu = document.createElement('ul');

  header.classList.add('header');
  navbar.classList.add('navbar', 'container');
  navbarMenu.classList.add('navbar-menu');
  navLinks.forEach((link, index) => {
    let active = false;
    if (index == 0) active = true;
    navbarMenu.appendChild(createMenuItem(link, active));
  });

  navbar.appendChild(navbarMenu);
  header.appendChild(navbar);

  return header;
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _modules_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navbar */ "./src/modules/navbar.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");







const content = document.getElementById('content');

content.appendChild((0,_modules_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar)());
content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_3__.landingPage)());

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map