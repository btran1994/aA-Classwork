const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

const DEFAULT = {
  color: "pink",
  radius: 10
};

function Ship(pos, game) {
  const options = {}
  options.pos = pos["pos"];
  options.color = DEFAULT.color;
  options.radius = DEFAULT.radius;
  options.game = game;
  options.vel = Util.randomVec(0);

  MovingObject.call(this, options);


}
Util.inherits(MovingObject, Ship);

Ship.prototype.relocate = function() {
  //debugger;
  this.pos = this.game.randomPosition().pos;
}

Ship.prototype.collideWith = function() {

};


module.exports = Ship;