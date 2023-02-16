// JSON represention
// For students database
// name, age,stipend marks for 3 subjects, maths, physics and chemistry.
// 0. Given a name find it in the array of students.

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

let x = "Kishore";
let check = false;
let array_length = students_db_array.length;
for (let i = 0; i < array_length; i++) {
  if (students_db_array[i].name === x) {
    check = true;
    break;
  }
}
if (check == true) {
  console.log(x + " is found in the array");
} else {
  console.log(x + " is not found in the array");
}
