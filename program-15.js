// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

const check__subSet = (set1, set2) => {
  for (const num of set1.values()) {
    if (!set2.has(num)) {
      return false;
      break;
    }
  }
  return true;
};

let set1a = new Set([1, 2, 3, 4, 5]);
let set2a = new Set([3, 4]);

let set1b = new Set([3, 4]);
let set2b = new Set([1, 2, 3, 4, 5]);

console.log(check__subSet(set1a, set2a)); // false
console.log(check__subSet(set1b, set2b)); // true
