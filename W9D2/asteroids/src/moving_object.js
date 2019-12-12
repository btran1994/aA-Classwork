function MovingObject(hash) {
  this.pos = hash["pos"];
  this.vel = hash["vel"];
  this.radius = hash["radius"];
  this.color = hash["color"];
  this.game = hash["game"];
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0]
  this.pos[1] += this.vel[1]
  this.game.wrap(this.pos);
  // pos[0][1] += vel[0][1]

};

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  var dist = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]), 2) + Math.pow((this.pos[1] - otherObject.pos[1]), 2));
  if (this.radius + otherObject.radius > dist) return true;
   
  return false;
};

// MovingObject.prototype.collideWith = function(otherObject) {
//   // if (this.isCollidedWith(otherObject)) {
//   //   //debugger;
//   //   this.game.remove(otherObject);
//   //   this.game.remove(this);
//   //   console.log("collided");
//   // }
// };

module.exports = MovingObject;