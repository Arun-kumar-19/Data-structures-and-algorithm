//  print one by one
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const n = 5;
let number = "";
for (let i = 1; i <= n; i++) {
  number = number + i + " ";
  console.log(number);
}

console.log("1" + "\n" + "2" + "\n" + "3" + "\n" + "4");
