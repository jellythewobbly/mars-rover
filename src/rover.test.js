const Rover = require('./rover');

test('rover has a location', () => {
	let rover = new Rover('4');
	expect(rover.location.length).toBeGreaterThan(0);
});

test('rover has a default location', () => {
	let rover = new Rover('12321');
	expect(rover.location).toEqual([0, 0]);
});

test('rover has a starting direction', () => {
	let rover = new Rover('4 4', 'N');
	expect(rover.direction).toEqual('N');
});

test('rover command F', () => {
	let rover = new Rover('4 4', 'N');
	rover.move('F');
	expect(rover.location).toEqual([4, 5]);
});

test('rover command FF', () => {
	let rover = new Rover('4 4', 'N');
	rover.move('FF');
	expect(rover.location).toEqual([4, 6]);
});

test('rover command FF facing East', () => {
	let rover = new Rover('4 4', 'E');
	rover.move('FF');
	expect(rover.location).toEqual([6, 4]);
});

test('rover command FF facing East', () => {
	let rover = new Rover('4 4', 'E');
	rover.move('RFF');
	expect(rover.location).toEqual([4, 2]);
});

test('rover command FFRFL facing East', () => {
	let rover = new Rover('4 4', 'E');
	rover.move('RFF');
	expect(rover.location).toEqual([4, 2]);
});
