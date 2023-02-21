// 4)Program that check whether a given character is an alphabet or not.

let char = "Arun";
let regex = /^[A-Za-z]*$/;
if (char.match(regex)) {
  console.log("The given character is an alphabet.");
} else {
  console.log("The given character is not an alphabet.");
}
