/**
 * RSS Feed — Genera feed automático para El Archivo y Campo & Obra.
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const archivo = (await getCollection('archivo')).filter(e => !e.data.draft);
  const campo = (await getCollection('campo')).filter(e => !e.data.draft);

  const items = [
    ...archivo.map(e => ({
      title: e.data.title,
      pubDate: e.data.date,
      description: e.data.excerpt,
      link: `/archivo/${e.id}/`,
    })),
    ...campo.map(e => ({
      title: e.data.title,
      pubDate: e.data.date,
      description: e.data.excerpt,
      link: `/campo/${e.id}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Archivo de Campo',
    description: 'Apuntes, proyectos y trabajo de campo en arquitectura, ingeniería civil y estimating.',
    site: context.site!,
    items,
    customData: '<language>es</language>',
  });
}
