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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Data/Products.ts":
/*!******************************!*\
  !*** ./src/Data/Products.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.products = [
    {
        id: 1,
        title: 'Malabar Biriyani',
        ImageUrl: 'https://i.imgur.com/ULHbPTa.jpg',
        Price: 100
    },
    {
        id: 2,
        title: 'Pasta',
        ImageUrl: 'https://i.imgur.com/r7rQBCS.jpg',
        Price: 200
    },
    {
        id: 3,
        title: 'Chicken Fried Rice',
        ImageUrl: 'https://i.imgur.com/pYSgtB4.jpg',
        Price: 250
    },
    {
        id: 4,
        title: 'Chicken Noodles',
        ImageUrl: 'https://i.imgur.com/6VY0ci9.png',
        Price: 250
    }
];


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//(function()
//{
//interface Icontainer{
//name:string;
Object.defineProperty(exports, "__esModule", { value: true });
//}
//const a: Icontainer ={
//name:'Hi'
//}
//console.log(a);
var ProductList_1 = __webpack_require__(/*! ./classes/ProductList */ "./src/classes/ProductList.ts");
var cart_1 = __webpack_require__(/*! ./classes/cart */ "./src/classes/cart.ts");
var Products_1 = __webpack_require__(/*! ./Data/Products */ "./src/Data/Products.ts");
var cart = new cart_1.cartitem();
var productList = new ProductList_1.productlist(Products_1.products, cart);
productList.renderlist();
cart.renderCartBox();
//})();


/***/ }),

/***/ "./src/classes/ProductList.ts":
/*!************************************!*\
  !*** ./src/classes/ProductList.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var productlist = /** @class */ (function () {
    function productlist(list, cart) {
        this.list = list;
        this.cart = cart;
        this.productlistcontainer = document.querySelector('.product-list');
    }
    productlist.prototype.renderlist = function () {
        var _this = this;
        this.list.forEach(function (item) {
            var productDivEl = document.createElement('div');
            productDivEl.className = 'product-item';
            var productTitleEl = document.createElement('h3');
            var productImageEl = document.createElement('img');
            var ProductPriceEl = document.createElement('Price');
            var productbuttonEl = document.createElement('button');
            productTitleEl.textContent = item.title;
            productImageEl.src = item.ImageUrl;
            ProductPriceEl.textContent = item.Price.toString();
            productbuttonEl.textContent = " Add to Cart";
            productbuttonEl.addEventListener('click', function () {
                _this.cart.addtocart(item.id);
            });
            productDivEl.appendChild(productTitleEl);
            productDivEl.appendChild(productImageEl);
            productDivEl.appendChild(ProductPriceEl);
            productDivEl.appendChild(productbuttonEl);
            _this.productlistcontainer.appendChild(productDivEl);
        });
    };
    return productlist;
}());
exports.productlist = productlist;


/***/ }),

/***/ "./src/classes/cart.ts":
/*!*****************************!*\
  !*** ./src/classes/cart.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cartitem = /** @class */ (function () {
    function cartitem() {
        this.items = [];
    }
    cartitem.prototype.addtocart = function (productid) {
        this.items.push({
            id: this.items.length + 1,
            productid: productid,
            quantity: 1
        });
        this.renderCartBox();
    };
    cartitem.prototype.getCartitem = function () {
    };
    cartitem.prototype.renderCartBox = function () {
        var miniCartContainerEl = document.querySelector('.mini-cart');
        miniCartContainerEl.textContent = "You have " + this.items.length + " items in your cart";
    };
    return cartitem;
}());
exports.cartitem = cartitem;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map