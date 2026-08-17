import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Both languages share one schema. Adding a post = add a .md file and push;
// Netlify rebuilds automatically.
const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  // Set to true to keep a post out of the build entirely.
  draft: z.boolean().default(false),
  // Filename (without .md) of the same post in the other language. This is what
  // drives reciprocal hreflang between /blog/… and /en/blog/…, and it is needed
  // because the two slugs deliberately differ: each is written for keywords in
  // its own language. Set it on BOTH posts or neither. Leave it off for a post
  // that exists in one language only, and no hreflang is claimed for it.
  altSlug: z.string().optional(),
});

// German posts.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: postSchema,
});

// English posts. Separate collection rather than a `lang` field so that
// neither language's index can ever accidentally list the other's posts.
const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
  schema: postSchema,
});

export const collections = { blog, blogEn };
