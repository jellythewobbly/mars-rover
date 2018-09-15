/* eslint-disable no-console */

const { getUserInput, cleanUp } = require('./utils/readline-helper');

const main = async () => {
	const dimension = await getUserInput(
		'Specify the size of the Mars map (e.g. 5 5):'
	);

	const width = dimension.split(' ')[0];
	const height = dimension.split(' ')[1];

	console.log('the size of map is ', width, height);

	const initialLocation = await getUserInput(
		'Specify the initial coordinates of the mars rover (e.g. 1 2):'
	);

	console.log('the initial location is ', initialLocation);

	const initialDirection = await getUserInput(
		'Specify the initial direction of the mars rover (e.g. N or S or W or E):'
	);

	console.log('the initial direction is ', initialDirection);

	const commands = await getUserInput(
		'Specify the commands to be sent for the mars rover (e.g. FBLR):'
	);
	console.log('the commands are ', commands);

	// TODO: include the functions that you've implemented for this kata

	console.log(
		'The final coordinates of the mars rover is: <replace with the output of your program>'
	);

	cleanUp();
};

main();
