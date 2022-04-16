const generateRandomArr = require('../../utils/generateRandomArr');

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    // 尚未排列的第一個元素
    const currElement = arr[i];
    // 已經排列好的陣列中最後元素的 index
    let j = i - 1;
    // 目標元素要小於已經排列好的陣列中最後的元素，才會進到此迴圈
    while (j >= 0 && currElement < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currElement;
  }
  return arr;
}

console.log(insertionSort(generateRandomArr(10)));
