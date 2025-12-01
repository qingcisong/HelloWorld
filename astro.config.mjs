// astro.config.mjs
import { defineConfig } from "astro/config";

// 你之前就有的这些集成（保持不变）
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Tailwind v4 的 Vite 插件
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://example.com",
  integrations: [react(), mdx(), sitemap()],
  vite: {
    // 把 tailwind() 插件挂上
    plugins: [tailwind()],
  },
});
