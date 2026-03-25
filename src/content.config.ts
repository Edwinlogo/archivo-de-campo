/**
 * Configuración de Content Collections para Archivo de Campo.
 * Cada sección del sitio tiene su propia colección con esquema tipado.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── El Archivo ───
const archivo = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/archivo' }),
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

// ─── Campo & Obra ───
const campo = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/campo' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    year: z.number(),
    category: z.enum([
      'construcción',
      'torres-telecomunicaciones',
      'planos-documentación',
      'urbanismo',
      'remodelaciones',
      'planta-concreto',
      'estimating-florida',
    ]),
    location: z.string().optional(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    cover: z.string().optional(),
    hasVideo: z.boolean().default(false),
    has360: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// ─── Biblioteca ───
const biblioteca = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/biblioteca' }),
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

// ─── Tecnología & Software ───
const tecnologia = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/tecnologia' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['software', 'ia-aplicada', 'hardware', 'workflow', 'nueva-tecnologia']),
    tools: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

// ─── Arte & Sensibilidad Visual ───
const arte = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/arte' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    medium: z.enum(['sketch', 'fotografía', 'video', '360', 'recorrido-virtual', 'mixto']),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  archivo,
  proyectos,
  campo,
  biblioteca,
  tecnologia,
  arte,
};
