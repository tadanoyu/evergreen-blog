import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';


import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		rehypePlugins: [
			[
			rehypeExternalLinks,
			{
				content: { type: 'text', value: ' ↗' }
			}
			],
		]
	},
});
