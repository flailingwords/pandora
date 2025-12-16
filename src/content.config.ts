import { defineCollection } from 'astro:content'

import { glob, file } from 'astro/loaders'

import { z } from 'astro/zod'

const articles = defineCollection({
    loader: glob({
        pattern: ['*.md', '!/favicon.ico'],
        base: './src/data/articles'
    }),
    schema: z.object({
        title: z.string(),
        authors: z.string().array(),
        tagline: z.string(),
        created: z.number().positive(),
        modified: z.number().positive().nullish(),
        showSections: z.boolean().nullish()
    })
})

const manifesto = defineCollection({
    loader: glob({
        pattern: ['**/*.md', '!/favicon.ico'],
        base: './src/data/manifesto'
    }),
    schema: z.object({
        title: z.string(),
        chapterTitle: z.string(),
        authors: z.string().array(),
        tagline: z.string(),
        created: z.number().positive(),
        modified: z.number().positive().nullish()
    })
})

export const collections = { articles, manifesto }
