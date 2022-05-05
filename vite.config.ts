import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import {svgstore} from './src/vite_plugins/svgstore';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // https://vitejs.dev/plugin-vue-jsx/
      transformOn: true,
      mergeProps: true,
    }),
    svgstore()
  ],
});
