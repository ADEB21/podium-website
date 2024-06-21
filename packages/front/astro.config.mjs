import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';


import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), react()],
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
