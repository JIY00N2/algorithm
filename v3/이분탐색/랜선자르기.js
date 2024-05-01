const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [k, n] = input[0];
const arr = input
  .slice(1)
  .flat()
  .sort((a, b) => a - b);

let left = 1;
let right = arr[arr.length - 1];

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let cnt = 0;
  for (let i = 0; i < k; i++) {
    cnt += Math.floor(arr[i] / mid);
  }
  if (cnt >= n) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
