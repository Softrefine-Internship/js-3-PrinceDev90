// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

function findLongestWord(str) {
  const words = str.split(" ");
  let longestStr = "";

  for (let word of words) {
    if (word.length > longestStr.length) {
      longestStr = word;
    }
  }

  return longestStr;
}

const str = "This is a demo String find the largest word from it .";
console.log(findLongestWord(str)); // Output: "largest"
