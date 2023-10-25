import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Markdown from "vite-plugin-md";
import MarkdownItAnchor from "markdown-it-anchor";
import path from "path";

export default defineConfig({
  root: process.cwd(),
  publicDir: "public",
  logLevel: "error",
  envDir: process.cwd(),
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
      views: path.resolve(process.cwd(), "src/views"),
    },
    extensions: [".js", ".json", ".ts"],
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/types/auto-import.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Markdown({
      markdownItSetup(md) {
        // add anchor links to your H[x] tags
        md.use(MarkdownItAnchor);
      },
    }),
  ],
});
