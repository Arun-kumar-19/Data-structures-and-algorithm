// 3)Program that checks whether the given character is alphanumeric or not.

let alphanum = "Arun ";
let regex = /^[0-9a-zA-Z]+$/;
if (alphanum.match(regex)) {
  console.log("The given character is an alphanumeric.");
} else {
  console.log("The given character is not an alphanumeric.");
}
