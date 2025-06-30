// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

// function groupByProp(arr) {
//   const filterObg = {};

//   for (const obj of arr) {
//     filterObg[obj.name] = [...[], obj.id];
//   }
//   return filterObg;
// }

// using the array
function groupByProp1(arr) {
  const grouped = {};

  for (const obj of arr) {
    if (!grouped[obj.name]) {
      grouped[obj.name] = []; // Initialize array if name not present
    }
    grouped[obj.name].push(obj.id); // Push id to the array
  }

  return grouped;
}

// using the map
function groupByProp2(arr) {
  const map = new Map();

  for (const obj of arr) {
    if (!map.has(obj.name)) {
      map.set(obj.name, []);
    }
    map.get(obj.name).push(obj.id);
  }

  return map;
}

arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];
console.log(groupByProp1(arr));
console.log(groupByProp2(arr));

console.log(Object.getOwnPropertyNames(Map.prototype));
