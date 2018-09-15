const NORTH = "N";
const SOUTH = "S";
const WEST = "W";
const EAST = "E";

const DIRECTIONS = [NORTH, EAST, SOUTH, WEST];

function previousDirection(directionIndex) {
  directionIndex -= 1;
  if (directionIndex < 0) {
    directionIndex += DIRECTIONS.length;
  }
  return directionIndex;
}

function turnLeft(currentDirection) {
  let directionIndex = DIRECTIONS.indexOf(currentDirection);
  return DIRECTIONS[previousDirection(directionIndex)];
}

module.exports = {
  NORTH,
  SOUTH,
  EAST,
  WEST,
  turnLeft
};
