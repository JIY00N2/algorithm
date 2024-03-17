// 2512
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const n = input[0][0];
const arr = input[1];
const answer = input[2][0];
let result = 0;

let left = 0;
let right = 100001;

const arrSum = arr.reduce((acc, cur) => acc + cur);

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let sum = 0;
  arr.forEach((n) => {
    if (n <= mid) {
      sum += n;
    } else {
      sum += mid;
    }
    return sum;
  });
  if (sum > answer) {
    right = mid - 1;
  }
  if (sum <= answer) {
    left = mid + 1;
  }
}

if (arrSum <= answer) {
  console.log(Math.max(...arr));
} else {
  console.log(right);
}
