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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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