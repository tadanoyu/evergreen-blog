// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const note = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/note" }),
    schema: z.object({
      title: z.string(),
      folge: z.string(),
      uid: z.string(),
      pubDate: z.string(),
      updatedDate: z.string().optional(),
    })
});
const writing = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/writing" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.string(),
      updatedDate: z.string().optional(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { note, writing};