const Direction = require("./direction");

module.exports = class Rover {
  constructor(initialX, initialY, initialDirection) {
    this.x = initialX;
    this.y = initialY;
    this.direction = initialDirection;
  }

  turnLeft() {
    this.direction = Direction.turnLeft(this.direction);
  }
};
