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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/images/food.jpg");

/***/ }),

/***/ "./src/images/menu/cheeseburger.png":
/*!******************************************!*\
  !*** ./src/images/menu/cheeseburger.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/menu/cheeseburger.png");

/***/ }),

/***/ "./src/images/menu/double-cheeseburger.png":
/*!*************************************************!*\
  !*** ./src/images/menu/double-cheeseburger.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/menu/double-cheeseburger.png");

/***/ }),

/***/ "./src/images/menu/grilled-cheese.png":
/*!********************************************!*\
  !*** ./src/images/menu/grilled-cheese.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/menu/grilled-cheese.png");

/***/ }),

/***/ "./src/images/menu/hamburger.png":
/*!***************************************!*\
  !*** ./src/images/menu/hamburger.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/menu/hamburger.png");

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

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });


function contactPage() {
  const contactInfoWrapper = document.createElement('div');

  contactInfoWrapper.classList.add('contact-info');

  [
    ['Location', '#89b Forest Hill Drive, Loopside, PL 09098'],
    ['Opening Hours', 'Mon-Thurs:8am-8pm, Fri-Sun:8am-11pm']
  ].forEach((item) => {
    const row = document.createElement('p');
    const label = document.createElement('span');
    const data = document.createTextNode(item[1]);

    label.classList.add('label');
    label.innerText = item[0];
    row.appendChild(label);
    row.appendChild(data);
    contactInfoWrapper.appendChild(row);
  });

  return contactInfoWrapper;
}




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
  const heroWrapper = document.createElement('div');
  const heroBody = document.createElement('div');
  const heroFooter = document.createElement('div');
  const heroImage = document.createElement('img');
  const heroButton = document.createElement('button');
  const heroTagline = document.createElement('p');

  heroImage.src = _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__.default;
  heroImage.classList.add('hero-image');
  heroButton.innerText = 'You\'re Welcome';
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

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _images_menu_cheeseburger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu/cheeseburger.png */ "./src/images/menu/cheeseburger.png");
/* harmony import */ var _images_menu_double_cheeseburger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/menu/double-cheeseburger.png */ "./src/images/menu/double-cheeseburger.png");
/* harmony import */ var _images_menu_grilled_cheese_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/menu/grilled-cheese.png */ "./src/images/menu/grilled-cheese.png");
/* harmony import */ var _images_menu_hamburger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/menu/hamburger.png */ "./src/images/menu/hamburger.png");







class Meal {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

const todayMenu = [
  new Meal('Cheeseburger', 2.59, 'Buns, patty, tomato, onions, lettuce, and secret recipe.', _images_menu_cheeseburger_png__WEBPACK_IMPORTED_MODULE_0__.default),
  new Meal('Double Cheeseburger', 3.49, 'Cheeseburger, but with extra patty.', _images_menu_double_cheeseburger_png__WEBPACK_IMPORTED_MODULE_1__.default),
  new Meal('Grilled Cheese Sandwich', 4.99, 'toasted, grilled cheese sandwich', _images_menu_grilled_cheese_png__WEBPACK_IMPORTED_MODULE_2__.default),
  new Meal('Hamburger', 4.99, 'Buns, patty, tomato, onions, lettuce, and secret recipe.', _images_menu_hamburger_png__WEBPACK_IMPORTED_MODULE_3__.default)
];

function addToMenu(meal) {
  const listItem = document.createElement('li');
  const img = document.createElement('img');
  const listBody = document.createElement('div');
  const mealTitle = document.createElement('h5');
  const mealDescription = document.createElement('p');
  const mealPrice = document.createElement('h6');

  img.src = meal.image;
  img.classList.add('menu-cover');
  mealTitle.innerText = meal.title;
  mealTitle.classList.add('meal-title');
  mealDescription.innerText = meal.description;
  mealPrice.innerText = `$${meal.price}`;
  mealPrice.classList.add('text-primary', 'meal-price');
  listBody.classList.add('menu-body');
  listBody.appendChild(mealTitle);
  listBody.appendChild(mealDescription);
  listBody.appendChild(mealPrice);
  listItem.classList.add('menu-list-item');
  listItem.appendChild(img);
  listItem.appendChild(listBody);

  return listItem;
}

function menuPage() {
  const menuWrapper = document.createElement('div');
  const paneTitle = document.createElement('h2');
  const menuList = document.createElement('ul');

  todayMenu.forEach(meal => menuList.appendChild(addToMenu(meal)));

  paneTitle.innerText = 'On Our Menu Today';
  paneTitle.classList.add('text-primary');
  menuList.classList.add('menu-list');
  menuWrapper.appendChild(paneTitle);
  menuWrapper.appendChild(menuList);
  menuWrapper.classList.add('menu');
  return menuWrapper;
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
  navLink.setAttribute('data-pane', linkName.toLowerCase());

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
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");









const content = document.getElementById('content');
const contentInner = document.createElement('div');
const pane = {
  home: _modules_home__WEBPACK_IMPORTED_MODULE_3__.landingPage,
  menu: _modules_menu__WEBPACK_IMPORTED_MODULE_4__.menuPage,
  contact: _modules_contact__WEBPACK_IMPORTED_MODULE_5__.contactPage
};

content.appendChild((0,_modules_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar)());
contentInner.setAttribute('id', 'content-inner');
contentInner.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_3__.landingPage)());
content.appendChild(contentInner);

const navLinks = document.querySelectorAll('[data-pane]');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.currentTarget.classList.contains('active')) return;

    const activeLink = document.querySelector('.nav-link.active');
    const currentPane = pane[event.currentTarget.getAttribute('data-pane')];

    activeLink.classList.remove('active');
    event.currentTarget.classList.add('active');
    contentInner.innerHTML = '';
    contentInner.appendChild(currentPane());
  })
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map