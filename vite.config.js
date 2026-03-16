import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Update `base` to your GitHub repo name when deploying to GitHub Pages
// e.g. base: "/itz-fizz-scroll-animation/"
export default defineConfig({
  plugins: [react()],
  base: "./",
});
