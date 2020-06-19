const { getRandomFact } = require("../dist/bundle.umd.js");

for (let i = 0; i < 50; i++) {
  console.log(i, getRandomFact());
}
