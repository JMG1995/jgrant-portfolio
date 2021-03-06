// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('./css/main.css');
// require('./css/prismjs/prism-dark.css');
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);

	head.link.push(
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
		},
		{
			rel: 'stylesheet',
			href:
				'https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Rubik:wght@400;500;600&display=swap',
		}
	);

	// Add an external JavaScript before the closing </body> tag
	head.script.push({
		src: 'https://plausible.io/js/plausible.js',
		body: true,
		'data-domain': 'jgrant.co',
		async: true,
		defer: true,
	});
}
