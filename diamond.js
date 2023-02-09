let n = 4;
// Repeat n times
for (let i = 1; i <= n; i++) {
  //spaces + sequence of numbers
  console.log(getSpaces(n - i + 1) + getNumSequence(i));
}

//console.log( getSpaces(3) + getNumSequence(1));

//console.log( getSpaces(2) + getNumSequence(2));

//console.log( getSpaces(1) + getNumSequence(3));

function getSpaces(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + " ";
  }
  return str;
}

function getNumSequence(n) {
  let numseq_str = "";
  for (let i = 1; i <= n; i++) {
    numseq_str = numseq_str + i + " ";
  }
  return numseq_str;
}

function numseq_2(n) {
  let string = "";
  for (let i = n; i >= 1; i--) {
    string += i + " ";
  }
  return string;
}

for (let i = 3; i >= 1; i--) {
  console.log(getSpaces(n - i + 1) + numseq_2(i));
}
// console.log(getSpaces(2) + numseq_2(2));
// console.log(getSpaces(3) + numseq_2(1));

//Reverse half diamond
//Repeat 2 times
// spaces + sequence in reverse of numbers
