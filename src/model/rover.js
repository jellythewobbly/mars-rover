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

  turnRight() {
    this.direction = Direction.turnRight(this.direction);
  }

  moveForward() {
    if (this.direction === Direction.NORTH) {
      this.y += 1;
    } else if (this.direction === Direction.EAST) {
      this.x += 1;
    } else if (this.direction === Direction.SOUTH) {
      this.y -= 1;
    } else if (this.direction === Direction.WEST) {
      this.x -= 1;
    }
  }
};
