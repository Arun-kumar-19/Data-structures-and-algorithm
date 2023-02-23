// 9)Program to slice substrings using for loop

let arr = "apple";

let str = "";
for (let i = 0; i < arr.length; i++) {
  str += arr[i];
  console.log(str);
}

let str2 = "";
for (let j = 1; j <= 4; j++) {
  str2 += arr[j];
  console.log(str2);
}
