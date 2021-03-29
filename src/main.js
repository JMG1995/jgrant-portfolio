// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('./css/main.css');
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
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/favicon/apple-touch-icon.png',
		},
		{
			rel: 'icon',
			sizes: '32x32',
			href: '/favicon/favicon-32x-32.png',
		},
		{
			rel: 'icon',
			sizes: '16x16',
			href: '/favicon/favicon-16x16.png',
		},
		{
			rel: 'manifest',
			href: '/favicon/site.webmanifest',
		}
	);
}
