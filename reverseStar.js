// print reverse star
// * * * * *
// * *   * *
// *       *

let n = 2;
function detair(n) {
  let str = "";
  for (let i = n; i >= 1; i--) {
    str += "*" + " ";
  }
  return str;
}

function spaces(n) {
  let spc = "";
  for (let i = 1; i <= n; i++) {
    spc += "  ";
  }
  return spc;
}

let str = "";
for (let j = 1; j <= 5; j++) {
  str += "* ";
}
console.log(str);

for (let i = n; i >= 1; i--) {
  console.log(detair(i) + spaces(2 * (n - i) + 1) + detair(i));
}
