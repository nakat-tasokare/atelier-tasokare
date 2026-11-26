import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const products = defineCollection({
	loader: glob({ base: './src/contents/products', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			productName: z.string(),
			description: z.string(),
			published: z.coerce.date(),
			thumbnail: z.optional(image()),
		}),
});

const news = defineCollection({
	loader: glob({ base: './src/contents/news', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			published: z.coerce.date(),
			order: z.number().int().default(0),
			thumbnail: z.optional(image()),
			tag: z.string().default('NEWS'),
		}),
});

const faq = defineCollection({
	loader: glob({ base: './src/contents/faq', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			question: z.string(),
			answer: z.string(),
			published: z.coerce.date(),
			order: z.number().int().default(0),
		}),
});

const privacypolicy = defineCollection({
	loader: glob({ base: './src/contents/privacypolicy', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
			draft: z.boolean().default(false),
		}),
});

export const collections = { products, news, faq, privacypolicy };
