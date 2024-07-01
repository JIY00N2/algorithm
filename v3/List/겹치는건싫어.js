const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, k] = input[0];
const arr = input.slice(1)[0];

// let left = 0;
// let right = 0;
// let answer = 0;
// const map = new Map();

// while (left <= right && right < n) {
//   while (map.get(arr[right]) === k) {
//     map.set(arr[left], map.get(arr[left]) - 1);
//     left++;
//   }
//   answer = Math.max(answer, right - left + 1);
//   map.set(arr[right], (map.get(arr[right]) ?? 0) + 1);
//   right++;
// }

// console.log(answer);

let left = 0;
let right = 0;
let answer = 0;
const obj = {};

while (left <= right && right < n) {
  while (obj[arr[right]] === k) {
    obj[arr[left]]--;
    left++;
  }
  answer = Math.max(answer, right - left + 1);
  obj[arr[right]] = (obj[arr[right]] ?? 0) + 1;
  right++;
}

console.log(answer);
