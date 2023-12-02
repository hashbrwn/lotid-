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

const without = function(source, itemsToRemove) {
 let result = []

  for (let i = 0; i < source.length; i++) {
    let element = source[i];

    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
}

module.exports = without;