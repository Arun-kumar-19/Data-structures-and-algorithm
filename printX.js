let n = 4;

function strair(n) {
  let str1 = "";
  for (let i = 1; i <= n; i++) {
    str1 = i;
    // console.log(str);
  }
  return str1;
}

function detair(n) {
  for (let i = n; i >= 1; i--) {
    let str2 = "";
    str2 = i + " ";
    // console.log(str);
    return str2;
  }
}

function space(n) {
  let space = "";
  for (let i = 1; i <= n; i++) {
    space += " ";
    // console.log(space);
  }
  return space;
}

for (let i = 1; i <= n; i++) {
  let out1 = space(i) + strair(i);
  let out2 = space(n + i + (n - i)) + strair(i);
  console.log(out1 + out2);
}

// for (let j = n - 1; j >= 1; j--) {
//   let out2 = space(j) + detair(j);
//   console.log(out2);
// }
