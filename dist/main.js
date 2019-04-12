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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/map */ \"./src/js/map.js\");\n/* harmony import */ var _js_players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/players */ \"./src/js/players.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mapping; });\nlet mapComponents = new Image();\nmapComponents.src = \"../src/images/sprites/MapAndBomb.png\";\nmapComponents.onload = function(){\n  mapping();\n};\n\nlet canvas = document.getElementById('ninjaBomberCanvas');\nlet ctx = canvas.getContext('2d');\n\n// RELATED TO SPRITE\n// sx: x position on sprite sheet\n// sy: y position on sprite sheet\n// sWdith: width of sprite to cut from x position\n// sHeight: hieght of sprite to cut from y position\n\n// RELATED TO CANVAS\n// dx: canvas x position\n// dy: canvas y position\n// dWdith: Width of cut out sprite shown on canvas\n// dHeight: Height of cut out sprite shown on canvas\n\n//constants for mapping\nconst spriteSheetWidth = 47.5;\nconst spriteSheetHeight = 47.5;\nconst startingX = 28.7;\nconst startingY = 28.7;\nconst spriteMapWidth = 28.7;\nconst spriteMapHeight = 28.7;\n\nconst spriteXStartPos = 3.5;\nconst spriteYStartPos = 2.5;\nconst spriteXOffset = 52;\nconst spriteYOffset = 52.5;\nconst xMapOffset = 220;\n\nfunction drawMap(frameX, frameY, canvasX, canvasY){\n  ctx.drawImage(\n    mapComponents, \n    (frameX * spriteXOffset) + spriteXStartPos,\n    (frameY * spriteYOffset) + spriteYStartPos,\n    spriteSheetWidth,\n    spriteSheetHeight,\n    (startingX * canvasX) + xMapOffset,\n    (startingY * canvasY),\n    spriteMapWidth,\n    spriteMapHeight\n  );\n}\n\nfunction mapping(){\n  for (let i = 0; i < 15; i++) {\n    for (let j = 0; j < 15; j++) {\n      if(i === 0 || j === 0 || i === 14 || j === 14 || ((i % 2 === 0) && (j % 2 === 0))){\n        // unbreakable walls\n        drawMap(1, 0, i, j);\n      } else if((j < 2 && (j - 1) % 2 === 0) || ((j-1) % 2 === 0 && (i) % 2 === 0)){\n        // grass with top shadow\n        drawMap(4, 0, i, j);\n      } else{\n        // grass without shadow\n        drawMap(3, 0, i, j);\n      }\n    }\n  }\n  // for testing\n  // ctx.drawImage(\n  //   naruto,\n  //   10,\n  //   74,\n  //   28,\n  //   46,\n  //   0,\n  //   0,\n  //   20,\n  //   28.7\n  // );\n}\n\n//# sourceURL=webpack:///./src/js/map.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return players; });\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/js/map.js\");\n\n\n\nlet naruto = new Image();\nnaruto.src = \"../src/images/sprites/naruto.png\";\nnaruto.onload = function(){\n  players();\n};\n\nlet sasuke = new Image();\nsasuke.src = \"../src/images/sprites/sasuke.png\";\nsasuke.onload = function(){\n  players();\n};\n\nlet canvas = document.getElementById('ninjaBomberCanvas');\nlet ctx = canvas.getContext('2d');\n\nconst spriteSheetWidth = 28;\nconst spriteSheetHeight = 46;\nconst startingX = 28.7;\nconst startingY = 28.7;\nconst spriteWidth = 20;\nconst spriteHeight = 28.7;\n\nconst spriteXStartPos = 10;\nconst spriteYStartPos = 9;\nconst spriteXOffset = 46;\nconst spriteYOffset = 65;\nconst xMapOffset = 225.3;\n\nfunction drawFrame(frameX, frameY, canvasX, canvasY){\n  ctx.drawImage(\n    naruto, \n    (frameX * spriteXOffset) + spriteXStartPos,\n    (frameY * spriteYOffset) + spriteYStartPos,\n    spriteSheetWidth,\n    spriteSheetHeight,\n    startingX * canvasX,\n    startingY * canvasY,\n    spriteWidth,\n    spriteHeight\n  );\n}\n\nconst cycleLoop = [0, 1, 2, 3];\nlet currentLoopIndex = 0;\nlet frameCount = 0;\n\nfunction step() {\n  frameCount++;\n  if (frameCount < 20){\n    window.requestAnimationFrame(step);\n    return;\n  }\n  frameCount=0;\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  Object(_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);\n  currentLoopIndex++;\n  if (currentLoopIndex >= cycleLoop.length) {\n    currentLoopIndex = 0;\n  }\n  window.requestAnimationFrame(step);\n}\n\nfunction players(){\n  // drawFrame(0,0,0,0);\n  // drawFrame(1,0,1,0);\n  // drawFrame(2,0,2,0);\n  // drawFrame(3,0,3,0);\n  window.requestAnimationFrame(step);\n  // ctx.drawImage(\n  //   naruto,\n  //   10,\n  //   74,\n  //   28,\n  //   46,\n  //   0,\n  //   0,\n  //   20,\n  //   28.7\n  // );\n}\n\n//# sourceURL=webpack:///./src/js/players.js?");

/***/ })

/******/ });