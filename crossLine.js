//  staircase problem
let n = 4;
function spaces(n) {
  let space = "  ";
  let str = "";
  for (let i = 0; i <= n - 1; i++) {
    str += space;
  }
  return str;
}

for (let i = 1; i <= n; i++) {
  console.log(spaces(i - 1) + i);
}

for (let j = n - 1; j >= 1; j--) {
  console.log(spaces(n - j + (n - 1)) + j);
}
