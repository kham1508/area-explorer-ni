/** @type {import('@sveltejs/kit').Config} */
import static_adapter from '@sveltejs/adapter-static';

const production = process.env.NODE_ENV === 'production';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: static_adapter({
			// Options below are defaults
			pages: 'docs',
			assets: 'docs',
			fallback:'404.html'
		}),
		prerender: {
			enabled: false
		},
		ssr: false,
		paths: {
			assets: production ? 'https://kham1508.github.io/area-explorer-ni' : '',
			base: production ? '/area-explorer-ni' : ''
		}
	}
};

export default config;
