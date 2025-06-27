// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

function namesOccurrences(arr) {
  const nameCount = {};

  // Count occurrences of each employeeName
  for (let obj of arr) {
    const name = obj.employeeName;
    nameCount[name] = (nameCount[name] || 0) + 1;
  }

  console.log(nameCount);

  // Convert the count object into an array of desired format
  const result = [];

  for (let name in nameCount) {
    result.push({ employeeName: name, occurrences: nameCount[name] });
  }

  return result;
}

const arr = [
  { employeeName: "Ram", employeeId: 23 },
  { employeeName: "Shyam", employeeId: 24 },
  { employeeName: "Ram", employeeId: 21 },
  { employeeName: "Ram", employeeId: 25 },
  { employeeName: "Kisan", employeeId: 22 },
  { employeeName: "Shyam", employeeId: 20 },
];

console.log(namesOccurrences(arr));
