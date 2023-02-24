// Write the program where the first element is the minimum in an array for
// eg let a = [48, 1, 4, 7], output should be [1, 48, 4, 7].

let a = [48, 1, 4, 7];

let min = a[0];
for (let i = 1; i < a.length; i++) {
  if (min > a[i]) {
    min = a[i];
    a.splice(i, 1);
  }
}

a.unshift(min);
console.log(a);
