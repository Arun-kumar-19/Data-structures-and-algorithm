// sort in ascending order

let asc = [3, 4, 2, 1, 5];
for (let i = 0; i < asc.length; i++) {
  for (let j = 0; j < asc.length - 1; j++) {
    let arr = asc[j];
    if (arr > asc[j + 1]) {
      asc[j] = asc[j + 1];
      asc[j + 1] = arr;
    }
  }
}
console.log(asc);

// sort in descending order
let desc = [3, 4, 2, 1, 5];
for (let i = 0; i < desc.length; i++) {
  for (let j = 0; j < desc.length - 1; j++) {
    let arr = desc[j];
    if (arr < desc[j + 1]) {
      desc[j] = desc[j + 1];
      desc[j + 1] = arr;
    }
  }
}
console.log(desc);

let sort = [2, 5, 4, 7, 3, 9, 1, 8, 6];
for (let i = 0; i < sort.length; i++) {
  for (let j = 0; j < sort.length - 1; j++) {
    let arr = sort[j];
    if (arr > sort[j + 1]) {
      sort[j] = sort[j + 1];
      sort[j + 1] = arr;
    }
  }
}
console.log(sort);
