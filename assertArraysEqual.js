const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {  
    console.log(`✅✅✅  Assertion passed: ${arr1} === ${arr2}`); 

  } else {
       
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`); 
}
  }
 
// Test Case 1
assertArraysEqual([1, 2, 3], [1, 2, 3]); // This should pass

// Test Case 2
assertArraysEqual(["a", "b", "c"], ["a", "b", "d"]); // This should fail

module.exports = assertArraysEqual;
