import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Импортируем лоадер

const work = defineCollection({
  // Заменяем type: 'content' на loader
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { work };