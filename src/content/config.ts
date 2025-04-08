import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.string(),
    items: z.array(z.string()),
    repo: z.string().optional(),
  })
});

const education = defineCollection({
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    date: z.string(),
    details: z.string().optional()
  })
});

const skills = defineCollection({
  schema: z.object({
    categories: z.record(z.array(z.string()))
  })
});

export const collections = { experience, education, skills };