const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');
const Ship = require('./ship.js')


const DEFAULT = {
  color: "green",
  radius: 30
};




function Asteroid(pos, game) {
  const options = {}
  options.pos = pos["pos"];
  options.color = DEFAULT.color;
  options.radius = DEFAULT.radius;
  options.game = game;
  options.vel = Util.randomVec(15);

  MovingObject.call(this, options);
  
  
}

Util.inherits(MovingObject, Asteroid);

Asteroid.prototype.collideWith = function(otherObject) {
  //debugger;
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
};



module.exports = Asteroid;