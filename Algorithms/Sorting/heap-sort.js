const generateRandomArr = require('../../utils/generateRandomArr');

function buildMaxHeap(arr) {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(arr, i);
  }
}

function maxHeapify(arr, i) {
  let largest;
  const l = i * 2 + 1;
  const r = i * 2 + 2;
  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }
  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(arr, largest);
  }
}

function heapSort(arr) {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize -= 1;
    maxHeapify(arr, 0);
  }

  return arr;
}

console.log(heapSort(generateRandomArr(10)));
