// 2. Find the students whose physics score is more than 70

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

let x = 70;
let mark = [];
let arrays = students_db_array.marks;

for (let i = 0; i < students_db_array.length; i++) {
  if (x < students_db_array[i].marks.physics) {
    mark.push(students_db_array[i].name);
  }
}
console.log(mark + "'s physics score  more than 70");
