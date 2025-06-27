// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }

function convertToObj1(arr) {
  let obj = {};
  arr.forEach(([key, val]) => {
    obj[key] = val;
  });
  return obj;
}

const input = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15],
];
const output1 = convertToObj1(input);
console.log(output1);