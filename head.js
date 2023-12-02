console.assert(1 === 1);      
console.assert(1 === 1.1);   


const sum = function(a, b) { 
  return a + b;
}


console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); 



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function(array) {
  
  if (array.length > 0) {
    
    return array[0];
  } else {
    
    return undefined;
  }
};

assertEqual("Lighthouse Labs", "Bootcamp"); 
assertEqual(1, 1);  





assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("hello", "hello"); 
assertEqual("world", "world!");