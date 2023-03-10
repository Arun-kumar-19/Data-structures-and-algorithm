let a = [3, 4, 2, 1, 5];
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length - 1; j++) {
    let arr = a[j];
    if (arr > a[j + 1]) {
      a[j] = a[j + 1];
      a[j + 1] = arr;
    }
  }
}
console.log(a);
