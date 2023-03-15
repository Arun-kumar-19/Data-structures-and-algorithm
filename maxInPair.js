// add an index of 0 and 1, index of 2 and 3, index of 4 and 5
// find which pair is maximum

let arr = [2, 4, 8, 8, 9, 0];

let max = [];

for (let i = 0; i < 6; i++) {
  max.push(arr[i] + arr[i + 1]);
  i += 1;
}
console.log(max);
