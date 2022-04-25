const arr = [2, 5, 7, 9, 1, 3, 4];

function linearSearch(arr, target) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// function linearSearch2(arr, target) {
//   let i = arr.length - 1;
//   while (i >= 0 && arr[i] !== target) {
//     i--;
//   }
//   return i;
// }

console.log(linearSearch(arr, 0));