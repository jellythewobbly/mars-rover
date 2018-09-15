var Rover = class {
	constructor(initialLocation, initialDirection) {
		this.location = initialLocation.split(' ').map(i => parseInt(i));
		if (this.location.length != 2) {
			this.location = [0, 0];
		}
		this.direction = initialDirection;
		this.directionHelper = {
			N: { R: () => (this.direction = 'E'), L: () => (this.direction = 'W') },
			E: { R: () => (this.direction = 'S'), L: () => (this.direction = 'N') },
			S: { R: () => (this.direction = 'W'), L: () => (this.direction = 'E') },
			W: { R: () => (this.direction = 'N'), L: () => (this.direction = 'S') }
		};
		this.helper = {
			N: { F: () => (this.location[1] += 1), B: () => (this.location[1] -= 1) },
			E: { F: () => (this.location[0] += 1), B: () => (this.location[0] -= 1) },
			S: { F: () => (this.location[1] -= 1), B: () => (this.location[1] += 1) },
			W: { F: () => (this.location[0] -= 1), B: () => (this.location[0] += 1) }
		};
	}

	move(command) {
		const arrCommand = command.split('');
		for (let i of arrCommand) {
			if (i == 'R' || i == 'L') {
				this.directionHelper[this.direction][i]();
			} else if (i == 'F' || i == 'B') {
				this.helper[this.direction][i]();
			}
		}
	}
};

let abc = new Rover('1 1', 'N');
console.log(abc.location);
abc.move('FF');
console.log(abc.location);

module.exports = Rover;
