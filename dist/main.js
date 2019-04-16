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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/map */ \"./src/js/map.js\");\n/* harmony import */ var _js_keyControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/keyControls */ \"./src/js/keyControls.js\");\n\n\n\n//add event listenr to player\nlet canvas = document.getElementById('ninjaBomberCanvas');\nlet ctx = canvas.getContext('2d');\n\nlet naruto = new Image();\nnaruto.src = \"../src/images/sprites/naruto.png\";\n\nlet sasuke = new Image();\nsasuke.src = \"../src/images/sprites/sasuke.png\";\n\nlet bomb = new Image();\nbomb.src = \"../src/images/sprites/MapAndBomb.png\";\n// bomb.onload = () => bomberDraw();\n\nlet controls = new _js_keyControls__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas, sasuke, naruto, bomb);\ncontrols.eventListner();\ncontrols.renderAll();\n\n// function bomberDraw(){\n//   // ctx.drawImage(\n//   //   bomb,\n//   //   3.5 + (52*2),\n//   //   2.5 + (52*2),\n//   //   47.5,\n//   //   47.5,\n//   //   0,\n//   //   0,\n//   //   28.7,\n//   //   28.7\n//   // );\n// }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/bomb.js":
/*!************************!*\
  !*** ./src/js/bomb.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass bomb{\n  constructor(ctx, bombImg, xPos, yPos, naruto, sasuke){\n    this.ctx = ctx;\n    this.bombImg = bombImg;\n    this.xPos = xPos;\n    this.yPos = yPos;\n    this.naruto = naruto;\n    this.sasuke = sasuke;\n\n    this.spriteXStartPos = 3.5;\n    this.spriteYStartPos = 3;\n    this.spriteXOffset = 52;\n    this.spriteYOffset = 52;\n    this.spriteSheetWidth = 47;\n    this.spriteSheetHeight = 47.5;\n    this.startingX = 28.7;\n    this.startingY = 28.7;\n    this.spriteMapWidth = 28.7;\n    this.spriteMapHeight = 28.7;\n\n    this.xMapOffset = 220;\n    this.frames = 0;\n    this.multiplier = 40;\n  }\n\n  drawBomb(frameX, frameY, canvasX, canvasY){\n    this.ctx.drawImage(\n      this.bombImg, \n      (frameX * this.spriteXOffset) + this.spriteXStartPos,\n      (frameY * this.spriteYOffset) + this.spriteYStartPos,\n      this.spriteSheetWidth,\n      this.spriteSheetHeight,\n      (this.startingX * canvasX) + this.xMapOffset,\n      (this.startingY * canvasY),\n      this.spriteMapWidth,\n      this.spriteMapHeight\n    );\n  }\n\n  placeBomb(){\n    const {xPos, yPos, frames, multiplier, naruto, sasuke} = this;\n\n    if(naruto.dead || sasuke.dead){\n      this.frames = (109 * multiplier);\n    }\n    if (frames < (20*multiplier)){\n      this.drawBomb(0, 2, xPos, yPos);\n    } else if (frames < (40*multiplier)){\n      this.drawBomb(1, 2, xPos, yPos);\n    } else if(frames < (50*multiplier)){\n      this.drawBomb(0, 2, xPos, yPos);      \n    } else if(frames < (60*multiplier)){\n      this.drawBomb(1, 2, xPos, yPos);      \n    } else if(frames < (70*multiplier)){\n      this.drawBomb(2, 2, xPos, yPos);      \n    } else if(frames < (80*multiplier)){\n      this.drawBomb(1, 2, xPos, yPos);      \n    } else if (frames < (90*multiplier)){\n      this.drawBomb(2, 2, xPos, yPos);\n    } else if (frames < (110*multiplier)){\n      this.explodeBomb(xPos, yPos);\n    }\n    const nextFrame = requestAnimationFrame(this.placeBomb.bind(this));\n    this.frames ++;\n    if (frames > (110*multiplier)){\n      cancelAnimationFrame(nextFrame);\n    }\n  }\n\n  explodeBomb(x, y){\n    const {naruto, sasuke} = this;\n    this.drawBomb(5, 3, x, y);\n    if(( y=== naruto.yPos && x === naruto.xPos)){\n      this.naruto.dead = true;\n    }\n    if((y === sasuke.yPos && x === sasuke.xPos)){\n      this.sasuke.dead = true;\n    }\n    this.explodeUp();\n    this.explodeDown();\n    this.explodeLeft();\n    this.explodeRight();\n  }\n\n  explodeUp(){\n    const {yPos, xPos, naruto, sasuke} = this;\n    for (let j = yPos - 1; j > 0; j--) {\n      if((j === naruto.yPos && xPos === naruto.xPos)){\n        this.naruto.dead = true;\n      }\n      if((j === sasuke.yPos && xPos === sasuke.xPos)){\n        this.sasuke.dead = true;\n      }\n      if(j % 2 === 0 && xPos % 2 === 0){\n        break;\n      } else if(j === 1){\n        this.drawBomb(7, 1, xPos, j);\n      } else{\n        this.drawBomb(5, 4, xPos, j);\n      }\n    }\n  }\n\n  explodeDown(){\n    const {yPos, xPos, naruto, sasuke} = this;\n    for (let j = yPos + 1; j < 14; j++) {\n      if((j === naruto.yPos && xPos === naruto.xPos)){\n        this.naruto.dead = true;\n      }\n      if((j === sasuke.yPos && xPos === sasuke.xPos)){\n        this.sasuke.dead = true;\n      }\n      if(j % 2 === 0 && xPos % 2 === 0){\n        break;\n      } else if(j === 13){\n        this.drawBomb(5, 5, xPos, j);\n      } else{\n        this.drawBomb(5, 4, xPos, j);\n      }\n    }\n  }\n\n  explodeLeft(){\n    const {yPos, xPos, naruto, sasuke} = this;\n    for (let i = xPos - 1; i > 0; i--) {\n      if((yPos === naruto.yPos && i === naruto.xPos)){\n        this.naruto.dead = true;\n      }\n      if((yPos === sasuke.yPos && i === sasuke.xPos)){\n        this.sasuke.dead = true;\n      }\n      if(i % 2 === 0 && yPos % 2 === 0){\n        break;\n      }else if (i === 1){\n        this.drawBomb(4, 1, i, yPos);\n      } else{\n        this.drawBomb(0, 3, i, yPos);\n      }\n    }\n  }\n\n  explodeRight(){\n    const {yPos, xPos, naruto, sasuke} = this;\n    for (let i = xPos + 1; i < 14; i++) {\n      if((yPos === naruto.yPos && i === naruto.xPos)){\n        this.naruto.dead = true;\n      }\n      if((yPos === sasuke.yPos && i === sasuke.xPos)){\n        this.sasuke.dead = true;\n      }\n      if(i % 2 === 0 && yPos % 2 === 0){\n        break;\n      } else if (i === 13){\n        this.drawBomb(1, 3, i, yPos);\n      } else{\n        this.drawBomb(0, 4, i, yPos);\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bomb);\n\n//# sourceURL=webpack:///./src/js/bomb.js?");

/***/ }),

/***/ "./src/js/keyControls.js":
/*!*******************************!*\
  !*** ./src/js/keyControls.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ \"./src/js/players.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/js/map.js\");\n/* harmony import */ var _bomb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bomb */ \"./src/js/bomb.js\");\n\n\n\n\nclass keyControls{\n  constructor(ctx, canvas, sasuke, naruto, bombImg){\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.bombImg = bombImg;\n    this.player1 = new _players__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 1, 1, 0, naruto);\n    this.player2 = new _players__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 13, 13, 3, sasuke);\n    \n    this.keyDownHandler = this.keyDownHandler.bind(this);\n\n    //direction they face (0 = down, 1 = left, 2 = right, 3 = up)\n    this.narutoPos = 0;\n    this.sasukePos = 0;\n\n    this.nBomb = [];\n    this.sBomb= [];\n    this.givenBombs = 3;\n  }\n\n  keyDownHandler(e){\n    //Naruto Controls (in order of w,a,s,d,c)\n    const {ctx, bombImg, player1, player2, nBomb, sBomb, givenBombs} = this;\n    if (e.which === 87){\n      //why do we need this (maybe it's because we are assigning a new class value? Even if I had const as let)\n      this.narutoPos = 3;\n      if ((player1.yPos !== 1) && (player1.xPos % 2 !== 0) && \n      !((player1.xPos === player2.xPos && (player1.yPos - 1) === player2.yPos))\n      ){\n        this.player1.yPos -= 1;\n      }\n    } else if (e.which === 65){     \n      this.narutoPos = 1;\n      if (player1.xPos !== 1 && player1.yPos % 2 !== 0 && \n        !(((player1.xPos - 1) === player2.xPos && player1.yPos === player2.yPos))\n        ){\n        this.player1.xPos -= 1;\n      }\n    } else if (e.which === 83){\n      this.narutoPos = 0;\n      if (player1.yPos !== 13 && player1.xPos % 2 !== 0 && \n        !((player1.xPos === player2.xPos && (player1.yPos + 1) === player2.yPos))\n        ){\n        this.player1.yPos += 1;\n      }\n    } else if (e.which === 68){\n      this.narutoPos = 2;      \n      if (player1.xPos !== 13 && player1.yPos % 2 !== 0 && \n        !(((player1.xPos + 1) === player2.xPos && player1.yPos === player2.yPos))\n        ){\n        this.player1.xPos += 1;\n      }\n    }\n    if (e.which === 67){\n      if (nBomb.length < givenBombs){\n        nBomb.push(new _bomb__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, bombImg, player1.xPos, player1.yPos, player1, player2));\n        setTimeout(() => this.nBomb.shift(), 1700);\n      }\n    }\n    \n    //Sasuke Controls (in order of w,a,s,d,c)\n    if (e.which == 38){\n      this.sasukePos = 3;\n      if (player2.yPos !== 1 && player2.xPos % 2 !== 0 && \n        !((player1.xPos === player2.xPos && (player2.yPos - 1) === player1.yPos))\n        ){\n        this.player2.yPos -= 1;\n      }\n    } else if (e.which === 37){\n      this.sasukePos = 1;\n      if (player2.xPos !== 1 && player2.yPos % 2 !== 0 && \n        !(((player2.xPos - 1) === player1.xPos && player1.yPos === player2.yPos))\n        ){\n        this.player2.xPos -= 1;\n      }\n    } else if (e.which === 40){\n      this.sasukePos = 0;\n      if (player2.yPos !== 13 && player2.xPos % 2 !== 0 && \n        !((player1.xPos === player2.xPos && (player2.yPos + 1) === player1.yPos))\n        ){\n        this.player2.yPos += 1;\n      }\n    } else if (e.which === 39){\n      this.sasukePos = 2;\n      if (player2.xPos !== 13 && player2.yPos % 2 !== 0 && \n        !(((player2.xPos + 1) === player1.xPos && player1.yPos === player2.yPos))\n        ){\n        this.player2.xPos += 1;\n      }\n    }\n    if (e.which === 190){\n      if (sBomb.length < givenBombs){\n        sBomb.push(new _bomb__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, bombImg, player2.xPos, player2.yPos, player1, player2));\n        setTimeout(() => this.sBomb.shift(), 1700);\n      }\n    }\n  }\n\n  eventListner(){\n    document.addEventListener(\"keydown\", this.keyDownHandler, false);\n  }\n\n  renderNBomb(){\n    const {nBomb} = this;\n    for (let i = 0; i < nBomb.length; i++) {\n      nBomb[i].placeBomb();\n      // setTimeout(() => nBomb.shift(), 1500);\n    }\n  }\n\n  renderSBomb(){\n    const {sBomb} = this;\n    for (let i = 0; i < sBomb.length; i++) {\n      sBomb[i].placeBomb();\n    }\n  }\n\n  renderAll(){\n    const {ctx, canvas, player1, player2, narutoPos, sasukePos, nBomb, sBomb, givenBombs} = this;\n    ctx.clearRect(220, 0, canvas.width, canvas.height);\n    Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    if (nBomb.length !== 0){\n      this.renderNBomb();\n    }\n    if (sBomb.length !== 0){\n      this.renderSBomb();\n    }\n    if (player1.dead === false){\n      player1.step(narutoPos);\n    } else {\n      console.log('Naruto Died');\n    }\n    if (player2.dead === false){\n      player2.step(sasukePos);\n    } else {\n      console.log('Sasuke Died');\n    }\n    // if (nBomb.length === givenBombs && sBomb.length === givenBombs){\n    //   console.log(\"No Winner\");\n    // } else \n    if(!player1.dead && !player2.dead){\n      requestAnimationFrame(this.renderAll.bind(this));\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyControls);\n\n//# sourceURL=webpack:///./src/js/keyControls.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mapping; });\nlet mapComponents = new Image();\nmapComponents.src = \"../src/images/sprites/MapAndBomb.png\";\nmapComponents.onload = () => mapping();\n\nlet canvas = document.getElementById('ninjaBomberCanvas');\nlet ctx = canvas.getContext('2d');\n\n// RELATED TO SPRITE\n// sx: x position on sprite sheet\n// sy: y position on sprite sheet\n// sWdith: width of sprite to cut from x position\n// sHeight: hieght of sprite to cut from y position\n\n// RELATED TO CANVAS\n// dx: canvas x position\n// dy: canvas y position\n// dWdith: Width of cut out sprite shown on canvas\n// dHeight: Height of cut out sprite shown on canvas\n\n//constants for mapping\nconst spriteXStartPos = 3.5;\nconst spriteYStartPos = 2.5;\nconst spriteXOffset = 52;\nconst spriteYOffset = 52;\nconst spriteSheetWidth = 47.5;\nconst spriteSheetHeight = 47.5;\nconst startingX = 28.7;\nconst startingY = 28.7;\nconst spriteMapWidth = 28.7;\nconst spriteMapHeight = 28.7;\n\nconst xMapOffset = 220;\n\nfunction drawMap(frameX, frameY, canvasX, canvasY){\n  ctx.drawImage(\n    mapComponents, \n    (frameX * spriteXOffset) + spriteXStartPos,\n    (frameY * spriteYOffset) + spriteYStartPos,\n    spriteSheetWidth,\n    spriteSheetHeight,\n    (startingX * canvasX) + xMapOffset,\n    (startingY * canvasY),\n    spriteMapWidth,\n    spriteMapHeight\n  );\n}\n\nfunction mapping(){\n  for (let i = 0; i < 15; i++) {\n    for (let j = 0; j < 15; j++) {\n      if(i === 0 || j === 0 || i === 14 || j === 14 || ((i % 2 === 0) && (j % 2 === 0))){\n        // unbreakable walls\n        drawMap(1, 0, i, j);\n        //shadows on grass\n      // } else if((j < 2 && (j - 1) % 2 === 0) || ((j-1) % 2 === 0 && (i) % 2 === 0)){\n      //   // grass with top shadow\n      //   drawMap(4, 0, i, j);\n      } else{\n        // grass without shadow\n        drawMap(3, 0, i, j);\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/js/map.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player{\n  constructor(ctx, xPos, yPos, xOffsetPlayer, nameImg){\n    this.ctx = ctx;\n    this.xPos = xPos;\n    this.yPos = yPos;\n    this.nameImg = nameImg;\n\n    this.spriteSheetWidth = 28;\n    this.spriteSheetHeight = 46;\n    this.startingX = 28.7;\n    this.startingY = 28.7;\n    this.spriteWidth = 20;\n    this.spriteHeight = 28.7;\n\n    this.spriteXStartPos = (10 - xOffsetPlayer);\n    this.spriteYStartPos = 9;\n    this.spriteXOffset = 46;\n    this.spriteYOffset = 65;\n    this.xMapOffset = 225.3;\n    this.dead = false;\n\n    this.cycleLoop = [0, 1, 2, 3];\n    this.cols = 4;\n    this.row = 4;\n    this.obj = true;\n  }\n\n  step(direction) {\n    this.drawFrame(0, direction, this.xPos, this.yPos);\n  }\n\n  drawFrame(frameX, frameY, canvasX, canvasY){\n    this.ctx.drawImage(\n      this.nameImg, \n      (frameX * this.spriteXOffset) + this.spriteXStartPos,\n      (frameY * this.spriteYOffset) + this.spriteYStartPos,\n      this.spriteSheetWidth,\n      this.spriteSheetHeight,\n      this.startingX * canvasX + this.xMapOffset,\n      this.startingY * canvasY,\n      this.spriteWidth,\n      this.spriteHeight\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/js/players.js?");

/***/ })

/******/ });