console.log("Webpack is working!");


const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;
const Asteroid = require('./asteroid.js');
window.Asteroid = Asteroid;
const Util = require('./utils.js');
window.Util = Util;
const Game = require('./game.js');
window.Game = Game;
const GameView = require('./game_view.js');
window.GameView = GameView;
const Ship = require('./ship.js');
window.Ship = Ship;


// window.addEventListener = function(event) {
//   if (event === 'DOMContentLoaded') {
//     console.log('DOM fully loaded and parsed');
//   }
// };

window.addEventListener('DOMContentLoaded', function (event) {
  let canvasEl = document.getElementById("game-canvas");
  let ctx = canvasEl.getContext("2d");
  window.ctx = ctx;
});