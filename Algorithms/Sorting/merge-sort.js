const generateRandomArr = require('../../utils/generateRandomArr');

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

function mergeSortPop(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2); 
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return mergePop(mergeSort(left), mergeSort(right));
}

function mergePop(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[left.length - 1] > right[right.length - 1]) {
      results.push(left.pop());
    } else {
      results.push(right.pop());
    }
  }
  return [...results, ...right, ...left];
}

console.time();
console.log(mergeSort(generateRandomArr(10)));
console.timeEnd();

console.time('merge sort pop');
const sortedArr = mergeSortPop(generateRandomArr(10));
console.log(sortedArr.reverse());
console.timeEnd('merge sort pop');