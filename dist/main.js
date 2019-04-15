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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/map */ \"./src/js/map.js\");\n/* harmony import */ var _js_keyControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/keyControls */ \"./src/js/keyControls.js\");\n\n\n\n//add event listenr to player\nlet canvas = document.getElementById('ninjaBomberCanvas');\nlet ctx = canvas.getContext('2d');\n\nlet naruto = new Image();\nnaruto.src = \"../src/images/sprites/naruto.png\";\n\nlet sasuke = new Image();\nsasuke.src = \"../src/images/sprites/sasuke.png\";\n\nlet bomb = new Image();\nbomb.src = \"../src/images/sprites/MapAndBomb.png\";\n// bomb.onload = () => bomberDraw();\n\nlet controls = new _js_keyControls__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas, sasuke, naruto, bomb);\ncontrols.eventListner();\ncontrols.step();\n\n// function bomberDraw(){\n//   // ctx.drawImage(\n//   //   bomb,\n//   //   3.5 + (52*2),\n//   //   2.5 + (52*2),\n//   //   47.5,\n//   //   47.5,\n//   //   0,\n//   //   0,\n//   //   28.7,\n//   //   28.7\n//   // );\n// }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/bomb.js":
/*!************************!*\
  !*** ./src/js/bomb.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass bomb{\n  constructor(ctx, bombImg, xPos, yPos){\n    this.ctx = ctx;\n    this.bombImg = bombImg;\n    this.xPos = xPos;\n    this.yPos = yPos;\n\n    this.spriteXStartPos = 3.5;\n    this.spriteYStartPos = 2.5;\n    this.spriteXOffset = 52;\n    this.spriteYOffset = 52;\n    this.spriteSheetWidth = 47;\n    this.spriteSheetHeight = 47.5;\n    this.startingX = 28.7;\n    this.startingY = 28.7;\n    this.spriteMapWidth = 28.7;\n    this.spriteMapHeight = 28.7;\n\n    this.xMapOffset = 220;\n  }\n\n  step(){\n  }\n\n  drawBomb(frameX, frameY, canvasX, canvasY){\n    this.ctx.drawImage(\n      this.bombImg, \n      (frameX * this.spriteXOffset) + this.spriteXStartPos,\n      (frameY * this.spriteYOffset) + this.spriteYStartPos,\n      this.spriteSheetWidth,\n      this.spriteSheetHeight,\n      (this.startingX * canvasX) + this.xMapOffset,\n      (this.startingY * canvasY),\n      this.spriteMapWidth,\n      this.spriteMapHeight\n    );\n  }\n\n  explodeBomb(){\n    this.drawBomb(0,2,this.xPos, this.yPos);\n    // setTimeout(this.drawBomb(0, 2, this.xPos, this.yPos), 500);\n    // setTimeout(this.drawBomb(1, 2, this.xPos, this.yPos), 1000);\n    // setTimeout(this.drawBomb(2, 2, this.xPos, this.yPos), 1500);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bomb);\n\n//# sourceURL=webpack:///./src/js/bomb.js?");

/***/ }),

/***/ "./src/js/keyControls.js":
/*!*******************************!*\
  !*** ./src/js/keyControls.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ \"./src/js/players.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/js/map.js\");\n/* harmony import */ var _bomb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bomb */ \"./src/js/bomb.js\");\n\n\n\n\nclass keyControls{\n  constructor(ctx, canvas, sasuke, naruto, bombImg){\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.bombImg = bombImg;\n    this.player1 = new _players__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 1, 1, 0, naruto);\n    this.player2 = new _players__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 13, 13, 3, sasuke);\n    // first player\n    this.wPressed = false;\n    this.aPressed = false;\n    this.sPressed = false;\n    this.dPressed = false;\n    this.cPressed = false; //1st player bomb\n    // 2nd player\n    this.upPressed = false;\n    this.leftPressed = false;\n    this.downPressed = false;\n    this.rightPressed = false;\n    this.perPressed = false; //2nd player bomb\n    \n    this.narutoKeyDownHandler = this.narutoKeyDownHandler.bind(this);\n    this.sasukeKeyDownHandler = this.sasukeKeyDownHandler.bind(this);\n    this.narutoKeyUpHandler = this.narutoKeyUpHandler.bind(this);\n    this.sasukeKeyUpHandler = this.sasukeKeyUpHandler.bind(this);\n    this.update = 3;\n    this.narutoPos = 0;\n    this.sasukePos = 0;\n\n    this.narBomb1 = false;\n    this.narBomb2 = {x: 0, y:0};\n    this.narBomb3 = {x: 0, y:0};\n\n    this.sasBomb1 = {x: 0, y:0};\n    this.sasBomb2 = {x: 0, y:0};\n    this.sasBomb3 = {x: 0, y:0};\n\n  }\n\n  narutoKeyDownHandler(e){\n    //in order of w,a,s,d,c\n    if (e.which === 87){\n      this.wPressed = true;\n      if ((this.player1.yPos !== 1) && (this.player1.xPos % 2 !== 0) && \n      !((this.player1.xPos === this.player2.xPos && (this.player1.yPos - 1) === this.player2.yPos))){\n        this.player1.yPos -= 1;\n        this.narutoPos = 3;\n      } else {\n        this.narutoPos = 3;\n      }\n    } else if (e.which === 65){             \n      this.aPressed = true;\n      if (this.player1.xPos !== 1 && this.player1.yPos % 2 !== 0 && \n        !(((this.player1.xPos - 1) === this.player2.xPos && this.player1.yPos === this.player2.yPos))){\n        this.player1.xPos -= 1;\n        this.narutoPos = 1;\n      } else {\n        this.narutoPos = 1;\n      }\n    } else if (e.which === 83){\n      this.sPressed = true;\n      if (this.player1.yPos !== 13 && this.player1.xPos % 2 !== 0 && \n        !((this.player1.xPos === this.player2.xPos && (this.player1.yPos + 1) === this.player2.yPos))){\n        this.player1.yPos += 1;\n        this.narutoPos = 0;\n      } else {\n        this.narutoPos = 0;\n      }\n    } else if (e.which === 68){\n      this.dPressed = true;\n      if (this.player1.xPos !== 13 && this.player1.yPos % 2 !== 0 && \n        !(((this.player1.xPos + 1) === this.player2.xPos && this.player1.yPos === this.player2.yPos))){\n        this.player1.xPos += 1;\n        this.narutoPos = 2;\n      } else {\n        this.narutoPos = 2;\n      }\n    }\n    if (e.which === 67){\n      this.cPressed = true;\n      this.narBomb1 = true;\n      setTimeout( () => {this.narBomb1 = false;}, 3000);\n    }\n  }\n\n  narutoKeyUpHandler(e){\n    //in order of w,a,s,d,c\n    if (e.which === 87){\n      this.wPressed = false;\n    } else if (e.which === 65){\n      this.aPressed = false;\n    } else if (e.which === 83){\n      this.sPressed = false;\n    } else if (e.which === 68){\n      this.dPressed = false;\n    }\n  }\n\n  sasukeKeyDownHandler(e){\n    //in order of up,left,down,right,period\n    if (e.which == 38){\n      this.upPressed = true;\n      if (this.player2.yPos !== 1 && this.player2.xPos % 2 !== 0 && \n        !((this.player1.xPos === this.player2.xPos && (this.player2.yPos - 1) === this.player1.yPos))){\n        this.player2.yPos -= 1;\n        this.sasukePos = 3;\n      } else {\n        this.sasukePos = 3;\n      }\n    } else if (e.which === 37){\n      if (this.player2.xPos !== 1 && this.player2.yPos % 2 !== 0 && \n        !(((this.player2.xPos - 1) === this.player1.xPos && this.player1.yPos === this.player2.yPos))){\n        this.player2.xPos -= 1;\n        this.sasukePos = 1;\n      } else {\n        this.sasukePos = 1;\n      }\n    } else if (e.which === 40){\n      if (this.player2.yPos !== 13 && this.player2.xPos % 2 !== 0 && \n        !((this.player1.xPos === this.player2.xPos && (this.player2.yPos + 1) === this.player1.yPos))){\n        this.player2.yPos += 1;\n        this.sasukePos = 0;\n      } else {\n        this.sasukePos = 0;\n      }\n    } else if (e.which === 39){\n      if (this.player2.xPos !== 13 && this.player2.yPos % 2 !== 0 && \n        !(((this.player2.xPos + 1) === this.player1.xPos && this.player1.yPos === this.player2.yPos))){\n        this.player2.xPos += 1;\n        this.sasukePos = 2;\n      } else {\n        this.sasukePos = 2;\n      }\n    }\n    if (e.which === 190){\n      this.perPressed = true;\n    }\n  }\n\n  sasukeKeyUpHandler(e){\n    //in order of up,left,down,right,period\n    if (e.which === 38){\n      this.upPressed = false;\n    } else if (e.which === 37){\n      this.leftPressed = false;\n    } else if (e.which === 40){\n      this.downPressed = false;\n    } else if (e.which === 39){\n      this.rightPressed = false;\n    }\n    if (e.which === 190){\n      this.perPressed = false;\n    }\n  }\n\n  eventListner(){\n    document.addEventListener(\"keydown\", this.narutoKeyDownHandler, false);\n    document.addEventListener(\"keyup\", this.narutoKeyUpHandler, false);\n    document.addEventListener(\"keydown\", this.sasukeKeyDownHandler, false);\n    document.addEventListener(\"keyup\", this.sasukeKeyUpHandler, false);\n  }\n\n  step(){\n    this.ctx.clearRect(220, 0, this.canvas.width, this.canvas.height);\n    Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    if (this.narBomb1 === true){\n      let newBomb = new _bomb__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, this.bombImg, this.player1.xPos, this.player1.yPos);\n      newBomb.explodeBomb();\n    }\n    this.player1.step(this.narutoPos);\n    this.player2.step(this.sasukePos);\n    requestAnimationFrame(this.step.bind(this));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyControls);\n\n//# sourceURL=webpack:///./src/js/keyControls.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mapping; });\nlet mapComponents = new Image();\nmapComponents.src = \"../src/images/sprites/MapAndBomb.png\";\nmapComponents.onload = () => mapping();\n\nlet canvas = document.getElementById('ninjaBomberCanvas');\nlet ctx = canvas.getContext('2d');\n\n// RELATED TO SPRITE\n// sx: x position on sprite sheet\n// sy: y position on sprite sheet\n// sWdith: width of sprite to cut from x position\n// sHeight: hieght of sprite to cut from y position\n\n// RELATED TO CANVAS\n// dx: canvas x position\n// dy: canvas y position\n// dWdith: Width of cut out sprite shown on canvas\n// dHeight: Height of cut out sprite shown on canvas\n\n//constants for mapping\nconst spriteXStartPos = 3.5;\nconst spriteYStartPos = 2.5;\nconst spriteXOffset = 52;\nconst spriteYOffset = 52;\nconst spriteSheetWidth = 47.5;\nconst spriteSheetHeight = 47.5;\nconst startingX = 28.7;\nconst startingY = 28.7;\nconst spriteMapWidth = 28.7;\nconst spriteMapHeight = 28.7;\n\nconst xMapOffset = 220;\n\nfunction drawMap(frameX, frameY, canvasX, canvasY){\n  ctx.drawImage(\n    mapComponents, \n    (frameX * spriteXOffset) + spriteXStartPos,\n    (frameY * spriteYOffset) + spriteYStartPos,\n    spriteSheetWidth,\n    spriteSheetHeight,\n    (startingX * canvasX) + xMapOffset,\n    (startingY * canvasY),\n    spriteMapWidth,\n    spriteMapHeight\n  );\n}\n\nfunction mapping(){\n  for (let i = 0; i < 15; i++) {\n    for (let j = 0; j < 15; j++) {\n      if(i === 0 || j === 0 || i === 14 || j === 14 || ((i % 2 === 0) && (j % 2 === 0))){\n        // unbreakable walls\n        drawMap(1, 0, i, j);\n      } else if((j < 2 && (j - 1) % 2 === 0) || ((j-1) % 2 === 0 && (i) % 2 === 0)){\n        // grass with top shadow\n        drawMap(4, 0, i, j);\n      } else{\n        // grass without shadow\n        drawMap(3, 0, i, j);\n      }\n    }\n  }\n  // for testingsa\n  // ctx.drawImage(\n  //   naruto,\n  //   10,\n  //   74,\n  //   28,\n  //   46,\n  //   0,\n  //   0,\n  //   20,\n  //   28.7\n  // );\n}\n\n//# sourceURL=webpack:///./src/js/map.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player{\n  constructor(ctx, xPos, yPos, xOffsetPlayer, nameImg){\n    this.ctx = ctx;\n    this.xPos = xPos;\n    this.yPos = yPos;\n    this.nameImg = nameImg;\n\n    this.spriteSheetWidth = 28;\n    this.spriteSheetHeight = 46;\n    this.startingX = 28.7;\n    this.startingY = 28.7;\n    this.spriteWidth = 20;\n    this.spriteHeight = 28.7;\n\n    this.spriteXStartPos = (10 - xOffsetPlayer);\n    this.spriteYStartPos = 9;\n    this.spriteXOffset = 46;\n    this.spriteYOffset = 65;\n    this.xMapOffset = 225.3;\n\n    this.cycleLoop = [0, 1, 2, 3];\n    this.cols = 4;\n    this.row = 4;\n    this.obj = true;\n  }\n\n  step(direction) {\n    this.drawFrame(0, direction, this.xPos, this.yPos);\n  }\n\n  drawFrame(frameX, frameY, canvasX, canvasY){\n    this.ctx.drawImage(\n      this.nameImg, \n      (frameX * this.spriteXOffset) + this.spriteXStartPos,\n      (frameY * this.spriteYOffset) + this.spriteYStartPos,\n      this.spriteSheetWidth,\n      this.spriteSheetHeight,\n      this.startingX * canvasX + this.xMapOffset,\n      this.startingY * canvasY,\n      this.spriteWidth,\n      this.spriteHeight\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/js/players.js?");

/***/ })

/******/ });