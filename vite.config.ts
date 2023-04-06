import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindCss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tsconfigPaths(), solidPlugin(), tailwindCss()],
  server: { port: 3000 },
  build: { target: "esnext" },
  preview: { port: 3000 },
  experimental: { enableNativePlugin: true },
});
