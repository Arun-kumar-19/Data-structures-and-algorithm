// 1.b. find the student who earns the least stipend

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

let min = students_db_array[0].stipend;

let std_length = students_db_array.length;

let arr = [];

for (let i = 0; i < std_length; i++) {
  if (min >= students_db_array[i].stipend) {
    arr.push(students_db_array[i].name);
  }
}
console.log(arr + " earns the least stipend");
