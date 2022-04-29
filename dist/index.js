/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/form.js":
/*!*************************!*\
  !*** ./modules/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = () => {

    const formSends = document.querySelectorAll('form')
   
    formSends.forEach(form => {
        const lists = form.querySelectorAll('input')
        // console.log(lists)
        lists.forEach(list => {
        //    console.log(list)
        })
    })
    

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const modal = () => {
    const overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.popup')
   

    document.addEventListener('click', (e) => {
        e.stopPropagation()
        if (e.target.closest('.btn__consult') || e.target.closest('.step__btn')) {
            overlay.style.display = 'block'
            modal.style.display = 'block'
            document.body.style.overflow = 'hidden'
        }
        if (e.target.closest('.overlay') || e.target.closest('.popup__close')) {
            overlay.style.display = 'none'
            modal.style.display = 'none'
            document.body.style.overflow = ''
        }
        
    })
    document.addEventListener('keydown', (e) => { 
        if (e.code === 'Escape') {
            overlay.style.display = 'none'
            modal.style.display = 'none'
            document.body.style.overflow = ''
        }
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./modules/swiper.js":
/*!***************************!*\
  !*** ./modules/swiper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const swiper = (selector) => {
    const swiper = new Swiper(selector, {
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        
        navigation: {
            nextEl: ".swiper__button__next",
            prevEl: ".swiper__button__prev",
          },
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);

/***/ }),

/***/ "./modules/swiper_iccons.js":
/*!**********************************!*\
  !*** ./modules/swiper_iccons.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const swiperIccons = (selector) => {
    const swiper = new Swiper(selector, {
      slidesPerView: 5,
      spaceBetween: 0,
      loop: true,
     
      navigation: {
          nextEl: ".swiper__button__next",
          prevEl: ".swiper__button__prev",
      },
      breakpoints: {
        346: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1080: {
          slidesPerView: 4,
        },
        1240: {
          slidesPerView: 5,
          
        },
      },
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiperIccons);

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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/swiper */ "./modules/swiper.js");
/* harmony import */ var _modules_swiper_iccons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/swiper_iccons */ "./modules/swiper_iccons.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./modules/form.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");













(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_0__["default"])(".blog_swiper")
;(0,_modules_swiper_iccons__WEBPACK_IMPORTED_MODULE_1__["default"])(".about__iccons")
;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=index.js.map