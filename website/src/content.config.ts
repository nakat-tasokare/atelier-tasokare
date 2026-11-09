import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// const blog = defineCollection({
// 	// Load Markdown and MDX files in the `src/content/blog/` directory.
// 	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
// 	// Type-check frontmatter using a schema
// 	schema: ({ image }) =>
// 		z.object({
// 			title: z.string(),
// 			description: z.string(),
// 			// Transform string to Date object
// 			pubDate: z.coerce.date(),
// 			updatedDate: z.coerce.date().optional(),
// 			heroImage: z.optional(image()),
// 		}),
// });

const products = defineCollection({
	loader: glob({ base: './src/content/products', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			productName: z.string(),
			description: z.string(),
			thumbnail: z.optional(image()),
		}),
});

const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			published: z.coerce.date(),
			thumbnail: z.optional(image()),
		}),
});

const faq = defineCollection({
	loader: glob({ base: './src/content/faq', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			published: z.coerce.date(),
			thumbnail: z.optional(image()),
		}),
});

const privacypolicy = defineCollection({
	loader: glob({ base: './src/content/privacypolicy', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
			draft: z.boolean().default(false),
		}),
});

export const collections = { products, news, faq, privacypolicy };
