// Write a JavaScript program to find intersection of two sets.

// Input:
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

// solution -- 1
let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

const intersection = [...set1].filter((item) => set2.has(item));

console.log(intersection); // [3, 4]

// ================================= new solution ======================
// Solution -- 2
console.log(
  [...new Set([1, 2, 3, 4])].filter((x) => new Set([3, 4, 5, 6]).has(x))
);
