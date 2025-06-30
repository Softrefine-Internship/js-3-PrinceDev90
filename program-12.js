// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"

function getTheLogestString(arr) {
  let longestString = "";

  for (const word of arr) {
    if (word.length > longestString.length) {
      longestString = word;
    }
  }
  return longestString;
}

arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];

console.log(getTheLogestString(arr));
