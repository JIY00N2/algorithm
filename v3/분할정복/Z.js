// 1074 Z
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let [n, row, col] = input;

let answer = 0;

while (n > 0) {
  // 1, 2, 3, 4 사분면
  n--;
  if (row < Math.pow(2, n) && col >= Math.pow(2, n)) {
    answer += 1 * Math.pow(4, n);
    col -= Math.pow(2, n);
  } else if (row < Math.pow(2, n) && col < Math.pow(2, n)) {
    answer += 0;
  } else if (row >= Math.pow(2, n) && col < Math.pow(2, n)) {
    answer += 2 * Math.pow(4, n);
    row -= Math.pow(2, n);
  } else {
    answer += 3 * Math.pow(4, n);
    row -= Math.pow(2, n);
    col -= Math.pow(2, n);
  }
}

console.log(answer);
