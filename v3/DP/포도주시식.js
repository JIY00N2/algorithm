const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input[0];
const arr = input.slice(1);

if (n === 1) {
  console.log(arr[n - 1]);
  return;
} else if (n === 2) {
  console.log(arr[n - 2] + arr[n - 1]);
  return;
}

const dp = Array(n).fill(0);
dp[1] = arr[0];
dp[2] = arr[0] + arr[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + arr[i - 2] + arr[i - 1],
    dp[i - 2] + arr[i - 1],
    dp[i - 1]
  );
}

console.log(dp[n]);
