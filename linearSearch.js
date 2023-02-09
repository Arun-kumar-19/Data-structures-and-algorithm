let a = [5, 80, 4, 8, 12, 3, 1,7];
let x = 7;
check = false;
for (let i = 0; i < a.length; i++) {
  if (a[i] === x) {
    check = true;
    break;
  }
}

if (check === true) {
  console.log(x + " is found");
} else {
  console.log(x + " is not found");
}
