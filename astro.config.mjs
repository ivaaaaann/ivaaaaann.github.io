import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
