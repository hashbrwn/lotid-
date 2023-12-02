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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {  
    console.log(`✅✅✅  Assertion passed: ${arr1} === ${arr2}`); 

  } else {
       
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`); 
}
  }
  module.exports = assertArraysEqual;
// Test Case 1
assertArraysEqual([1, 2, 3], [1, 2, 3]); // This should pass

// Test Case 2
assertArraysEqual(["a", "b", "c"], ["a", "b", "d"]); // This should fail

