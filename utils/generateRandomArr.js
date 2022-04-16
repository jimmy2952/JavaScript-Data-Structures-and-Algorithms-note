function generateRandomArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * n + 1);
    arr.push(random);
  }
  return arr;
}

module.exports = generateRandomArr;