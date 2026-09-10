import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  outDir: './dist',
  site: 'https://hemanth-karumanchi.github.io',
});
