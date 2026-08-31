// Regenerates src/components/{backlinks,mappings,categories}.json from
// the markdown files in src/content/{log,dev}. Replaces the old
// extract_links.rb workflow — this runs automatically from astro.config.mjs
// on dev/build, and on file changes while `astro dev` is running.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));

// URL path segment each content collection is served under.
const categoryDirs = {
	log: path.join(root, 'src/content/log'),
	dev: path.join(root, 'src/content/dev'),
};

const outDir = path.join(root, 'src/components');

const IMAGE_EXT = new Set(['.webp', '.gif', '.jpg', '.jpeg', '.png', '.svg']);

function parseFrontmatter(content) {
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return {};
	const data = {};
	for (const line of match[1].split(/\r?\n/)) {
		const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
		if (!kv) continue;
		const [, key, rawValue] = kv;
		data[key] = rawValue.trim().replace(/^["']|["']$/g, '');
	}
	return data;
}

function extractLinkedIds(content) {
	const ids = new Set();
	const linkPattern = /\[.*?\]\((\/.*?)\)/g;
	let match;
	while ((match = linkPattern.exec(content)) !== null) {
		const link = match[1];
		const ext = path.extname(link);
		if (IMAGE_EXT.has(ext.toLowerCase())) continue;
		const id = link.split('/').filter(Boolean).pop();
		if (id) ids.add(id);
	}
	return [...ids];
}

export function generateMetadata() {
	const backlinks = {};
	const mappings = {};
	const categories = {};

	for (const [category, dir] of Object.entries(categoryDirs)) {
		for (const fileName of readdirSync(dir)) {
			if (!fileName.endsWith('.md') || fileName.startsWith('_')) continue;

			const id = fileName.slice(0, -'.md'.length);
			const content = readFileSync(path.join(dir, fileName), 'utf-8');
			const { title } = parseFrontmatter(content);

			if (title) mappings[id] = title;
			categories[id] = category;

			const links = extractLinkedIds(content);
			if (links.length > 0) backlinks[id] = links;
		}
	}

	writeFileSync(path.join(outDir, 'backlinks.json'), JSON.stringify(backlinks, null, 2) + '\n');
	writeFileSync(path.join(outDir, 'mappings.json'), JSON.stringify(mappings, null, 2) + '\n');
	writeFileSync(path.join(outDir, 'categories.json'), JSON.stringify(categories, null, 2) + '\n');
}

// Allow running directly: `node scripts/generate-metadata.mjs`
if (process.argv[1] === fileURLToPath(import.meta.url)) {
	generateMetadata();
	console.log('backlinks.json, mappings.json, categories.json regenerated.');
}
