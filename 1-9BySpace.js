// print
// 1
// 234
// 56789 for n=3

let n = 3;

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = i; j <= i * i; j++) {
    str += j;
  }
  console.log(str);
}

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   let k = 0;
//   for (let j = ; j <= i + ; j++) {
//     str += j;
//   }
//   k = k + 2;
//   console.log(str);
// }

// let counter = 1;
// let str = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += counter;
//     counter++;
//   }
//   str += "\n";
// }
// console.log(str);
