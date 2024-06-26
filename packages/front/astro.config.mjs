import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import swup from "@swup/astro";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap(),
    react(),
    swup({
      theme: ["overlay", { direction: "to-bottom" }],
      globalInstance: true,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@/assets/styles/utils/root.scss";`,
        },
      },
    },
  },
});