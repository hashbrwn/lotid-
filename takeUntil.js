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

const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item) !== true) {
      result.push(item);
    } else {
      return result;
    }
  }
};





const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
