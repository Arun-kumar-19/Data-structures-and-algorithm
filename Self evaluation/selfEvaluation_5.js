// 4. Given an array of length n and k (k < n)
// find the maximum sum of k consecutive numbers.
// for eg:
// let a = [4,5, 10, 11, 1];
// let k = 3;
// The maximum is 26.

let a = [4, 5, 10, 11, 1];
let k = 3;

let arrayFor = [];

for (let i = 0; i < k; i++) {
  let n = 0;
  for (let j = i; j < k + i; j++) {
    n += a[j];
  }
  arrayFor.push(n);
}
console.log(arrayFor);

let maxInArray = arrayFor[0];
for (let i = 1; i < arrayFor.length; i++) {
  if (maxInArray < arrayFor[i]) {
    maxInArray = arrayFor[i];
  }
}
console.log("The maximum is " + maxInArray);
