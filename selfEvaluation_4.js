// 4. Given an array of length n and k (k < n)
// find the maximum sum of k consecutive numbers.
// for eg:
// let a = [4,5, 10, 11, 1];
// let k = 3;
// The maximum is 26.

let a = [4, 5, 10, 11, 1];
let k = 3;

let a_1 = [];

for (let i = 0; i < a.length; i++) {
  let n = 0;
  for (let j = i; j < k; j++) {
    n += a[j];
  }
  a_1.push(n);
}
console.log(a_1);
