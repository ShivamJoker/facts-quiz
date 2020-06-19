import json from "@rollup/plugin-json";

const dist = "dist";

export default {
  input: ["src/index.js"],
  output: {
    name: "fq",
    file: `${dist}/factsquiz.js`,
    format: "umd",
  },

  plugins: [json()],
};
