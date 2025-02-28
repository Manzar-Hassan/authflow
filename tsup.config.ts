import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  sourcemap: false,
  minify: true,
  dts: true,
  clean: true,
  external: ["react", "react-dom"],
  skipNodeModulesBundle: true,
  format: ["esm", "cjs"],
  splitting: false,
  bundle: true,
  outExtension({ format }) {
    return {
      js: format === "esm" ? ".mjs" : ".js",
    };
  },
});