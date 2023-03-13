// 6)Write a Program to check palindrome or not

// with methods

let ex = "Level";

let output = ex.toLowerCase();

let palindrome = output.split("").reverse().join("");

if (output === palindrome) {
  console.log("It is a palindrome.");
} else {
  console.log("It is not a palindrome.");
}

// without method

let str = "malayalam";
let pal = "";

let arr = [];

for (let i = str.length - 1; i >= 0; i--) {
  arr.push(str[i]);
  pal += arr[str.length - 1 - i];
}

if (str === pal) {
  console.log("It's a palindrome");
} else {
  console.log("It's not a palindrome");
}
