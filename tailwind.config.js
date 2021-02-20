module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./src/**/*.vue',
			'./src/**/*.js',
			'./src/**/*.jsx',
			'./src/**/*.pug',
			'./src/**/*.md',
		],
	},
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			heading: 'Rubik',
			body: 'Karla',
		},
	},
};
