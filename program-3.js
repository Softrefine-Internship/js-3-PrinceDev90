// Write a JavaScript program to flatten object into single depth object.

// Input:
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output:
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }

// only single depth
function flattenObject1(obj) {
  const newObj = {};

  for (const key in obj) {
    if (typeof obj[key] !== "object") {
      newObj[key] = obj[key];
      delete obj[key];
    }
  }

  for (let key in obj) {
    for (const [keys, val] of Object.entries(obj[key])) {
      let modifiedKey = `${key}.${keys}`;
      newObj[modifiedKey] = val;
    }
  }

  return newObj;
}

const obj1 = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

const output = flattenObject1(obj1);
console.log(output);

// dynamic
function flattenObject2(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? parentKey + "." + key : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject2(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const obj2 = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: 91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

const flattenedObj = flattenObject2(obj2);

console.log(flattenedObj);
