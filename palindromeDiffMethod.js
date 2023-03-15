let str = "malayalam";

let check = false;
for (let i = 0; i < (str.length + 1) / 2; i++) {
  if (str[i] === str[str.length - 1 - i]) {
    check = true;
  } else {
    return;
  }
}

if (check === true) {
  console.log("It is palindrome.");
} else {
  console.log("Not a palindrome");
}
