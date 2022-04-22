const generateRandomArr = require('../../utils/generateRandomArr');

// method 1
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2); 
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

// method 2
function mergeSort2(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    // 將陣列切半
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle, arr.length);
    // 合併排序好的兩半陣列
    return merge2(mergeSort2(leftArr), mergeSort2(rightArr));
  }
}

function merge2(leftArr, rightArr) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] > rightArr[rightIndex]) {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    } else {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    }
  }

  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return result;
}

// method 3
function mergeSort3(arr, start = 0, end = arr.length - 1) {
  if (start === end) {
    return arr;
  } else {
    const middle = Math.floor((start + end) / 2);
    // 排序左半部
    mergeSort3(arr, start, middle);
    // 排序右半部
    mergeSort3(arr, middle + 1, end);
    // 將兩半部排序完的陣列合併
    merge3(arr, start, middle, end);
    return arr;
  }
}

function merge3(arr, start, middle, end) {
  const result = [];
  let leftIndex = start;
  let rightIndex = middle + 1;

  while (leftIndex <= middle && rightIndex <= end) {
    if (arr[leftIndex] < arr[rightIndex]) {
      result.push(arr[leftIndex]);
      leftIndex++;
    } else {
      result.push(arr[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex <= middle) {
    result.push(arr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex <= end) {
    result.push(arr[rightIndex]);
    rightIndex++;
  }

  for (let i = start; i <= end; i++) {
    arr[i] = result[i - start];
  }
}

// method 4
function mergeSort4(arr) {
  const n = arr.length;
  for (let i = 1; i <= n; i *= 2) {
    for (let j = 0; j + i < n; j += 2 * i) {
      const start = j;
      const end = Math.min(j + i * 2 - 1, n - 1);
      const mid = j + i - 1;
      merge4(arr, start, mid, end);
    }
  }
  return arr;
}

function merge4(arr, start, middle, end) {
  const result = [];
  let leftIndex = start;
  let rightIndex = middle + 1;

  while (leftIndex <= middle && rightIndex <= end) {
    if (arr[leftIndex] < arr[rightIndex]) {
      result.push(arr[leftIndex]);
      leftIndex++;
    } else {
      result.push(arr[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex <= middle) {
    result.push(arr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex <= end) {
    result.push(arr[rightIndex]);
    rightIndex++;
  }

  for (let i = start; i <= end; i++) {
    arr[i] = result[i - start];
  }
}

// console.time();
// console.log(mergeSort(generateRandomArr(10)));
// console.timeEnd();

// console.time('merge sort pop');
// const sortedArr = mergeSortPop(generateRandomArr(10));
// console.log(sortedArr.reverse());
// console.timeEnd('merge sort pop');

console.log(mergeSort2(generateRandomArr(10)));