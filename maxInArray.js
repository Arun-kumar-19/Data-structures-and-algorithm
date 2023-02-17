// find max number in the array
let a = [45, 773, 87, 0, 21, 100];
let max = a[0];
for (let i = 1; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
  }
}
console.log(max);
