const generateRandomArr = require('../../utils/generateRandomArr');

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // 以上 3 行可以縮寫成 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort3(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i - 1; j--) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSortOpt(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let swapped = false
    for (let j = 0; j < (n - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSortOpt(generateRandomArr(10)));