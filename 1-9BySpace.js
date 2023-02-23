// print
// 1
// 234
// 56789 for n=3

let n = 3;
let count = 1;
let str = "";
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    str += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    str += count;
    count++;
  }
  str += "\n";
}
console.log(str);
