// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Joe Grant',
	siteUrl: 'https://jgrant.co',
	siteDescription:
		"My name is Joe and I'm a freelance WordPress Developer based in Perth, Western Australia. I help local businesses build clean, fast and accessible WordPress websites that help them grow their business. Don't hesitate to reach out if you're looking for a new site, or some help with your existing website.",
	templates: {
		Post: '/blog/:title',
	},
	icon: {
		favicon: './src/favicon.png',
		touchicon: './src/touch-favicon.png',
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'content/posts/**/*.md',
				typeName: 'Post',
			},
		},
		{
			use: 'gridsome-plugin-tailwindcss',
		},
	],
};
