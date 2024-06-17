import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import UonCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UonCSS(),
        Icons({
            autoInstall:true,
        }),
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]',
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: `@use "@/styles/variables.scss" as *;`
            }
        }
    },
    server: {
        proxy: {
            '/api': {
                // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
                ws: true,
                target: 'http://127.0.0.1:8000', //这里填入你要请求的接口的前缀
                changeOrigin: true,   //是否跨域
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})

