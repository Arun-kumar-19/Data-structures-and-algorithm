// 3. Given an array, print the sum of all even numbers in the array
// let a = [4, 3, 17, 10, 11];
// it should print 14

let a = [4, 3, 17, 10, 11, 12];
let n = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    n += a[i];
  }
}
console.log(n);
