const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const n = input[0][0];
const arr = input.slice(1);

const dp = Array.from({ length: n }, () => Array(n).fill(BigInt(0)));
dp[0][0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dp[i][j] === 0 || (i === n - 1 && j === n - 1)) {
      continue;
    }
    const jump = arr[i][j];
    const right = j + jump;
    const down = i + jump;
    if (right < n) {
      dp[i][right] += BigInt(dp[i][j]);
    }
    if (down < n) {
      dp[down][j] += BigInt(dp[i][j]);
    }
  }
}

console.log(dp[n - 1][n - 1].toString());
