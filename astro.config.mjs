// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://bunnybunbun37204.github.io',
  base: 'my-portfolio',
  output: 'static',
  integrations: [mdx()],
});