# Archivo de Campo

Sitio web personal estático para documentar conocimiento profesional en arquitectura, ingeniería civil y estimating. Construido con [Astro](https://astro.build).

## 🏗️ Stack técnico

- **Framework**: Astro (generación estática)
- **Contenido**: MDX con Content Collections
- **Estilos**: CSS puro con variables CSS
- **Tipografía**: Cormorant Garamond + DM Mono (Google Fonts)
- **Despliegue**: Compatible con Netlify, Vercel, GitHub Pages

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del proyecto

```
├── content/                  # Todo el contenido editable
│   ├── archivo/              # Apuntes, reflexiones, memorias
│   ├── proyectos/            # Trabajos académicos y profesionales
│   ├── campo/                # Documentación de campo y obra
│   ├── biblioteca/           # Libros recomendados
│   ├── tecnologia/           # Software, IA, workflows
│   ├── arte/                 # Sketches, fotografía, 360°
│   └── config/
│       ├── about-short.md    # Texto de presentación en el inicio
│       └── about-full.md     # Contenido de la página Sobre mí
├── src/
│   ├── components/           # Componentes reutilizables
│   ├── layouts/              # Layouts principales
│   ├── pages/                # Todas las páginas del sitio
│   └── styles/global.css     # Hoja de estilos única
├── public/                   # Archivos estáticos (imágenes, PDFs)
└── astro.config.mjs          # Configuración de Astro
```

## ✍️ Cómo agregar contenido

### Agregar un apunte al Archivo

Crea un archivo `.mdx` en `content/archivo/`:

```mdx
---
title: "Nombre de tu apunte"
date: 2024-12-01
type: "apunte"           # opciones: apunte, reflexión, memoria, resumen, idea
tags: ["etiqueta1", "etiqueta2"]
excerpt: "Resumen en 1-2 líneas para el listado."
draft: false              # true = no se publica
---

Tu contenido en Markdown aquí...
```

### Agregar un proyecto

Crea un archivo `.mdx` en `content/proyectos/`:

```mdx
---
title: "Nombre del proyecto"
date: 2024-12-01
year: 2024
discipline: "arquitectura"   # opciones: arquitectura, ingeniería civil, estimating, mixto
status: "entregado"          # opciones: en proceso, entregado, profesional
tags: ["etiqueta1"]
excerpt: "Descripción breve."
cover: "/images/mi-proyecto.jpg"   # imagen en /public/images/
draft: false
---

Contenido del proyecto...
```

### Agregar una entrada de Campo & Obra

Crea un archivo `.mdx` en `content/campo/`:

```mdx
---
title: "Nombre de la entrada"
date: 2024-12-01
year: 2024
category: "construcción"     # opciones: construcción, torres-telecomunicaciones,
                             # planos-documentación, urbanismo, remodelaciones,
                             # planta-concreto, estimating-florida
location: "Miami, Florida"  # opcional
tags: ["etiqueta1"]
excerpt: "Descripción breve."
cover: "/images/mi-foto.jpg"
hasVideo: false
has360: false
draft: false
---

Contenido con multimedia...
```

### Agregar un libro a la Biblioteca

```mdx
---
title: "Título del libro"
author: "Nombre del autor"
year: 2020
dateAdded: 2024-12-01
shelf: "diseño-y-espacio"    # opciones: diseño-y-espacio, estructura-y-materiales,
                             # estimating-y-costos, historia-y-teoria,
                             # tecnologia, lectura-general
status: "leído"             # opciones: leído, leyendo, pendiente
rating: 4                   # 1-5, opcional
externalLink: "https://..."
cover: "/images/libro.jpg"  # opcional
tags: ["etiqueta1"]
excerpt: "Tu recomendación en 1-2 líneas."
---

Tu reseña completa...
```

### Usar componentes multimedia en MDX

Dentro de cualquier archivo MDX puedes usar estos componentes:

```mdx
import Gallery from '../../src/components/Gallery.astro';
import VideoEmbed from '../../src/components/VideoEmbed.astro';
import Embed360 from '../../src/components/Embed360.astro';
import PdfViewer from '../../src/components/PdfViewer.astro';

{/* Galería fotográfica */}
<Gallery images={["/images/foto1.jpg", "/images/foto2.jpg", "/images/foto3.jpg"]} />

{/* Video de YouTube o Vimeo */}
<VideoEmbed url="https://www.youtube.com/watch?v=VIDEO_ID" />

{/* Recorrido 360° */}
<Embed360 url="https://kuula.co/share/..." />

{/* Documento PDF */}
<PdfViewer url="/docs/plano.pdf" title="Plano estructural" />
```

## 🎨 Personalizar la paleta de colores

Edita las variables CSS al inicio de `src/styles/global.css`:

```css
:root {
  --paper: #F7F5F0;        /* fondo general */
  --ink: #1A1916;           /* texto principal */
  --ink-soft: #6B6860;      /* texto secundario */
  --ink-faint: #C4C0B8;     /* elementos sutiles */
  --accent: #2C4A3E;        /* color de acento */
  --accent-light: #E8EDE9;  /* fondo de cards */
  --rule: #E2DDD6;          /* líneas divisorias */
}
```

## 🌐 Despliegue en Netlify

1. Sube el proyecto a un repositorio de GitHub
2. Conecta el repositorio en [Netlify](https://netlify.com)
3. Configura:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. ¡Listo! Cada push a `main` despliega automáticamente

## 🌐 Despliegue en Vercel

1. Sube el proyecto a GitHub
2. Importa el repositorio en [Vercel](https://vercel.com)
3. Vercel detecta Astro automáticamente
4. Cada push despliega automáticamente

## 📌 Notas importantes

- Las **etiquetas son libres** — no hay lista cerrada. Usa las que quieras.
- Las imágenes van en `public/images/` y se referencian como `/images/nombre.jpg`
- Los PDFs van en `public/docs/` y se referencian como `/docs/nombre.pdf`
- Si pones `draft: true` en cualquier entrada, no se publicará
- El sitio genera automáticamente un **sitemap** y un **RSS feed**

---

*Archivo de Campo — 2024 →*
