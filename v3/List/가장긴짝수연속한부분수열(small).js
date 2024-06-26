const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, k] = input[0]; // n: 길이, k: 삭제 최대 횟수
const arr = input[1];

let left = 0;
let right = 0;
let odd = 0;
let even = 0;

// 첫번째 원소 홀수, 판단
if (arr[0] % 2 === 0) even++;
else odd++;

let answer = even;

while (left <= right) {
  if (odd > k) {
    if (arr[left] % 2 === 0) even--;
    else odd--;
    left++;
  } else {
    right++;
    if (right >= n) break;
    if (arr[right] % 2 === 0) even++;
    else odd++;
    answer = Math.max(answer, even);
  }
}

console.log(answer);
