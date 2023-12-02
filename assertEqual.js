console.assert(1 === 1);      // Nothing happens because true
console.assert(1 === 1.1);    // Prints out "Assertion failed" to the terminal

// FUNCTION IMPLEMENTATION
const sum = function(a, b) { 
  return a + b;
}

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!

// FUNCTION IMPLEMENTATION

const assertEqual = function(value1, value2) {
  if (value1 === value2) {
    console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");  // This should fail
assertEqual(1, 1);  // This should pass




// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("hello", "hello"); 
assertEqual("world", "world!");