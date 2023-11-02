import { defineConfig } from "vite";
import { resolve } from "path";
import baseConfig from './base.config'

export default defineConfig({
    ...baseConfig,
    //打包配置
    build: {
        sourcemap: false,
        outDir: 'VirtualUI',
        assetsInlineLimit: 8192, //小于8kb的导入或引用资源将内联为base64
        terserOptions: {
            //生产环境移除console.log
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        },
        lib: {
            entry: resolve(process.cwd(), './packages/components/index.ts'), //入口文件
            name: 'virtual-ui', //用于安装和引入的名称
            fileName: (format) => `virtual-ui.${format}.js` //打包后的文件名
        },
        rollupOptions: {
            //确保外部化处理处理那些不想打包进库的依赖
            external: ['vue', 'tailwindcss', '@element-plus/icons-vue'],
            output: {
                //在UMD构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                    tailwindcss: 'tailwindcss',
                    '@element-plus/icons-vue': '@element-plus/icons-vue'
                }
            }
        }
    }
})