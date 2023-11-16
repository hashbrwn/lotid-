const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


function countLetters(sentence){
  const letterReps = []; 
   
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (letterReps[letter]) {
      
        letterReps[letter] = letterReps[letter] + 1;
      } else {
        letterReps[letter] = 1;
      }
    }
    
  }
  return letterReps;
}

console.log(countLetters("Lebron james"));


