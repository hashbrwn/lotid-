const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {  
    console.log(`✅✅✅  Assertion passed: ${arr1} === ${arr2}`); 

  } else {
       
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`); 
}
  }
  const letterPositions = function(inputString) {
    const positions = {};
  
    for (let index = 0; index < inputString.length; index++) {
      let currentChar = inputString[index];
  
      if (currentChar === ' ') {
        continue; 
      } else if (!positions[currentChar]) {
        positions[currentChar] = [index]; 
      } else {
        positions[currentChar].push(index); 
      }
    }
  
    return positions;
  };
  
  console.log(letterPositions('lotide '))
module.exports = letterPositions;