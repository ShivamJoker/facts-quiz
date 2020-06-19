import facts from "./facts.json";

const usedNumbers = {};

//get a non repeating random num
const getRandomNumber = (amount) => {
  //return null if we reached the end
  if (amount === Object.keys(usedNumbers).length) {
    return null;
  }

  let value;

  //first check if value is null then put random num
  //then check if that random number is in the object or not
  while (value == null || usedNumbers[value]) {
    value = Math.floor(Math.random() * amount);
  }

  usedNumbers[value] = true;

  return value;
};

export const getRandomFact = () => {
  const number = getRandomNumber(facts.length);
  return facts[number];
};

export const getAllFacts = () => {
  return facts;
};

export const getFactsLength = () => {
  return facts.length()
};
