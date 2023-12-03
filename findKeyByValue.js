const assertEqual = function(value1, value2) {
  if (value1 === value2) {
    console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
  }
};

const findKeyByValue = function(inputObject, targetValue) {
  const objectKeys = Object.keys(inputObject);

  for (const key of objectKeys) {
    if (inputObject[key] === targetValue) {
      return key;
    }
  }
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;