/* Consecutive Number Diamond
   1
  1 2
 1 2 3
1 2 3 4
 1 2 3
  1 2
   1
*/
let n = 4;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = n - i; j <= n - i; j++) {
    str += " ";
  }
  for (let k = i; k <= i; k++) {
    str += k + " ";
  }
  console.log(str);
}
