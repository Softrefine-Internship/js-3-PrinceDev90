// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

// check only key exist or not
function filterObj(obj1, obj2) {
  let exist = true;

  for (const key in obj2) {
    if (obj1[key] === undefined) {
      exist = false;
      break;
    }
  }
  return exist;
}

const obj1 = { name: "John", age: 23, degree: "CS" };
const obj2 = { age: 23, degree: "CS" };

const obj11 = { name: "John", degree: "CS" };
const obj22 = { name: "Max", age: 23, degree: "CS" };

console.log("=================== case 1 ========================");
console.log(filterObj(obj1, obj2));
console.log(filterObj(obj11, obj22));

// check key and value also
function filterObj2(obj1, obj2) {
  for (const key in obj2) {
    if (obj1[key] !== obj2[key] || obj1[key] === undefined) {
      return false;
    }
  }
  return true;
}

console.log("=================== case 2 ========================");
console.log(filterObj2(obj1, obj2));
console.log(filterObj2(obj11, obj22));

function filterObj3(obj1, obj2) {
  return Object.entries(obj2).every(([key, value]) => obj1[key] === value);
}


console.log("=================== case 3 ========================");
console.log(filterObj3(obj1, obj2));
console.log(filterObj3(obj11, obj22));

console.log(Object.entries(obj2));