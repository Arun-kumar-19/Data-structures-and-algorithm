let n = 4;

function strair(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = i + " ";
    // console.log(str);
  }
  return str;
}

function detair(n) {
  let str = "";
  for (let i = n; i <= 1; i--) {
    str = i + " ";
    // console.log(str);
  }
  return str;
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
  console.log(out1);
}

for (let i = 1; i <= n; i++) {
  let out2 = space(n - i) + detair(n - i);
  console.log(out2);
}
