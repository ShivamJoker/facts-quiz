import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

const dist = "dist";

export default {
  input: ["src/index.js"],
  output: [
    {
      file: `${dist}/index.js`,
      format: "cjs",
    },
    {
      file: `${dist}/index.es.js`,
      format: "esm",
    },
    {
      file: `${dist}/factsquiz.js`,
      format: "iife",
      name: "fq",
      plugins: [terser()],
    },
  ],

  plugins: [json()],
};
