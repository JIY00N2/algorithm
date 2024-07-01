const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (item) => {
  input.push(item.split(' ').map((v) => +v));
});

function solution(n, k, arr, term) {
  const dp = Array(n).fill(0);
  dp[0] = arr[0];
  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] + arr[i]; // 누적합
  }
  let answer = 0;
  // 누적합, 구간합 => 큰 누적합 - 작은 누적합 + 본인
  // 10, 50, 20,70, 100
  // [10, 60, 80, 150, 250]
  // 3, 4, cnt = 2 20 + 70  / 2
  // dp[]
  for (let i = 0; i < k; i++) {
    const [s, e] = term[i];
    let cnt = e - s + 1;
    let diff = dp[e - 1] - dp[s - 1] + arr[s - 1]; // 구간합
    answer = (diff / cnt).toFixed(2);
    console.log(answer);
  }
  return answer;
}

rl.on('close', () => {
  const [n, k] = input[0];
  const arr = input.slice(1)[0];
  const term = input.slice(2);
  solution(n, k, arr, term);
  process.exit();
});
