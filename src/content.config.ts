/**
 * Configuración de Content Collections para Edwin López.
 * Cada sección del sitio tiene su propia colección con esquema tipado.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── Ejercicios de Arquitectura ───
const archivo = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/ejercicios' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['apunte', 'reflexión', 'memoria', 'resumen', 'idea']),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

// ─── Proyectos & Proceso ───
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/proyectos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    year: z.number(),
    discipline: z.enum(['arquitectura', 'ingeniería civil', 'estimating', 'mixto']),
    status: z.enum(['en proceso', 'entregado', 'profesional']),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// ─── Literatura ───
const biblioteca = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/literatura' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    year: z.number(),
    dateAdded: z.coerce.date(),
    shelf: z.enum([
      'diseño-y-espacio',
      'estructura-y-materiales',
      'estimating-y-costos',
      'historia-y-teoria',
      'tecnologia',
      'lectura-general',
    ]),
    status: z.enum(['leído', 'leyendo', 'pendiente']),
    rating: z.number().min(1).max(5).optional(),
    externalLink: z.string().url().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
  }),
});

export const collections = {
  archivo,
  proyectos,
  biblioteca,
};
