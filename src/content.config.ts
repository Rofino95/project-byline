import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    author: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};