import json from "@rollup/plugin-json";

const dist = "dist";
export default {
  input: ["src/index.js"],
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: "cjs",
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: "esm",
    },
    {
      name: "FactsQuiz",
      file: `${dist}/bundle.umd.js`,
      format: "umd",
    },
  ],
  plugins: [json()],
};
