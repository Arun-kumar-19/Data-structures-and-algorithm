// let n = 3;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n - i; j++) {
//     str += "  ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// 2-6 1-3

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
