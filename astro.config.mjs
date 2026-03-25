// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ─── Para GitHub Pages ───
  // Reemplaza 'TU-USUARIO' con tu nombre de usuario de GitHub
  // y 'archivo-de-campo' con el nombre de tu repositorio.
  site: 'https://Edwinlogo.github.io',
  base: '/archivo-de-campo',

  // ─── Para dominio propio (Netlify, Vercel, etc.) ───
  // Descomenta la línea de abajo y comenta las dos de arriba:
  // site: 'https://archivodecampo.com',
  // base: '/',

  integrations: [mdx(), sitemap()],
});
