import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'],
    base: './src/content/articles',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    /** Tie-breaker for articles published on the same date (lower first). */
    order: z.number().optional(),
  }),
});

const reference = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'],
    base: './src/content/reference',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    order: z.number().optional(),
  }),
});

const spreadsheets = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/spreadsheets' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
  }),
});

const whitepapers = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/whitepapers' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    readLink: z.string().optional(),
    order: z.number().optional(),
    btnTitle: z.string().optional(),
    btnLink: z.string().optional(),
  }),
});

export const collections = { articles, reference, spreadsheets, whitepapers };
