// JSON represention
// For students database
// name, age,stipend marks for 3 subjects, maths, physics and chemistry.
// 1. a. Find the eldest student, it should print the name of the student

let students_db_array = [
  {
    name: "Kishore",
    age: 19,
    stipend: 1000,
    marks: { maths: 50, physics: 79, chemistry: 80 },
  },
  {
    name: "Razzak",
    age: 18,
    stipend: 10000,
    marks: { maths: 80, physics: 75, chemistry: 70 },
  },
  {
    name: "Ajmal",
    age: 18,
    stipend: 10000,
    marks: { maths: 35, physics: 45, chemistry: 50 },
  },
  {
    name: "Aishwarya",
    age: 21,
    stipend: 10000,
    marks: { maths: 65, physics: 80, chemistry: 85 },
  },
];
let max = students_db_array[0].age;
let arr = [];
let std_length = students_db_array.length;
for (let i = 0; i < std_length; i++) {
  if (max < students_db_array[i].age) {
    arr.push(students_db_array[i].name);
  }
}
console.log(arr + " is the eldest student in the array.");
