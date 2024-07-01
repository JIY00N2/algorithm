const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const n = input[0][0];
const sheet = input.slice(1)[0];
const q = input[2][0];
const arr = input.slice(3).map((v) => v.map((n) => n - 1));

const dp = Array(n).fill(0);

for (let i = 0; i < n - 1; i++) {
  if (sheet[i] > sheet[i + 1]) {
    dp[i + 1] = dp[i] + 1;
  } else {
    dp[i + 1] = dp[i];
  }
}

const results = [];
for (let i = 0; i < q; i++) {
  const [s, e] = arr[i];
  results.push(dp[e] - dp[s]);
}

console.log(results.join('\n'));
