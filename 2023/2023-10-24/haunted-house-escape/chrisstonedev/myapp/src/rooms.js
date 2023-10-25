const rooms = [
	{
		name: 'Foyer',
		description: 'This is the initial room.',
		exits: ['Library', 'Kitchen'],
	},
	{
		name: 'Library',
		description: 'This is an empty library.',
		exits: ['Foyer', 'Kitchen'],
	},
	{
		name: 'Kitchen',
		description: 'This is a spooky kitchen.',
		exits: [],
	},
	{
		name: 'Bedroom',
		description: 'This is an abandoned bedroom.',
		exits: [],
	},
	{
		name: 'Crypt',
		description: 'This is a terrifying crypt.',
		exits: [],
	},
];

export default rooms;