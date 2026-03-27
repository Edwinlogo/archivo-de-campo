/**
 * RSS Feed — Genera feed automático para Ejercicios de Arquitectura.
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const archivo = (await getCollection('archivo')).filter(e => !e.data.draft);

  const items = [
    ...archivo.map(e => ({
      title: e.data.title,
      pubDate: e.data.date,
      description: e.data.excerpt,
      link: `/ejercicios/${e.id}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Edwin López',
    description: 'Apuntes, proyectos y trabajo de campo en arquitectura, ingeniería civil y estimating.',
    site: context.site!,
    items,
    customData: '<language>es</language>',
  });
}
