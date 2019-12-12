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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\n\nconst DEFAULT = {\n  color: \"green\",\n  radius: 30\n};\n\n\n\n\nfunction Asteroid(pos, game) {\n  const options = {}\n  options.pos = pos[\"pos\"];\n  options.color = DEFAULT.color;\n  options.radius = DEFAULT.radius;\n  options.game = game;\n  options.vel = Util.randomVec(15);\n\n  MovingObject.call(this, options);\n  \n  \n}\n\nUtil.inherits(MovingObject, Asteroid);\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  //debugger;\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }\n};\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nlet Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\nfunction Game() {\n  this.DIM_X = 1200;\n  this.DIM_Y = 800;\n  const NUM_ASTEROIDS = 20;\n  this.asteroids = [];\n  this.addAsteroids(NUM_ASTEROIDS);\n  this.ship = new Ship(this.randomPosition(), this);\n}\nGame.prototype.randomPosition = function() {\n  //debugger;\n  let startPos = { pos: [(Math.random() * this.DIM_X), Math.random() * this.DIM_Y] };\n  return startPos;\n}\n\nGame.prototype.addAsteroids = function(NUM_ASTEROIDS) {\n  for (i = 0; i < NUM_ASTEROIDS; i++) {\n    //math.random() * num\n    \n    let randomAsteroid = new Asteroid(this.randomPosition(), this);\n    this.asteroids.push(randomAsteroid);\n  }\n}\n\n\nGame.prototype.step = function() {\n  this.move();\n  this.checkCollisions();\n};\n\nGame.prototype.move = function() {\n  this.allObjects().forEach(asteroid => asteroid.move());\n};\n\nGame.prototype.checkCollisions = function() {\n  const allObjects = this.allObjects();\n  for (let i = 0; i < allObjects.length; i++) {\n    for (let j = 0; j < allObjects.length; j++) {\n      if (j > i && allObjects[i].isCollidedWith(allObjects[j])) {\n        // debugger;\n        allObjects[i].collideWith(allObjects[j]);\n      }\n    }\n  }\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, 1200, 800);\n  this.allObjects().forEach(asteroid => asteroid.draw(ctx));\n\n};\n\n\nGame.prototype.wrap = function(pos) {\n  //debugger;\n  //let values = pos;\n  if (pos[0] > 1200) {\n    pos[0] = 0;\n  }\n  if (pos[0] < 0) {\n    pos[0] = 1200;\n  }\n  if (pos[1] > 800) {\n    pos[1] = 0;\n  }\n  if (pos[1] < 0) {\n    pos[1] = 800;\n  }\n  //debugger;\n  return pos;\n};\n\nGame.prototype.remove = function(asteroid) {\n  let removed = [];\n  for (let i = 0; i < this.asteroids.length; i++) {\n    if (this.asteroids[i] !== asteroid) {\n      removed.push(this.asteroids[i]);\n    }\n  }\n  this.asteroids = removed;\n};\n\nGame.prototype.allObjects = function() {\n  return this.asteroids.concat(this.ship);\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.drawing = ctx;\n\n}\n\nGameView.prototype.start = function() {\n  setInterval(this.animate.bind(this), 20);\n};\n\nGameView.prototype.animate = function() {\n  //debugger;\n  this.game.step();\n  this.game.draw(this.drawing);\n  //console.log('hi');\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid;\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nwindow.Util = Util;\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nwindow.Game = Game;\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.GameView = GameView;\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nwindow.Ship = Ship;\n\n\n// window.addEventListener = function(event) {\n//   if (event === 'DOMContentLoaded') {\n//     console.log('DOM fully loaded and parsed');\n//   }\n// };\n\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  let canvasEl = document.getElementById(\"game-canvas\");\n  let ctx = canvasEl.getContext(\"2d\");\n  window.ctx = ctx;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(hash) {\n  this.pos = hash[\"pos\"];\n  this.vel = hash[\"vel\"];\n  this.radius = hash[\"radius\"];\n  this.color = hash[\"color\"];\n  this.game = hash[\"game\"];\n}\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0]\n  this.pos[1] += this.vel[1]\n  this.game.wrap(this.pos);\n  // pos[0][1] += vel[0][1]\n\n};\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n  ctx.fill();\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  var dist = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]), 2) + Math.pow((this.pos[1] - otherObject.pos[1]), 2));\n  if (this.radius + otherObject.radius > dist) return true;\n   \n  return false;\n};\n\n// MovingObject.prototype.collideWith = function(otherObject) {\n//   // if (this.isCollidedWith(otherObject)) {\n//   //   //debugger;\n//   //   this.game.remove(otherObject);\n//   //   this.game.remove(this);\n//   //   console.log(\"collided\");\n//   // }\n// };\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst DEFAULT = {\n  color: \"pink\",\n  radius: 10\n};\n\nfunction Ship(pos, game) {\n  const options = {}\n  options.pos = pos[\"pos\"];\n  options.color = DEFAULT.color;\n  options.radius = DEFAULT.radius;\n  options.game = game;\n  options.vel = Util.randomVec(0);\n\n  MovingObject.call(this, options);\n\n\n}\nUtil.inherits(MovingObject, Ship);\n\nShip.prototype.relocate = function() {\n  //debugger;\n  this.pos = this.game.randomPosition().pos;\n}\n\nShip.prototype.collideWith = function() {\n\n};\n\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n\n  \n  inherits(ParentClass, ChildClass) {\n  function Surrogate() { }\n  Surrogate.prototype = ParentClass.prototype;\n  ChildClass.prototype = new Surrogate();\n  ChildClass.prototype.constructor = ChildClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n  \n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });