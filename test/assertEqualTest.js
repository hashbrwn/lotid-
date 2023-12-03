const assertEqual = require('../assertEqual');
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

// Test case 1: Arrays are equal
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // ✅✅✅ Assertion Passed: true === true

// Test case 2: Arrays are not equal
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // ✅✅✅ Assertion Passed: false === false

// Test case 3: Arrays with strings are equal
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // ✅✅✅ Assertion Passed: true === true

// Test case 4: Arrays with strings are not equal
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // ✅✅✅ Assertion Passed: false === false
