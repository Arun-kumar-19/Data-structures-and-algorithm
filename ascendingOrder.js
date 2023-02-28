// Write code to arrange the array in ascending order
// for [5, 10, 1, 2, 8] output is[1, 2, 5, 8, 10]

let arr = [5, 10, 1, 2, 8];

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr);
