// 1106 호텔
const path = process.flatform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [c, len] = input[0];
const arr = input.slice(1);

// 배낭 문제임 있냐 없냐로 판단

const dp = Array(c + 100).fill(Infinity);
dp[0] = 0;

for (const [cost, people] of arr) {
  for (let i = people; i < dp.length; i++) {
    dp[i] = Math.min(dp[i - people] + cost, dp[i]);
  }
}

console.log(Math.min(...dp.slice(c)));
