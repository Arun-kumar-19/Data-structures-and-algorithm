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
