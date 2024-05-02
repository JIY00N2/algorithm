const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const n = input[0][0];
const arr = input.slice(1)[0];
const dp = Array(n).fill(-1000);
dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
}

console.log(Math.max(...dp));
