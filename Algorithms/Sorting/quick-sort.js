const generateRandomArr = require('../../utils/generateRandomArr');

const arr = [3, 7, 1, -4, 5, 3, 0];

function partition(arr, start, end) {
  const pivot = arr[end];
  let splitIndex = start - 1;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      splitIndex++;
      const temp = arr[i];
      arr[i] = arr[splitIndex];
      arr[splitIndex] = temp;
    }
  }
  const temp = arr[splitIndex + 1];
  arr[splitIndex + 1] = arr[end];
  arr[end] = temp;

  return splitIndex + 1;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

console.log(quickSort(generateRandomArr(10)));