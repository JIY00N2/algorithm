const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, k] = input[0]; // n: 돌 개수, k: 최대 힘
const arr = input[1];

const dp = Array(n + 1).fill(false);

const dfs = (index) => {
  if (index === n) {
    dp[index] = true;
    return;
  }

  if (dp[index]) {
    return;
  }

  dp[index] = true;
  for (let i = index + 1; i <= n; i++) {
    if ((i - index) * (1 + Math.abs(arr[index - 1] - arr[i - 1])) <= k) {
      dfs(i);
    }
  }
};

dfs(1);

console.log(dp[n] ? 'YES' : 'NO');
