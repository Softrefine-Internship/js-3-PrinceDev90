// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

function getAllCombinations(str) {
  str = str.toLowerCase();
  let result = [];

  for (let i = 0; i < str.length; i++) {    
    let combination = "";
    for (let j = i; j < str.length; j++) {
      combination += str[j];
      result.push(combination);
    }
  }

  return result;
}

// Example
console.log(getAllCombinations("Prince"));
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]
