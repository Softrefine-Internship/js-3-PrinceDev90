// Write a JavaScript program to get the index of an object by it's property.

// Input:  [
//   {
//     prop_1: "val_1",
//     prop_2: "val_2",
//     prop_3: "val_3",
//   },
//   {
//     prop_1: "val_4",
//     prop_2: "val_5",
//     prop_3: "val_6",
//   },
// ];

// Output: 1 (index of an object for prop_1: 'val_4')

function findIndexByProp(arr, propName, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][propName] === val) {
      return i;
    }
  }
  return -1;
}

const arrayObj = [
  { prop_1: "val_1", prop_2: "val_2", prop_3: "val_3" },
  { prop_1: "val_4", prop_2: "val_5", prop_3: "val_6" },
];

function getIndex(arrayObj, property, value) {
  return arrayObj.findIndex((obj) => obj[property] === value);
}

const result = findIndexByProp(arrayObj, "prop_1", "val_sdsd");
console.log(result === -1 ? "Index not found." : result);

console.log(getIndex(arrayObj, "prop_1", "val_4"));
