// 10)Program that accept a string from the user and display
// the same after removing vowels from it

let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let string = "";

let result = "I have to do this";

for (let i = 0; i < result.length; i++) {
  if (!vowel.includes(result[i])) {
    string += result[i];
  }
}
console.log(string);
