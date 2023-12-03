const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {  
    console.log(`✅✅✅  Assertion passed: ${arr1} === ${arr2}`); 

  } else {
       
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`); 
}
  }

  const eqArrays = function(value1, value2) {

    if ( value1.length !== value2.length) {
  
      return false;
    }
  
    for(let i = 0; i < value1.length; i++) {
      if (value1[i] !== value2[i] ){
        
        return false; 
      }
  
    }
     return true; 
  }

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];

function convertToUpperCase(word) {
  return word.toUpperCase();
}

const results = map(words, convertToUpperCase);
console.log(results);


module.exports = map;