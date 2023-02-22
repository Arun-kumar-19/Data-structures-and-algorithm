/* print
      1 
     1 2 
    1 2 3 
   1 2 3 4 
*/
let n = 4;
let str = "";
for (let i = 1; i <= n; i++) {
  str += i + " ";
  let space = "";
  for (let j = i; j <= n; j++) {
    space += " ";
  }
  console.log(space + str);
}
