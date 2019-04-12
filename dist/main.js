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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return players; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './map'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nlet naruto = new Image();\nnaruto.src = \"../src/images/sprites/naruto.png\";\nnaruto.onload = function(){\n  players();\n};\n\nlet sasuke = new Image();\nsasuke.src = \"../src/images/sprites/sasuke.png\";\nsasuke.onload = function(){\n  players();\n};\n\nlet canvas = document.getElementById('ninjaBomberCanvas');\nlet ctx = canvas.getContext('2d');\n\nconst spriteSheetWidth = 28;\nconst spriteSheetHeight = 46;\nconst startingX = 28.7;\nconst startingY = 28.7;\nconst spriteWidth = 20;\nconst spriteHeight = 28.7;\n\nconst spriteXStartPos = 10;\nconst spriteYStartPos = 9;\nconst spriteXOffset = 46;\nconst spriteYOffset = 65;\nconst xMapOffset = 225.3;\n\nfunction drawFrame(frameX, frameY, canvasX, canvasY){\n  ctx.drawImage(\n    naruto, \n    (frameX * spriteXOffset) + spriteXStartPos,\n    (frameY * spriteYOffset) + spriteYStartPos,\n    spriteSheetWidth,\n    spriteSheetHeight,\n    startingX * canvasX,\n    startingY * canvasY,\n    spriteWidth,\n    spriteHeight\n  );\n}\n\nconst cycleLoop = [0, 1, 2, 3];\nlet currentLoopIndex = 0;\nlet frameCount = 0;\n\nfunction step() {\n  frameCount++;\n  if (frameCount < 20){\n    window.requestAnimationFrame(step);\n    return;\n  }\n  frameCount=0;\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  !(function webpackMissingModule() { var e = new Error(\"Cannot find module './map'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);\n  currentLoopIndex++;\n  if (currentLoopIndex >= cycleLoop.length) {\n    currentLoopIndex = 0;\n  }\n  // window.requestAnimationFrame(step);\n}\n\nfunction players(){\n  // drawFrame(0,0,0,0);\n  // drawFrame(1,0,1,0);\n  // drawFrame(2,0,2,0);\n  // drawFrame(3,0,3,0);\n  window.requestAnimationFrame(step);\n  // ctx.drawImage(\n  //   naruto,\n  //   10,\n  //   74,\n  //   28,\n  //   46,\n  //   0,\n  //   0,\n  //   20,\n  //   28.7\n  // );\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });