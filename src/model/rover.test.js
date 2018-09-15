const Rover = require("./rover");

describe("Test cases for Rover model", () => {
  test("test we can create instance of Rover model", () => {
    let x = 0;
    let y = 0;
    let direction = "N";
    let rover = new Rover(x, y, direction);
    expect(rover.x).toEqual(x);
    expect(rover.y).toEqual(y);
    expect(rover.direction).toEqual(direction);
  });
});
