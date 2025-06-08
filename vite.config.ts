import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    historyApiFallback: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  define: {
    "process.env.VITE_APP_KEY": JSON.stringify(process.env.VITE_APP_KEY),
    "process.env.VITE_AUTH_KEY": JSON.stringify(process.env.VITE_AUTH_KEY),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
