let ar = [20, 12, 99, 40, 22];
let x = 52;
let output = [];

for (let i = 0; i < ar.length; i++) {
  for (let j = i + 1; j < ar.length; j++) {
    if (ar[i] + ar[j] === x) {
      output.push(ar[i], ar[j]);
    }
  }
}
console.log(output);
