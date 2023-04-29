// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr.length; j++) {
//     if (arr[i] != arr[j]) {
//       if (arr[i] % arr[j] == 0) {
//         count++;
//       }
//     }
//   }
// }
// console.log(count);
let arr = [2, 3, 6];
let ar = [];
for (let i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      if (arr[i] % arr[j] == 0) {
        if (arr[i] % arr[j + 1 + i] == 0) {
          ar.push(arr[i]);
        }
      }
    }
  }
}
console.log(ar);
