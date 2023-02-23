// 6)Write a Program to check palindrome or not
let ex = "12121";

let output = ex.toLowerCase().replace(/[^A-Za-z0–9]/g, "");

let palindrome = output.split("").reverse().join("");

if (output === palindrome) {
  console.log("It is a palindrome.");
} else {
  console.log("It is not a palindrome.");
}
