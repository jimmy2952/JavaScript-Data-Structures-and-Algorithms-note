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

function generateArr() {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    const random = Math.floor(Math.random() * 100 + 1);
    arr.push(random);
  }
  return arr;
}

const arr = generateArr();
console.time();
console.log(mergeSort(arr));
console.timeEnd();

console.time('merge sort pop');
const sortedArr = mergeSortPop(arr);
console.log(sortedArr.reverse());
console.timeEnd('merge sort pop');