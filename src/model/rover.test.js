const Rover = require("./rover");
const Direction = require("./direction");

describe("Test cases for Rover model", () => {
  test("test we can create instance of Rover model", () => {
    let x = 0;
    let y = 0;
    let direction = Direction.NORTH;
    let rover = new Rover(x, y, direction);
    expect(rover.x).toEqual(x);
    expect(rover.y).toEqual(y);
    expect(rover.direction).toEqual(direction);
  });

  describe("Rover can turn right", () => {
    test("turn right when rover is facing east", () => {
      let x = 0;
      let y = 0;
      let direction = Direction.EAST;
      let rover = new Rover(x, y, direction);

      rover.turnRight();

      expect(rover.direction).toEqual(Direction.SOUTH);
    });

    test("turn right when rover is facing west", () => {
      let x = 0;
      let y = 0;
      let direction = Direction.WEST;
      let rover = new Rover(x, y, direction);

      rover.turnRight();

      expect(rover.direction).toEqual(Direction.NORTH);
    });
  });

  describe("Rover can turn left", () => {
    test("turn left when rover is facing north", () => {
      let x = 0;
      let y = 0;
      let direction = Direction.NORTH;
      let rover = new Rover(x, y, direction);

      rover.turnLeft();

      expect(rover.direction).toEqual(Direction.WEST);
    });

    test("turn left when rover is facing south", () => {
      let x = 0;
      let y = 0;
      let direction = Direction.SOUTH;
      let rover = new Rover(x, y, direction);

      rover.turnLeft();

      expect(rover.direction).toEqual(Direction.EAST);
    });
  });
});
