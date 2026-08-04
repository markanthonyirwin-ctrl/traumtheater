import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts are plain markdown files in src/content/blog.
// Adding a post = add a .md file and push; Netlify rebuilds automatically.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Set to true to keep a post out of the build entirely.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
