import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  root: "client",
  base: "./",
  plugins: [react(), tailwindcss()],
  build: { outDir: "../dist/public", emptyOutDir: true },
  server: { host: "0.0.0.0" },
});
