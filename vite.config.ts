import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/WildyBingo/",
  plugins: [react()],
  optimizeDeps: {
    // Bun handles dependencies efficiently, but we can optimize further
    include: ["react", "react-dom"],
    force: true, // Force re-optimization for better HMR
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.15.2": "recharts",
      "react-resizable-panels@2.1.7": "react-resizable-panels",
      "react-hook-form@7.55.0": "react-hook-form",
      "react-day-picker@8.10.1": "react-day-picker",
      "next-themes@0.4.6": "next-themes",
      "lucide-react@0.487.0": "lucide-react",
      "input-otp@1.4.2": "input-otp",
      "figma:asset/f6eed65453de6b35638bc6d91eb43d3c2f06b1cd.png": path.resolve(
        __dirname,
        "./src/assets/f6eed65453de6b35638bc6d91eb43d3c2f06b1cd.png"
      ),
      "figma:asset/e65c38c04d7541c6136a709dc6e6107202dd73a4.png": path.resolve(
        __dirname,
        "./src/assets/e65c38c04d7541c6136a709dc6e6107202dd73a4.png"
      ),
      "figma:asset/d75d1bb5197bd8a8e1e56d9995e7a486ff406abf.png": path.resolve(
        __dirname,
        "./src/assets/d75d1bb5197bd8a8e1e56d9995e7a486ff406abf.png"
      ),
      "figma:asset/cfb053fe488bb122e222e0ff5fe1e923c3379849.png": path.resolve(
        __dirname,
        "./src/assets/cfb053fe488bb122e222e0ff5fe1e923c3379849.png"
      ),
      "figma:asset/cc9747a9bec19ebb9751af93b3547bf6a8f027f2.png": path.resolve(
        __dirname,
        "./src/assets/cc9747a9bec19ebb9751af93b3547bf6a8f027f2.png"
      ),
      "figma:asset/72a40bec1ab30a4de32e7ffb78694ccb1ebb0a3f.png": path.resolve(
        __dirname,
        "./src/assets/72a40bec1ab30a4de32e7ffb78694ccb1ebb0a3f.png"
      ),
      "figma:asset/6e46343b8ed1d9a71c7ce803aa899036cef4db2c.png": path.resolve(
        __dirname,
        "./src/assets/6e46343b8ed1d9a71c7ce803aa899036cef4db2c.png"
      ),
      "figma:asset/4d28642a520b70d8848c53757642cee6af30cd9c.png": path.resolve(
        __dirname,
        "./src/assets/4d28642a520b70d8848c53757642cee6af30cd9c.png"
      ),
      "figma:asset/33d8daa401689f5124ff59041b1eb1f92a0ad7ef.png": path.resolve(
        __dirname,
        "./src/assets/33d8daa401689f5124ff59041b1eb1f92a0ad7ef.png"
      ),
      "figma:asset/303a8bf5097f086fff5f33c5e49e2b951a8c819c.png": path.resolve(
        __dirname,
        "./src/assets/303a8bf5097f086fff5f33c5e49e2b951a8c819c.png"
      ),
      "figma:asset/2d4839935b59f602082c5fdd1fa01fb5d85cfaea.png": path.resolve(
        __dirname,
        "./src/assets/2d4839935b59f602082c5fdd1fa01fb5d85cfaea.png"
      ),
      "figma:asset/24c711db3b3048ff2bc59e8fbbcdb03ce1be0778.png": path.resolve(
        __dirname,
        "./src/assets/24c711db3b3048ff2bc59e8fbbcdb03ce1be0778.png"
      ),
      "figma:asset/127f3a7eb2660ec5912845a828475a4c7e76cb4f.png": path.resolve(
        __dirname,
        "./src/assets/127f3a7eb2660ec5912845a828475a4c7e76cb4f.png"
      ),
      "embla-carousel-react@8.6.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",
      "class-variance-authority@0.7.1": "class-variance-authority",
      "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle@1.1.2": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-slider@1.2.3": "@radix-ui/react-slider",
      "@radix-ui/react-separator@1.1.2": "@radix-ui/react-separator",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area@1.2.3": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group@1.2.3": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress@1.1.2": "@radix-ui/react-progress",
      "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu@1.2.5":
        "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar@1.1.6": "@radix-ui/react-menubar",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu@2.2.6": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible@1.1.3": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox@1.1.4": "@radix-ui/react-checkbox",
      "@radix-ui/react-avatar@1.1.3": "@radix-ui/react-avatar",
      "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog@1.1.6": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
    host: true, // Allow external connections
    // Optimize for Bun's fast startup and HMR
    hmr: {
      overlay: true,
      port: 3001, // Use different port for HMR to avoid conflicts
    },
    watch: {
      usePolling: true, // Enable polling for better file watching
      interval: 1000, // Poll every second
    },
  },
  // Enable faster builds with Bun
  esbuild: {
    target: "esnext",
  },
});
