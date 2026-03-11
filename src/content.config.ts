import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const project = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/project" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: "home.json", base: "./src/content/settings" }),
  schema: z.object({
    hero: z.object({
      title: z.string(),
      description: z.string(),
      cv: z.string().optional(),
      socials: z.array(z.object({
        label: z.string(),
        url: z.string()
      }))
    }),
    about: z.object({
      text: z.string(),
      image: z.string(),
      email: z.string(),
      phone: z.string()
    })
  })
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    timeframe: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { experience, project, settings };