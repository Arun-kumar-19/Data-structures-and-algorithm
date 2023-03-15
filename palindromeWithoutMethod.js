// palindrome without method

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

// Without method upodated

let str_1 = "arun";
let pal_1 = "";

for (let i = str_1.length - 1; i >= 0; i--) {
  pal_1 += str_1[i];
}

if (str_1 === pal_1) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}
