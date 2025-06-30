// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

function isAnagram(str1, str2) {
  // Helper function to clean and sort a string
  const cleanString = (str) =>
    console.log(
      str
        .replace(/\s+/g, "") // remove all spaces
        .toLowerCase() // convert to lowercase
        .split("") // convert to array of characters
        .sort() // sort characters
        .join("")
    ); // join back to string

  return cleanString(str1) === cleanString(str2);
}

// Example 1
console.log(isAnagram("evil", "vile")); // true

// Example 2
console.log(isAnagram("a gentleman", "elegant man")); // true

// Example 3
console.log(isAnagram("eleven plus two", "twelve plus one")); // true
