const assertEqual = function(value1, value2) {
  if (value1 === value2) {
    console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
  }
};


//implement function tail

const tail = function(arr) {
  if(arr.length <= 1) {

  return [] 

} else {
 
  return arr.slice(1)
};

};
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!
