// let str = "learning";
// let arr = [];
// for (let i = 0; i < str.length; i++) {}

let input = "";
const mapping = [
  " ",
  " ",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pars",
  "tuv",
  "wxyz",
];
let one = "";
let two = "";
console.log(input[0]);
for (let i = 0; i < mapping.length; i++) {
  if (input[0] == i) {
    one += mapping[i];
  }
  if (input[1] == i) {
    two += mapping[i];
  }
}
let arr1 = [];
let arr2 = [];
for (let j = 0; j < one.length; j++) {
  arr1.push(one[j]);
}
for (let k = 0; k < two.length; k++) {
  arr2.push(two[k]);
}
let f = [];
for (let h = 0; h < arr1.length; h++) {
  const ele = arr1[h];
  for (let u = 0; u < arr2.length; u++) {
    let jo = ele + arr2[u];
    f.push(jo);
  }
}
console.log(f);
