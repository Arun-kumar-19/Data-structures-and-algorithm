// need to do properly
let a = [8, 4, 3, 1, 7];

let min1 = a[0];
let min2 = a[1];

if (min1 > min2) {
  min1 = a[1];
  min2 = a[0];
}
for (let i = 2; i < a.length - 1; i++) {
  if (a[i] < min1) {
    min2 = min1;
    min1 = a[i];
  } else if (a[i] < min2) {
    min2 = a[i];
  }
}
console.log();
