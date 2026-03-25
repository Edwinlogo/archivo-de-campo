// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ─── Configuración del sitio ───
  // Cambia 'site' a tu dominio personalizado si tienes uno.
  // Si usas GitHub Pages sin dominio propio, usa:
  //   site: 'https://Edwinlogo.github.io', base: '/archivo-de-campo'
  site: 'https://Edwinlogo.github.io',
  base: '/',

  integrations: [mdx(), sitemap()],
});
