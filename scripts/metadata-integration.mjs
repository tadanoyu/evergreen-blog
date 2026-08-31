import { generateMetadata } from './generate-metadata.mjs';

// Keeps backlinks/mappings/categories JSON in sync with src/content/{log,dev}.
// Runs once on `astro dev` / `astro build` startup, and re-runs on every
// content markdown add/edit/delete while the dev server is running.
export default function contentMetadata() {
	return {
		name: 'content-metadata',
		hooks: {
			'astro:config:setup': () => {
				generateMetadata();
			},
			'astro:server:setup': ({ server }) => {
				server.watcher.on('all', (event, filePath) => {
					if (!/[\\/]src[\\/]content[\\/](log|dev)[\\/].*\.md$/.test(filePath)) return;
					if (event !== 'add' && event !== 'change' && event !== 'unlink') return;
					generateMetadata();
				});
			},
		},
	};
}
