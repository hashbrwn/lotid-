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

  const middle = function(array) {
    if (array.length <= 2) {
      return [];
    } else if (array.length % 2 === 0) {
      const middleIndex1 = Math.floor(array.length / 2) - 1;
      const middleIndex2 = Math.floor(array.length / 2);
      return [array[middleIndex1], array[middleIndex2]];
    } else {
      const middleIndex = Math.floor(array.length / 2);
      return [array[middleIndex]];
    }
  };
  
  module.exports = middle;

  assertArraysEqual(middle([1, 2, 3]), [2]);
  
  
  
