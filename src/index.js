import facts from "./facts.json";

const getRandomItem = () => Math.floor(Math.random() * facts.length);

const previousNums = [];

const getRandomFact = () => {
  const randNum = getRandomItem();

  if (facts.includes(randNum)) {
    //if the number is already there call the function again
    getRandomFact();
  } else {
    return facts[randNum];
  }
};

for (let i = 0; i < facts.length; i++) {
  console.log(i, getRandomFact());
}
