let Asteroid = require('./asteroid.js');
let Ship = require('./ship.js')

function Game() {
  this.DIM_X = 1200;
  this.DIM_Y = 800;
  const NUM_ASTEROIDS = 20;
  this.asteroids = [];
  this.addAsteroids(NUM_ASTEROIDS);
  this.ship = new Ship(this.randomPosition(), this);
}
Game.prototype.randomPosition = function() {
  //debugger;
  let startPos = { pos: [(Math.random() * this.DIM_X), Math.random() * this.DIM_Y] };
  return startPos;
}

Game.prototype.addAsteroids = function(NUM_ASTEROIDS) {
  for (i = 0; i < NUM_ASTEROIDS; i++) {
    //math.random() * num
    
    let randomAsteroid = new Asteroid(this.randomPosition(), this);
    this.asteroids.push(randomAsteroid);
  }
}


Game.prototype.step = function() {
  this.move();
  this.checkCollisions();
};

Game.prototype.move = function() {
  this.allObjects().forEach(asteroid => asteroid.move());
};

Game.prototype.checkCollisions = function() {
  const allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    for (let j = 0; j < allObjects.length; j++) {
      if (j > i && allObjects[i].isCollidedWith(allObjects[j])) {
        // debugger;
        allObjects[i].collideWith(allObjects[j]);
      }
    }
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 1200, 800);
  this.allObjects().forEach(asteroid => asteroid.draw(ctx));

};


Game.prototype.wrap = function(pos) {
  //debugger;
  //let values = pos;
  if (pos[0] > 1200) {
    pos[0] = 0;
  }
  if (pos[0] < 0) {
    pos[0] = 1200;
  }
  if (pos[1] > 800) {
    pos[1] = 0;
  }
  if (pos[1] < 0) {
    pos[1] = 800;
  }
  //debugger;
  return pos;
};

Game.prototype.remove = function(asteroid) {
  let removed = [];
  for (let i = 0; i < this.asteroids.length; i++) {
    if (this.asteroids[i] !== asteroid) {
      removed.push(this.asteroids[i]);
    }
  }
  this.asteroids = removed;
};

Game.prototype.allObjects = function() {
  return this.asteroids.concat(this.ship);
};

module.exports = Game;