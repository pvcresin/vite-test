import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { babel } from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  plugins: [
    babel({
      extensions: [".ts", ".tsx"],
      plugins: ["import-glob"],
    }),
    reactRefresh(),
  ],
  resolve: {
    alias: {
      "@components": "./components",
    },
  },
});
