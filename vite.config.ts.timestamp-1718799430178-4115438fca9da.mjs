// vite.config.ts
import { defineConfig } from "file:///F:/vueprojects/EditFront/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/vueprojects/EditFront/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { createSvgIconsPlugin } from "file:///F:/vueprojects/EditFront/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import UonCSS from "file:///F:/vueprojects/EditFront/node_modules/unocss/dist/vite.mjs";
import Icons from "file:///F:/vueprojects/EditFront/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///F:/vueprojects/EditFront/node_modules/unplugin-icons/dist/resolver.js";
import AutoImport from "file:///F:/vueprojects/EditFront/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///F:/vueprojects/EditFront/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///F:/vueprojects/EditFront/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "F:\\vueprojects\\EditFront";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: "Icon"
        })
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ["ep"]
        })
      ]
    }),
    UonCSS(),
    Icons({
      autoInstall: true
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
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
      "/api": {
        // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
        ws: true,
        target: "http://127.0.0.1:8000",
        //这里填入你要请求的接口的前缀
        changeOrigin: true,
        //是否跨域
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFx2dWVwcm9qZWN0c1xcXFxFZGl0RnJvbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXHZ1ZXByb2plY3RzXFxcXEVkaXRGcm9udFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovdnVlcHJvamVjdHMvRWRpdEZyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQge2NyZWF0ZVN2Z0ljb25zUGx1Z2lufSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5pbXBvcnQgVW9uQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHtFbGVtZW50UGx1c1Jlc29sdmVyfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdnVlKCksXG4gICAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxuICAgICAgICAgICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6ICdJY29uJyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgICAgICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZENvbGxlY3Rpb25zOiBbJ2VwJ10sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgVW9uQ1NTKCksXG4gICAgICAgIEljb25zKHtcbiAgICAgICAgICAgIGF1dG9JbnN0YWxsOnRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgICAgICAvLyBcdTYzMDdcdTVCOUFcdTk3MDBcdTg5ODFcdTdGMTNcdTVCNThcdTc2ODRcdTU2RkVcdTY4MDdcdTY1ODdcdTRFRjZcdTU5MzlcbiAgICAgICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgICAgICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcbiAgICAgICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxuICAgICAgICB9KVxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgICAgc2Nzczoge1xuICAgICAgICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcIkAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIgYXMgKjtgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgICBwcm94eToge1xuICAgICAgICAgICAgJy9hcGknOiB7XG4gICAgICAgICAgICAgICAgLy8gJy9hcGknXHU2NjJGXHU0RUUzXHU3NDA2XHU2ODA3XHU4QkM2XHVGRjBDXHU3NTI4XHU0RThFXHU1NDRBXHU4QkM5bm9kZVx1RkYwQ3VybFx1NTI0RFx1OTc2Mlx1NjYyRi9hcGlcdTc2ODRcdTVDMzFcdTY2MkZcdTRGN0ZcdTc1MjhcdTRFRTNcdTc0MDZcdTc2ODRcbiAgICAgICAgICAgICAgICB3czogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLCAvL1x1OEZEOVx1OTFDQ1x1NTg2Qlx1NTE2NVx1NEY2MFx1ODk4MVx1OEJGN1x1NkM0Mlx1NzY4NFx1NjNBNVx1NTNFM1x1NzY4NFx1NTI0RFx1N0YwMFxuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSwgICAvL1x1NjYyRlx1NTQyNlx1OERFOFx1NTdERlxuICAgICAgICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1EsU0FBUSxvQkFBbUI7QUFDM1IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixTQUFRLDRCQUEyQjtBQUNuQyxPQUFPLFlBQVk7QUFDbkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVEsMkJBQTBCO0FBVGxDLElBQU0sbUNBQW1DO0FBWXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNQLFdBQVc7QUFBQSxRQUNQLG9CQUFvQjtBQUFBLFFBQ3BCLGNBQWM7QUFBQSxVQUNWLFFBQVE7QUFBQSxRQUNaLENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDSixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDUCxXQUFXO0FBQUEsUUFDUCxvQkFBb0I7QUFBQSxRQUNwQixjQUFjO0FBQUEsVUFDVixvQkFBb0IsQ0FBQyxJQUFJO0FBQUEsUUFDN0IsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNGLGFBQVk7QUFBQSxJQUNoQixDQUFDO0FBQUEsSUFDRCxxQkFBcUI7QUFBQTtBQUFBLE1BRWpCLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQTtBQUFBLE1BRTFELFVBQVU7QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDeEM7QUFBQSxFQUNKO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUNqQixNQUFNO0FBQUEsUUFDRixtQkFBbUI7QUFBQSxRQUNuQixnQkFBZ0I7QUFBQSxNQUNwQjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixPQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUE7QUFBQSxRQUVKLElBQUk7QUFBQSxRQUNKLFFBQVE7QUFBQTtBQUFBLFFBQ1IsY0FBYztBQUFBO0FBQUEsUUFDZCxTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUNoRDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
