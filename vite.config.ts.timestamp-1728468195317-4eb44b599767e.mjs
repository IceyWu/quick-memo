// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/MyDev/vue/MyGitHub/quick-memo/node_modules/.pnpm/vite@5.4.8_@types+node@20.14.15_sass@1.77.6_terser@5.31.5/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/MyDev/vue/MyGitHub/quick-memo/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.8_@types+node@20.14.15_sass@1.77.6_terser@5.31.5__vue@3.5.11_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/MyDev/vue/MyGitHub/quick-memo/node_modules/.pnpm/unplugin-auto-import@0.18.2_@nuxt+kit@3.13.1_rollup@4.22.4_webpack-sources@3.2.3__@vueuse+cor_j7eqbcsgdh4gqaglbb2dxwl5z4/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/MyDev/vue/MyGitHub/quick-memo/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.7_@nuxt+kit@3.13.1_rollup@4.22.4_webpack-so_foz3yxzayarqujj44evbbg4tda/node_modules/unplugin-vue-components/dist/vite.js";
import { NaiveUiResolver } from "file:///D:/MyDev/vue/MyGitHub/quick-memo/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.7_@nuxt+kit@3.13.1_rollup@4.22.4_webpack-so_foz3yxzayarqujj44evbbg4tda/node_modules/unplugin-vue-components/dist/resolvers.js";

// build/config/getPath.ts
import path from "path";
var __vite_injected_original_dirname = "D:\\MyDev\\vue\\MyGitHub\\quick-memo\\build\\config";
var getRootPath = () => {
  return path.resolve(__vite_injected_original_dirname, process.cwd());
};
var getSrcPath = (mainName = "src") => {
  const rootPath = getRootPath();
  return `${rootPath}/${mainName}`;
};

// vite.config.ts
import vueJsx from "file:///D:/MyDev/vue/MyGitHub/quick-memo/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.0_vite@5.4.8_@types+node@20.14.15_sass@1.77.6_terser@5.31.5__vue@3.5.11_typescript@5.6.2_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import unocss from "file:///D:/MyDev/vue/MyGitHub/quick-memo/node_modules/.pnpm/@unocss+vite@0.62.3_rollup@4.22.4_vite@5.4.8_@types+node@20.14.15_sass@1.77.6_terser@5.31.5_/node_modules/@unocss/vite/dist/index.mjs";
import terser from "file:///D:/MyDev/vue/MyGitHub/quick-memo/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.22.4/node_modules/@rollup/plugin-terser/dist/es/index.js";

// package.json
var package_default = {
  name: "quick-memo",
  private: true,
  type: "module",
  version: "0.0.1",
  engines: {
    node: ">=18.12.0",
    pnpm: ">=8.10.0"
  },
  repository: {
    url: "https://github.com/IceyWu/quick-memo.git"
  },
  author: {
    name: "IceyWu",
    email: "3128006406@qq.com",
    url: "https://github.com/IceyWu/quick-memo"
  },
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "oxlint src",
      "prettier --config .prettierrc --write",
      "eslint src"
    ]
  },
  scripts: {
    dev: "vite",
    build: "vue-tsc --noEmit && vite build",
    "tauri:dev": "tauri dev",
    "tauri:build": "tauri build",
    "tauri:build->debug": "tauri build --debug",
    "tauri:icon": "tauri icon hula.png",
    preinstall: "npx only-allow pnpm",
    commit: "git add . && git-cz",
    changelog: "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
    "lint:staged": "lint-staged",
    prepare: "husky install"
  },
  dependencies: {
    "@iceywu/utils": "^0.0.42",
    "@tauri-apps/api": "2.0.0-rc.0",
    "@tauri-apps/plugin-clipboard-manager": "2.0.0-rc.0",
    "@tauri-apps/plugin-http": "2.0.0-rc.1",
    "@tauri-apps/plugin-notification": "^2.0.0",
    "@tauri-apps/plugin-os": "2.0.0-rc.0",
    "@tauri-apps/plugin-process": "2.0.0-rc.0",
    axios: "^1.7.4",
    colorthief: "^2.4.0",
    dayjs: "^1.11.11",
    "grapheme-splitter": "^1.0.4",
    "lodash-es": "^4.17.21",
    mitt: "^3.0.1",
    "naive-ui": "^2.40.1",
    pinia: "^2.2.1",
    "pinia-plugin-persistedstate": "^3.2.1",
    "pinia-shared-state": "^0.5.1",
    vue: "^3.5.11",
    "vue-draggable-plus": "^0.5.3",
    "vue-router": "^4.4.2"
  },
  devDependencies: {
    "@babel/eslint-parser": "^7.24.7",
    "@commitlint/cli": "^19.3.0",
    "@commitlint/config-conventional": "^19.2.2",
    "@rollup/plugin-terser": "^0.4.4",
    "@tauri-apps/cli": "2.0.0-rc.3",
    "@types/lodash-es": "^4.17.12",
    "@types/node": "^20.14.14",
    "@typescript-eslint/eslint-plugin": "7.1.0",
    "@typescript-eslint/parser": "^7.15.0",
    "@unocss/preset-uno": "^0.62.3",
    "@unocss/reset": "^0.62.3",
    "@unocss/transformer-directives": "^0.62.3",
    "@unocss/transformer-variant-group": "^0.62.3",
    "@unocss/vite": "^0.62.3",
    "@vitejs/plugin-vue": "^5.1.2",
    "@vitejs/plugin-vue-jsx": "^4.0.0",
    "@vueuse/core": "^10.11.0",
    commitizen: "^4.3.0",
    "conventional-changelog": "^6.0.0",
    "conventional-changelog-cli": "^5.0.0",
    "cz-git": "^1.9.3",
    eslint: "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-vue": "^9.27.0",
    husky: "^9.0.11",
    "lint-staged": "^15.2.7",
    oxlint: "^0.2.18",
    prettier: "^3.3.2",
    sass: "1.77.6",
    "sass-loader": "^14.2.1",
    typescript: "^5.6.2",
    "unplugin-auto-import": "^0.18.2",
    "unplugin-vue-components": "^0.27.4",
    vite: "5.4.8",
    "vue-tsc": "^2.1.4"
  },
  config: {
    commitizen: {
      path: "node_modules/cz-git"
    }
  }
};

// build/config/console.ts
var atStartup = (env, mode) => {
  return () => {
    if (mode === "dev") {
      console.log(
        `  \u{1F340} ${"\x1B[32m"}${"\x1B[38;2;19;152;127m"}${env.VITE_APP_NAME} ${"\x1B[0m"}${"\x1B[90m"}${package_default.version}${"\x1B[0m"}`
      );
      console.log(
        `  ${"\x1B[38;2;26;178;146m"}${"\x1B[1m"}${"\u279C"}${"\x1B[0m"}  ${"\u5F53\u524D\u73AF\u5883: "}${"\x1B[38;2;215;95;135m"}${mode}${"\x1B[0m"}`
      );
      console.log(
        `  ${"\x1B[38;2;26;178;146m"}${"\x1B[1m"}${"\u279C"}${"\x1B[0m"}  ${"\x1B[38;2;0;215;175m"}${"\x1B[1m"}${"Vue"}${"\x1B[0m"}: ${"\x1B[90m"}${package_default.dependencies.vue}${"\x1B[0m"} ${"\x1B[38;2;95;215;255m"}${"\x1B[1m"}${"Vite"}${"\x1B[0m"}: ${"\x1B[90m"}${package_default.devDependencies.vite}${"\x1B[0m"} ${"\x1B[38;5;33m"}${"\x1B[1m"}${"Node.js"}${"\x1B[0m"}: ${"\x1B[90m"}${process.version}${"\x1B[0m"}`
      );
      console.log(
        `  ${"\x1B[38;2;26;178;146m"}${"\x1B[1m"}${"\u279C"}${"\x1B[0m"}  \u5F53\u524D ${"\x1B[38;2;215;135;0m"}${"\x1B[1m"}Tauri${"\x1B[0m"} \u7248\u672C: `,
        `${"\x1B[90m"}${package_default.dependencies["@tauri-apps/api"]}${"\x1B[0m"}`
      );
      console.log(
        `  ${"\x1B[38;2;26;178;146m"}${"\x1B[1m"}${"\x1B[2m"}${"\u279C"}${"\x1B[0m"}  \u540E\u7AEF\u670D\u52A1\u5730\u5740: ${"\x1B[38;2;95;175;255m"}https://github.com/nongyehong/HuLa-IM-Server${"\x1B[0m"}`
      );
      console.log(
        `  ${"\x1B[38;2;26;178;146m"}${"\x1B[1m"}${"\x1B[2m"}${"\u279C"}${"\x1B[0m"}  \u9879\u76EE\u5730\u5740: ${package_default.author.url}`
      );
    }
  };
};

// vite.config.ts
var vite_config_default = defineConfig(({ mode }) => {
  const config = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        // 配置路径别名@
        "@": getSrcPath(),
        // 配置路径别名~(根路径)
        "~": getRootPath()
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/styles/scss/global/variable.scss" as *;'
          // 加载全局样式，使用scss特性
        }
      }
    },
    define: {
      // enable hydration mismatch details in production build 3.4新增水化不匹配的警告
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true"
    },
    plugins: [
      /**! 启动时候打印项目信息(不需要可关闭)  */
      atStartup(config, mode),
      /**
       * vue3.5.0已支持解构并具有响应式
       * */
      vue(),
      vueJsx(),
      // 开启jsx功能
      unocss(),
      // 开启unocss
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          "pinia",
          { "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar", "useModal"] }
        ],
        dts: "src/typings/auto-imports.d.ts"
      }),
      /**自动导入组件，但是不会自动导入jsx和tsx*/
      Components({
        dirs: ["src/components/**"],
        // 设置需要扫描的目录
        resolvers: [NaiveUiResolver()],
        dts: "src/typings/components.d.ts"
      }),
      /** 压缩代码 */
      terser({
        format: {
          comments: false
          // 移除所有注释
        },
        compress: {
          drop_console: true,
          // 移除 console.log
          drop_debugger: true
          // 移除 debugger
        }
      })
    ],
    build: {
      cssCodeSplit: true,
      // 启用 CSS 代码拆分
      minify: "terser",
      // 指定使用哪种混淆器
      // chunk 大小警告的限制(kb)
      chunkSizeWarningLimit: 1200,
      // 分包配置
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          // 引入文件名的名称
          entryFileNames: "static/js/[name]-[hash].js",
          // 包的入口文件名称
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          // 资源文件像 字体，图片等
          // 最小化拆分包
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "invariable";
            }
          }
        }
      }
    },
    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,
    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
      //配置跨域
      proxy: {
        "/api": {
          // “/api” 以及前置字符串会被替换为真正域名
          target: config.VITE_SERVICE_URL,
          // 请求域名
          changeOrigin: true,
          // 是否跨域
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      },
      hmr: true,
      // 热更新
      cors: true,
      // 配置 CORS
      host: "0.0.0.0",
      port: 6130,
      strictPort: true,
      watch: {
        // 3. tell vite to ignore watching `src-tauri`
        ignored: ["**/src-tauri/**"]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvY29uZmlnL2dldFBhdGgudHMiLCAicGFja2FnZS5qc29uIiwgImJ1aWxkL2NvbmZpZy9jb25zb2xlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTXlEZXZcXFxcdnVlXFxcXE15R2l0SHViXFxcXHF1aWNrLW1lbW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE15RGV2XFxcXHZ1ZVxcXFxNeUdpdEh1YlxcXFxxdWljay1tZW1vXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9NeURldi92dWUvTXlHaXRIdWIvcXVpY2stbWVtby92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IENvbmZpZ0VudiwgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZScgLy9cdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnIC8vXHU3RUM0XHU0RUY2XHU2Q0U4XHU1MThDXG5pbXBvcnQgeyBOYWl2ZVVpUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgeyBnZXRSb290UGF0aCwgZ2V0U3JjUGF0aCB9IGZyb20gJy4vYnVpbGQvY29uZmlnL2dldFBhdGgnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgdW5vY3NzIGZyb20gJ0B1bm9jc3Mvdml0ZSdcbmltcG9ydCB0ZXJzZXIgZnJvbSAnQHJvbGx1cC9wbHVnaW4tdGVyc2VyJ1xuaW1wb3J0IHsgYXRTdGFydHVwIH0gZnJvbSAnLi9idWlsZC9jb25maWcvY29uc29sZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbi8qKiEgXHU0RTBEXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHU1MjREXHU3QUVGXHU2MjUzXHU1MzA1KFx1NTk4Mlx1NUYwMFx1NTQyRmd6aXApICovXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9OiBDb25maWdFbnYpID0+IHtcbiAgLy8gXHU4M0I3XHU1M0Q2XHU1RjUzXHU1MjREXHU3M0FGXHU1ODgzXHU3Njg0XHU5MTREXHU3RjZFLFx1NTk4Mlx1NEY1NVx1OEJCRVx1N0Y2RVx1N0IyQ1x1NEUwOVx1NEUyQVx1NTNDMlx1NjU3MFx1NTIxOVx1NTJBMFx1OEY3RFx1NjI0MFx1NjcwOVx1NTNEOFx1OTFDRlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NEVFNVx1MjAxQ1ZJVEVfXHUyMDFEXHU1MjREXHU3RjAwXHU3Njg0XHU1M0Q4XHU5MUNGXG4gIGNvbnN0IGNvbmZpZyA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSlcbiAgcmV0dXJuIHtcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAvLyBcdTkxNERcdTdGNkVcdThERUZcdTVGODRcdTUyMkJcdTU0MERAXG4gICAgICAgICdAJzogZ2V0U3JjUGF0aCgpLFxuICAgICAgICAvLyBcdTkxNERcdTdGNkVcdThERUZcdTVGODRcdTUyMkJcdTU0MER+KFx1NjgzOVx1OERFRlx1NUY4NClcbiAgICAgICAgJ34nOiBnZXRSb290UGF0aCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQHVzZSBcIi4vc3JjL3N0eWxlcy9zY3NzL2dsb2JhbC92YXJpYWJsZS5zY3NzXCIgYXMgKjsnIC8vIFx1NTJBMFx1OEY3RFx1NTE2OFx1NUM0MFx1NjgzN1x1NUYwRlx1RkYwQ1x1NEY3Rlx1NzUyOHNjc3NcdTcyNzlcdTYwMjdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGVmaW5lOiB7XG4gICAgICAvLyBlbmFibGUgaHlkcmF0aW9uIG1pc21hdGNoIGRldGFpbHMgaW4gcHJvZHVjdGlvbiBidWlsZCAzLjRcdTY1QjBcdTU4OUVcdTZDMzRcdTUzMTZcdTRFMERcdTUzMzlcdTkxNERcdTc2ODRcdThCNjZcdTU0NEFcbiAgICAgIF9fVlVFX1BST0RfSFlEUkFUSU9OX01JU01BVENIX0RFVEFJTFNfXzogJ3RydWUnXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAvKiohIFx1NTQyRlx1NTJBOFx1NjVGNlx1NTAxOVx1NjI1M1x1NTM3MFx1OTg3OVx1NzZFRVx1NEZFMVx1NjA2RihcdTRFMERcdTk3MDBcdTg5ODFcdTUzRUZcdTUxNzNcdTk1RUQpICAqL1xuICAgICAgYXRTdGFydHVwKGNvbmZpZywgbW9kZSksXG4gICAgICAvKipcbiAgICAgICAqIHZ1ZTMuNS4wXHU1REYyXHU2NTJGXHU2MzAxXHU4OUUzXHU2Nzg0XHU1RTc2XHU1MTc3XHU2NzA5XHU1NENEXHU1RTk0XHU1RjBGXG4gICAgICAgKiAqL1xuICAgICAgdnVlKCksXG4gICAgICB2dWVKc3goKSwgLy8gXHU1RjAwXHU1NDJGanN4XHU1MjlGXHU4MEZEXG4gICAgICB1bm9jc3MoKSwgLy8gXHU1RjAwXHU1NDJGdW5vY3NzXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogW1xuICAgICAgICAgICd2dWUnLFxuICAgICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgICAncGluaWEnLFxuICAgICAgICAgIHsgJ25haXZlLXVpJzogWyd1c2VEaWFsb2cnLCAndXNlTWVzc2FnZScsICd1c2VOb3RpZmljYXRpb24nLCAndXNlTG9hZGluZ0JhcicsICd1c2VNb2RhbCddIH1cbiAgICAgICAgXSxcbiAgICAgICAgZHRzOiAnc3JjL3R5cGluZ3MvYXV0by1pbXBvcnRzLmQudHMnXG4gICAgICB9KSxcbiAgICAgIC8qKlx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1N0VDNFx1NEVGNlx1RkYwQ1x1NEY0Nlx1NjYyRlx1NEUwRFx1NEYxQVx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NWpzeFx1NTQ4Q3RzeCovXG4gICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgZGlyczogWydzcmMvY29tcG9uZW50cy8qKiddLCAvLyBcdThCQkVcdTdGNkVcdTk3MDBcdTg5ODFcdTYyNkJcdTYzQ0ZcdTc2ODRcdTc2RUVcdTVGNTVcbiAgICAgICAgcmVzb2x2ZXJzOiBbTmFpdmVVaVJlc29sdmVyKCldLFxuICAgICAgICBkdHM6ICdzcmMvdHlwaW5ncy9jb21wb25lbnRzLmQudHMnXG4gICAgICB9KSxcbiAgICAgIC8qKiBcdTUzOEJcdTdGMjlcdTRFRTNcdTc4MDEgKi9cbiAgICAgIHRlcnNlcih7XG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZSAvLyBcdTc5RkJcdTk2NjRcdTYyNDBcdTY3MDlcdTZDRThcdTkxQ0FcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsIC8vIFx1NzlGQlx1OTY2NCBjb25zb2xlLmxvZ1xuICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUgLy8gXHU3OUZCXHU5NjY0IGRlYnVnZ2VyXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgY3NzQ29kZVNwbGl0OiB0cnVlLCAvLyBcdTU0MkZcdTc1MjggQ1NTIFx1NEVFM1x1NzgwMVx1NjJDNlx1NTIwNlxuICAgICAgbWluaWZ5OiAndGVyc2VyJywgLy8gXHU2MzA3XHU1QjlBXHU0RjdGXHU3NTI4XHU1NEVBXHU3OUNEXHU2REY3XHU2REM2XHU1NjY4XG4gICAgICAvLyBjaHVuayBcdTU5MjdcdTVDMEZcdThCNjZcdTU0NEFcdTc2ODRcdTk2NTBcdTUyMzYoa2IpXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEyMDAsXG4gICAgICAvLyBcdTUyMDZcdTUzMDVcdTkxNERcdTdGNkVcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsIC8vIFx1NUYxNVx1NTE2NVx1NjU4N1x1NEVGNlx1NTQwRFx1NzY4NFx1NTQwRFx1NzlGMFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnLCAvLyBcdTUzMDVcdTc2ODRcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcdTU0MERcdTc5RjBcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ3N0YXRpYy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJywgLy8gXHU4RDQ0XHU2RTkwXHU2NTg3XHU0RUY2XHU1MENGIFx1NUI1N1x1NEY1M1x1RkYwQ1x1NTZGRVx1NzI0N1x1N0I0OVxuICAgICAgICAgIC8vIFx1NjcwMFx1NUMwRlx1NTMxNlx1NjJDNlx1NTIwNlx1NTMwNVxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ2ludmFyaWFibGUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFZpdGUgb3B0aW9ucyB0YWlsb3JlZCBmb3IgVGF1cmkgZGV2ZWxvcG1lbnQgYW5kIG9ubHkgYXBwbGllZCBpbiBgdGF1cmkgZGV2YCBvciBgdGF1cmkgYnVpbGRgXG4gICAgLy9cbiAgICAvLyAxLiBwcmV2ZW50IHZpdGUgZnJvbSBvYnNjdXJpbmcgcnVzdCBlcnJvcnNcbiAgICBjbGVhclNjcmVlbjogZmFsc2UsXG4gICAgLy8gMi4gdGF1cmkgZXhwZWN0cyBhIGZpeGVkIHBvcnQsIGZhaWwgaWYgdGhhdCBwb3J0IGlzIG5vdCBhdmFpbGFibGVcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIC8vXHU5MTREXHU3RjZFXHU4REU4XHU1N0RGXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICAvLyBcdTIwMUMvYXBpXHUyMDFEIFx1NEVFNVx1NTNDQVx1NTI0RFx1N0Y2RVx1NUI1N1x1N0IyNlx1NEUzMlx1NEYxQVx1ODhBQlx1NjZGRlx1NjM2Mlx1NEUzQVx1NzcxRlx1NkI2M1x1NTdERlx1NTQwRFxuICAgICAgICAgIHRhcmdldDogY29uZmlnLlZJVEVfU0VSVklDRV9VUkwsIC8vIFx1OEJGN1x1NkM0Mlx1NTdERlx1NTQwRFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU4REU4XHU1N0RGXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaG1yOiB0cnVlLCAvLyBcdTcwRURcdTY2RjRcdTY1QjBcbiAgICAgIGNvcnM6IHRydWUsIC8vIFx1OTE0RFx1N0Y2RSBDT1JTXG4gICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICBwb3J0OiA2MTMwLFxuICAgICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICAgIHdhdGNoOiB7XG4gICAgICAgIC8vIDMuIHRlbGwgdml0ZSB0byBpZ25vcmUgd2F0Y2hpbmcgYHNyYy10YXVyaWBcbiAgICAgICAgaWdub3JlZDogWycqKi9zcmMtdGF1cmkvKionXVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTXlEZXZcXFxcdnVlXFxcXE15R2l0SHViXFxcXHF1aWNrLW1lbW9cXFxcYnVpbGRcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxNeURldlxcXFx2dWVcXFxcTXlHaXRIdWJcXFxccXVpY2stbWVtb1xcXFxidWlsZFxcXFxjb25maWdcXFxcZ2V0UGF0aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTXlEZXYvdnVlL015R2l0SHViL3F1aWNrLW1lbW8vYnVpbGQvY29uZmlnL2dldFBhdGgudHNcIjsvL1x1NEY3Rlx1NzUyOHBhdGhcdTk3MDBcdTg5ODFcdTYzMDlcdTcxNjdAdHlwZXMvbm9kZVx1NEY5RFx1OEQ1NlxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLyoqXG4gKiBcdTgzQjdcdTUzRDZcdTk4NzlcdTc2RUVcdTY4MzlcdThERUZcdTVGODRcbiAqIEBkZXNjcml0aW9uIFx1NjcyQlx1NUMzRVx1NEUwRFx1NUUyNlx1NjU5Q1x1Njc2MFxuICovXG5leHBvcnQgY29uc3QgZ2V0Um9vdFBhdGggPSAoKSA9PiB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBwcm9jZXNzLmN3ZCgpKVxufVxuXG4vKipcbiAqIFx1ODNCN1x1NTNENlx1OTg3OVx1NzZFRVx1NEUzQlx1OERFRlx1NUY4NCBcdTU5ODIoc3JjKVxuICogQHBhcmFtIG1haW5OYW1lIC0gc3JjXHU3NkVFXHU1RjU1XHU1NDBEXHU3OUYwKFx1OUVEOFx1OEJBNDogXCJzcmNcIilcbiAqIEBkZXNjcml0aW9uIFx1NjcyQlx1NUMzRVx1NEUwRFx1NUUyNlx1NjU5Q1x1Njc2MFxuICovXG5leHBvcnQgY29uc3QgZ2V0U3JjUGF0aCA9IChtYWluTmFtZSA9ICdzcmMnKSA9PiB7XG4gIGNvbnN0IHJvb3RQYXRoID0gZ2V0Um9vdFBhdGgoKVxuICByZXR1cm4gYCR7cm9vdFBhdGh9LyR7bWFpbk5hbWV9YFxufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwicXVpY2stbWVtb1wiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0xOC4xMi4wXCIsXG4gICAgXCJwbnBtXCI6IFwiPj04LjEwLjBcIlxuICB9LFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0ljZXlXdS9xdWljay1tZW1vLmdpdFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IHtcbiAgICBcIm5hbWVcIjogXCJJY2V5V3VcIixcbiAgICBcImVtYWlsXCI6IFwiMzEyODAwNjQwNkBxcS5jb21cIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9JY2V5V3UvcXVpY2stbWVtb1wiXG4gIH0sXG4gIFwibGludC1zdGFnZWRcIjoge1xuICAgIFwiKi57anMsanN4LHZ1ZSx0cyx0c3h9XCI6IFtcbiAgICAgIFwib3hsaW50IHNyY1wiLFxuICAgICAgXCJwcmV0dGllciAtLWNvbmZpZyAucHJldHRpZXJyYyAtLXdyaXRlXCIsXG4gICAgICBcImVzbGludCBzcmNcIlxuICAgIF1cbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICBcImJ1aWxkXCI6IFwidnVlLXRzYyAtLW5vRW1pdCAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgXCJ0YXVyaTpkZXZcIjogXCJ0YXVyaSBkZXZcIixcbiAgICBcInRhdXJpOmJ1aWxkXCI6IFwidGF1cmkgYnVpbGRcIixcbiAgICBcInRhdXJpOmJ1aWxkLT5kZWJ1Z1wiOiBcInRhdXJpIGJ1aWxkIC0tZGVidWdcIixcbiAgICBcInRhdXJpOmljb25cIjogXCJ0YXVyaSBpY29uIGh1bGEucG5nXCIsXG4gICAgXCJwcmVpbnN0YWxsXCI6IFwibnB4IG9ubHktYWxsb3cgcG5wbVwiLFxuICAgIFwiY29tbWl0XCI6IFwiZ2l0IGFkZCAuICYmIGdpdC1jelwiLFxuICAgIFwiY2hhbmdlbG9nXCI6IFwiY29udmVudGlvbmFsLWNoYW5nZWxvZyAtcCBhbmd1bGFyIC1pIENIQU5HRUxPRy5tZCAtcyAtciAwXCIsXG4gICAgXCJsaW50OnN0YWdlZFwiOiBcImxpbnQtc3RhZ2VkXCIsXG4gICAgXCJwcmVwYXJlXCI6IFwiaHVza3kgaW5zdGFsbFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBpY2V5d3UvdXRpbHNcIjogXCJeMC4wLjQyXCIsXG4gICAgXCJAdGF1cmktYXBwcy9hcGlcIjogXCIyLjAuMC1yYy4wXCIsXG4gICAgXCJAdGF1cmktYXBwcy9wbHVnaW4tY2xpcGJvYXJkLW1hbmFnZXJcIjogXCIyLjAuMC1yYy4wXCIsXG4gICAgXCJAdGF1cmktYXBwcy9wbHVnaW4taHR0cFwiOiBcIjIuMC4wLXJjLjFcIixcbiAgICBcIkB0YXVyaS1hcHBzL3BsdWdpbi1ub3RpZmljYXRpb25cIjogXCJeMi4wLjBcIixcbiAgICBcIkB0YXVyaS1hcHBzL3BsdWdpbi1vc1wiOiBcIjIuMC4wLXJjLjBcIixcbiAgICBcIkB0YXVyaS1hcHBzL3BsdWdpbi1wcm9jZXNzXCI6IFwiMi4wLjAtcmMuMFwiLFxuICAgIFwiYXhpb3NcIjogXCJeMS43LjRcIixcbiAgICBcImNvbG9ydGhpZWZcIjogXCJeMi40LjBcIixcbiAgICBcImRheWpzXCI6IFwiXjEuMTEuMTFcIixcbiAgICBcImdyYXBoZW1lLXNwbGl0dGVyXCI6IFwiXjEuMC40XCIsXG4gICAgXCJsb2Rhc2gtZXNcIjogXCJeNC4xNy4yMVwiLFxuICAgIFwibWl0dFwiOiBcIl4zLjAuMVwiLFxuICAgIFwibmFpdmUtdWlcIjogXCJeMi40MC4xXCIsXG4gICAgXCJwaW5pYVwiOiBcIl4yLjIuMVwiLFxuICAgIFwicGluaWEtcGx1Z2luLXBlcnNpc3RlZHN0YXRlXCI6IFwiXjMuMi4xXCIsXG4gICAgXCJwaW5pYS1zaGFyZWQtc3RhdGVcIjogXCJeMC41LjFcIixcbiAgICBcInZ1ZVwiOiBcIl4zLjUuMTFcIixcbiAgICBcInZ1ZS1kcmFnZ2FibGUtcGx1c1wiOiBcIl4wLjUuM1wiLFxuICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjQuMlwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9lc2xpbnQtcGFyc2VyXCI6IFwiXjcuMjQuN1wiLFxuICAgIFwiQGNvbW1pdGxpbnQvY2xpXCI6IFwiXjE5LjMuMFwiLFxuICAgIFwiQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbFwiOiBcIl4xOS4yLjJcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLXRlcnNlclwiOiBcIl4wLjQuNFwiLFxuICAgIFwiQHRhdXJpLWFwcHMvY2xpXCI6IFwiMi4wLjAtcmMuM1wiLFxuICAgIFwiQHR5cGVzL2xvZGFzaC1lc1wiOiBcIl40LjE3LjEyXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xNC4xNFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCI3LjEuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl43LjE1LjBcIixcbiAgICBcIkB1bm9jc3MvcHJlc2V0LXVub1wiOiBcIl4wLjYyLjNcIixcbiAgICBcIkB1bm9jc3MvcmVzZXRcIjogXCJeMC42Mi4zXCIsXG4gICAgXCJAdW5vY3NzL3RyYW5zZm9ybWVyLWRpcmVjdGl2ZXNcIjogXCJeMC42Mi4zXCIsXG4gICAgXCJAdW5vY3NzL3RyYW5zZm9ybWVyLXZhcmlhbnQtZ3JvdXBcIjogXCJeMC42Mi4zXCIsXG4gICAgXCJAdW5vY3NzL3ZpdGVcIjogXCJeMC42Mi4zXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4xLjJcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeNC4wLjBcIixcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcIl4xMC4xMS4wXCIsXG4gICAgXCJjb21taXRpemVuXCI6IFwiXjQuMy4wXCIsXG4gICAgXCJjb252ZW50aW9uYWwtY2hhbmdlbG9nXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJjb252ZW50aW9uYWwtY2hhbmdlbG9nLWNsaVwiOiBcIl41LjAuMFwiLFxuICAgIFwiY3otZ2l0XCI6IFwiXjEuOS4zXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ny4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjkuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjI5LjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tcHJldHRpZXJcIjogXCJeNS4xLjNcIixcbiAgICBcImVzbGludC1wbHVnaW4tdnVlXCI6IFwiXjkuMjcuMFwiLFxuICAgIFwiaHVza3lcIjogXCJeOS4wLjExXCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xNS4yLjdcIixcbiAgICBcIm94bGludFwiOiBcIl4wLjIuMThcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4yXCIsXG4gICAgXCJzYXNzXCI6IFwiMS43Ny42XCIsXG4gICAgXCJzYXNzLWxvYWRlclwiOiBcIl4xNC4yLjFcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS42LjJcIixcbiAgICBcInVucGx1Z2luLWF1dG8taW1wb3J0XCI6IFwiXjAuMTguMlwiLFxuICAgIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcIjogXCJeMC4yNy40XCIsXG4gICAgXCJ2aXRlXCI6IFwiNS40LjhcIixcbiAgICBcInZ1ZS10c2NcIjogXCJeMi4xLjRcIlxuICB9LFxuICBcImNvbmZpZ1wiOiB7XG4gICAgXCJjb21taXRpemVuXCI6IHtcbiAgICAgIFwicGF0aFwiOiBcIm5vZGVfbW9kdWxlcy9jei1naXRcIlxuICAgIH1cbiAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxNeURldlxcXFx2dWVcXFxcTXlHaXRIdWJcXFxccXVpY2stbWVtb1xcXFxidWlsZFxcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE15RGV2XFxcXHZ1ZVxcXFxNeUdpdEh1YlxcXFxxdWljay1tZW1vXFxcXGJ1aWxkXFxcXGNvbmZpZ1xcXFxjb25zb2xlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9NeURldi92dWUvTXlHaXRIdWIvcXVpY2stbWVtby9idWlsZC9jb25maWcvY29uc29sZS50c1wiO2ltcG9ydCBwa2cgZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xuXG4vKipcbiAqIFx1NTQyRlx1NTJBOFx1NjVGNlx1NjI1M1x1NTM3MFx1NEZFMVx1NjA2RlxuICogQHBhcmFtIGVudiBcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcbiAqIEBwYXJhbSBtb2RlIFx1OEZEMFx1ODg0Q1x1NkEyMVx1NUYwRlxuICovXG5leHBvcnQgY29uc3QgYXRTdGFydHVwID0gKGVudjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgbW9kZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKG1vZGUgPT09ICdkZXYnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCAgXHVEODNDXHVERjQwICR7J1xceDFiWzMybSd9JHsnXFx4MWJbMzg7MjsxOTsxNTI7MTI3bSd9JHtlbnYuVklURV9BUFBfTkFNRX0gJHsnXFx4MWJbMG0nfSR7J1xceDFiWzkwbSd9JHtwa2cudmVyc2lvbn0keydcXHgxYlswbSd9YFxuICAgICAgKVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGAgICR7J1xcdTAwMWJbMzg7MjsyNjsxNzg7MTQ2bSd9JHsnXFx4MWJbMW0nfSR7J1x1Mjc5Qyd9JHsnXFx4MWJbMG0nfSAgYCArXG4gICAgICAgICAgYCR7J1x1NUY1M1x1NTI0RFx1NzNBRlx1NTg4MzogJ31gICtcbiAgICAgICAgICBgJHsnXFx4MWJbMzg7MjsyMTU7OTU7MTM1bSd9JHttb2RlfSR7J1xceDFiWzBtJ31gXG4gICAgICApXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCAgJHsnXFx1MDAxYlszODsyOzI2OzE3ODsxNDZtJ30keydcXHgxYlsxbSd9JHsnXHUyNzlDJ30keydcXHgxYlswbSd9ICAkeydcXHgxYlszODsyOzA7MjE1OzE3NW0nfSR7J1xceDFiWzFtJ30keydWdWUnfSR7J1xceDFiWzBtJ306IGAgK1xuICAgICAgICAgIGAkeydcXHgxYls5MG0nfSR7cGtnLmRlcGVuZGVuY2llcy52dWV9JHsnXFx4MWJbMG0nfWAgK1xuICAgICAgICAgIGAgJHsnXFx4MWJbMzg7Mjs5NTsyMTU7MjU1bSd9JHsnXFx4MWJbMW0nfSR7J1ZpdGUnfSR7J1xceDFiWzBtJ306IGAgK1xuICAgICAgICAgIGAkeydcXHgxYls5MG0nfSR7cGtnLmRldkRlcGVuZGVuY2llcy52aXRlfSR7J1xceDFiWzBtJ31gICtcbiAgICAgICAgICBgICR7J1xcdTAwMWJbMzg7NTszM20nfSR7J1xceDFiWzFtJ30keydOb2RlLmpzJ30keydcXHgxYlswbSd9OiBgICtcbiAgICAgICAgICBgJHsnXFx4MWJbOTBtJ30ke3Byb2Nlc3MudmVyc2lvbn0keydcXHgxYlswbSd9YFxuICAgICAgKVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGAgICR7J1xcdTAwMWJbMzg7MjsyNjsxNzg7MTQ2bSd9JHsnXFx4MWJbMW0nfSR7J1x1Mjc5Qyd9JHsnXFx4MWJbMG0nfSAgYCArXG4gICAgICAgICAgYFx1NUY1M1x1NTI0RCAkeydcXHgxYlszODsyOzIxNTsxMzU7MG0nfSR7J1xceDFiWzFtJ31UYXVyaSR7J1xceDFiWzBtJ30gXHU3MjQ4XHU2NzJDOiBgLFxuICAgICAgICBgJHsnXFx4MWJbOTBtJ30ke3BrZy5kZXBlbmRlbmNpZXNbJ0B0YXVyaS1hcHBzL2FwaSddfSR7J1xceDFiWzBtJ31gXG4gICAgICApXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCAgJHsnXFx1MDAxYlszODsyOzI2OzE3ODsxNDZtJ30keydcXHgxYlsxbSd9JHsnXFx1MDAxYlsybSd9JHsnXHUyNzlDJ30keydcXHgxYlswbSd9ICBgICtcbiAgICAgICAgICAnXHU1NDBFXHU3QUVGXHU2NzBEXHU1MkExXHU1NzMwXHU1NzQwOiAnICtcbiAgICAgICAgICBgJHsnXFx4MWJbMzg7Mjs5NTsxNzU7MjU1bSd9aHR0cHM6Ly9naXRodWIuY29tL25vbmd5ZWhvbmcvSHVMYS1JTS1TZXJ2ZXIkeydcXHgxYlswbSd9YFxuICAgICAgKVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGAgICR7J1xcdTAwMWJbMzg7MjsyNjsxNzg7MTQ2bSd9JHsnXFx4MWJbMW0nfSR7J1xcdTAwMWJbMm0nfSR7J1x1Mjc5Qyd9JHsnXFx4MWJbMG0nfSAgYCArXG4gICAgICAgICAgJ1x1OTg3OVx1NzZFRVx1NTczMFx1NTc0MDogJyArXG4gICAgICAgICAgYCR7cGtnLmF1dGhvci51cmx9YFxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0UixTQUFvQixjQUFjLGVBQWU7QUFDN1UsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsdUJBQXVCOzs7QUNIaEMsT0FBTyxVQUFVO0FBRGpCLElBQU0sbUNBQW1DO0FBT2xDLElBQU0sY0FBYyxNQUFNO0FBQy9CLFNBQU8sS0FBSyxRQUFRLGtDQUFXLFFBQVEsSUFBSSxDQUFDO0FBQzlDO0FBT08sSUFBTSxhQUFhLENBQUMsV0FBVyxVQUFVO0FBQzlDLFFBQU0sV0FBVyxZQUFZO0FBQzdCLFNBQU8sR0FBRyxRQUFRLElBQUksUUFBUTtBQUNoQzs7O0FEYkEsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUNuQixPQUFPLFlBQVk7OztBRVJuQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztB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
