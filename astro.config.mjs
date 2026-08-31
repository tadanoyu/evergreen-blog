import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';


import sitemap from '@astrojs/sitemap';
import contentMetadata from './scripts/metadata-integration.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [contentMetadata(), mdx(), sitemap()],
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
	redirects: {
		"/note/[...slug]": "/log/[...slug]"
	}
});