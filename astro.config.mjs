// @ts-check
import { defineConfig } from 'astro/config';

import { sites } from '@openai/sites-vite-plugin';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://capitaloralsurgerytopeka.com',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss(), sites()]
  },

  integrations: [mdx()]
});
