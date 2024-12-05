import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remakToc from 'remark-toc';

import db from '@astrojs/db';

export default defineConfig({
  site: 'https://ivaaaaann.github.io',
  base: '/',
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => page.includes('https://ivaaaaann.github.io/post'),
    }),
    db(),
  ],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  markdown: { remarkPlugins: [remakToc] },
});
