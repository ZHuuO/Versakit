import vue from '@vitejs/plugin-vue'
import path from 'path'
// CSS工程化
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'
import postNested from 'postcss-nested'
import mixins from 'postcss-mixins'
import each from 'postcss-each'
import eachVariables from 'postcss-each-variables'
import cssnano from 'cssnano'
// TS
import dts from 'vite-plugin-dts'

// 图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    dts({ tsconfigPath: '../../tsconfig.build.json' }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
    postcss: {
      plugins: [
        each(),
        eachVariables(),
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
        }),
        mixins(),
        postNested(),
        postCssPxToRem({
          rootValue: 16,
          propList: ['*'],
        }),
        cssnano({
          preset: 'default',
        }),
      ],
    },
  },
  // 打包配置
  build: {
    sourcemap: false,
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
          preserveModules: false,
        },
        {
          format: 'umd',
          dir: 'dist/umd',
          entryFileNames: '[name].umd.js',
          name: 'index',
        },
        {
          format: 'esm',
          dir: 'dist/esm',
          entryFileNames: '[name].esm.js',
        },
      ],
    },
    lib: {
      entry: 'index.ts',
      name: 'versakit-ui',
    },
    terserOptions: {
      compress: {
        // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        keep_infinity: true,
        // 生产环境去除 console
        drop_console: true,
        // 生产环境去除 debugger
        drop_debugger: true,
      },
      format: {
        comments: false, // 删除注释
      },
    },
  },
})
