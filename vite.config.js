import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
// import postCssPxToRem from "postcss-pxtorem";
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       postCssPxToRem({
  //         rootValue: 37.5,
  //         propList: ["*"],
  //       }),
  //       require("tailwindcss"),
  //       require("autoprefixer"),
  //     ],
  //   },
  // },
});
