// 2110
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, c] = input[0];
const arr = input
  .slice(1)
  .flat()
  .sort((a, b) => a - b);

let left = 0;
let right = arr.at(-1);
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let cnt = 1; // 공유기 수 이미 1개는 박음
  let prev = arr[0]; // 공유기 시작 위치
  for (const cur of arr) {
    // 집 - 시작 < 두 공유기 사이의 거리
    if (cur - prev < mid) {
      continue;
    }
    // 최대거리보다 같거나 크면
    // cnt 늘리고, 하나 더 박음
    prev = cur;
    cnt++;
  }
  if (cnt < c) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(right);
