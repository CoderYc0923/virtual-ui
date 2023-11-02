import baseConfig from "./base.config.js";
import { defineConfig } from "vite";
import { currentRef, formatDate } from "./utils";
import { execSync } from "child_process";
const packJson = require("../package.json");
const date = new Date(execSync("git show -s --format=%cd").toString());
const ref = execSync("git show -s --format=%D").toString().trim();
const hash = execSync("git show -s --format=%H").toString().trim();

// 打印日志
const messages =
  "/*" +
  Buffer.from(
    `ref: ${currentRef(ref)}, date: ${formatDate(
      date
    )}, hash: ${hash}, project: -name- ${packJson.name} -v- ${packJson.version}`
  ).toString("base64") +
  "*/";

export default defineConfig({
  ...baseConfig,
  mode: "production",
  logLevel: "info",
  base: "./", // 打包路径
  clearScreen: false, // 不会清空上一次控制台打印信息
  // sourcemap: true, // 开启
  build: {
    target: "modules",
    // polyfillDynamicImport: true, // 自动注入 动态导入 polyfill
    outDir: "VirtualUiDoc",
    assetsDir: "static/img",
    assetsInlineLimit: 8192, // 小于 8kb 的导入或引用资源将内联为 base64 编码
    cssCodeSplit: false, // 在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时插入
    sourcemap: false, // 构建后是否生成 source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        banner: messages,
        manualChunks: {
          // nprogress: ['nprogress'],
          vue: ["vue"],
        },
        // 分包
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
    minify: "terser",
    chunkSizeWarningLimit: 800, // chunk 大小警告的限制
  },
});
