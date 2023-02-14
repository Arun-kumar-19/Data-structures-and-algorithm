/*
Try this if you are comfortable with linear search.

int a[] = [13, 11, 13,4, 10, 9, 1];
int x[] = [11, 13, 4, 17];
 Your program should print
11 is found 1 time
13 is found 2 times
4 is found 1 time
17 is NOT found
*/
let a = [13, 11, 13, 4, 10, 9, 1];
let x = [11, 13, 4, 17];

let check = [];

for (let i = 0; i < a.length; i++) {
  if (x[1] == a[i]) {
    check.push(a[i]);
  }
}

if (check.length == 0) {
  console.log(x[1] + " is not found");
} else if (check.length == 1) {
  console.log(x[1] + " is found " + check.length + " time");
} else {
  console.log(x[1] + " is found " + check.length + " times");
}
