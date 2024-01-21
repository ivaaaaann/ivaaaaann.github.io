import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remakToc from 'remark-toc';

export default defineConfig({
  site: 'https://example.com',
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  markdown: { remarkPlugins: [remakToc] },
});
