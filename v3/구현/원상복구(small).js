const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, k] = input[0]; // n: 카드수, k: 섞은수
let s = input[1]; // 최종 결과
const d = input[2]; // 섞는 방법
let temp = Array(n).fill(null);

for (let i = 0; i < k; i++) {
  for (let j = 0; j < n; j++) {
    temp[d[j] - 1] = s[j];
  }
  s = [...temp];
}

console.log(s.join(' '));
