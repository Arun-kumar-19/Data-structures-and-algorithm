// find min number in the array
let b = [32, 45, 773, 87, 0, 21, 1000];
let min = a[0];
for (let i = 1; i < a.length; i++) {
  if (min > a[i]) {
    min = a[i];
  }
}
console.log(min);
