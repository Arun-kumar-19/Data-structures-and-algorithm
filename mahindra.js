/* Problem 1 
1           1
1 2       2 1
1 2 3   3 2 1
1 2 3 4 3 2 1
*/

let n = 8;

function stair(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i + " ";
    // console.log(str);
  }
  return str;
}

function detair(n) {
  let num_str = "";
  for (let j = n; j >= 1; j--) {
    num_str += j + " ";
    // console.log(num_str);
  }
  return num_str;
}

function spaces_thing(n) {
  let string = "";
  for (let l = 1; l <= n; l++) {
    string += "  ";
  }
  // console.log(string);
  return string;
}

for (let i = 1; i <= n; i++) {
  // console.log(stair(i) + spaces_thing(2 * (n - i) + 1) + detair(i));
  console.log(
    stair(i) + spaces_thing(n - i) + spaces_thing(n - i + 1) + detair(i)
  );
}

// this is for 1-10 9- 1 numbers
let str_1 = "";
for (let i = 1; i <= n + 1; i++) {
  str_1 += i + " ";
}

let str_2 = "";
for (let j = n; j >= 1; j--) {
  str_2 += j + " ";
}
console.log(str_1 + str_2);
