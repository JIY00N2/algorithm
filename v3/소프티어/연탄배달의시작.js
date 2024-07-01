const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (item) => {
  input.push(item.split(' ').map((v) => parseInt(v)));
});

function solution(n, arr) {
  let di = 1000001;
  let cnt = 0;
  for (let i = 1; i < n; i++) {
    di = Math.min(arr[i] - arr[i - 1], di);
  }
  for (let i = 1; i < n; i++) {
    if (di === arr[i] - arr[i - 1]) {
      cnt++;
    }
  }
  return cnt;
}

rl.on('close', () => {
  const n = input[0][0];
  const arr = input.slice(1)[0];
  console.log(solution(n, arr));
  process.exit();
});
