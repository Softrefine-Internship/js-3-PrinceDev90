// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

function count__frequency(word) {
  const obj = {};
  for (const char of word) {
    // obj[char] = (obj[char] || 0) + 1;

    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

console.log(count__frequency("Hello"));
