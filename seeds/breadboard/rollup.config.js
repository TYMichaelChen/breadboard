import terser from "@rollup/plugin-terser";

export default [
  {
    input: "dist/src/index.js",
    output: {
      file: "dist/index.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true,
    },
  },
  {
    input: "dist/src/worker/index.js",
    output: {
      file: "dist/worker.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true,
    },
  },
];