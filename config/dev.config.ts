import { defineConfig } from "vite";
import baseConfig from "./base.config";

export default defineConfig({
  ...baseConfig,
  mode: "development",
  logLevel: "error",
  clearScreen: false, // 不会清空上一次控制台打印信息
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
    port: 3000,
    cors: true,
    strictPort: false, // 若端口已被占用则会直接退出，而不是尝试下一个可用端口
    force: true, // 强制使依赖预构建
  },
});
