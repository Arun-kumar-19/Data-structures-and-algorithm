let a = [10, 90, 99, 10, 20, 10];
let x = 5;
let arr = [];
for (let i = 0; i < a.length; i++) {
  if (x === a[i]) {
    arr.push(a[i]);
  }
}
if (arr.length === 0) {
  console.log("x is not found  ");
} else {
  console.log("x is found " + arr.length + " times");
}
