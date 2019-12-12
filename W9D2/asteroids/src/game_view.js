let Game = require('./game.js')

function GameView(ctx) {
  this.game = new Game();
  this.drawing = ctx;

}

GameView.prototype.start = function() {
  setInterval(this.animate.bind(this), 20);
};

GameView.prototype.animate = function() {
  //debugger;
  this.game.step();
  this.game.draw(this.drawing);
  //console.log('hi');
};

module.exports = GameView;