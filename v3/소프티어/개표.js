const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (item) => {
  input.push(+item);
});

function solution(n, arr) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    const quotient = arr[i] / 5;
    const rest = arr[i] % 5;
    if (quotient > 0) {
      answer += '++++ '.repeat(quotient);
    }
    answer += '|'.repeat(rest);
    answer += '\n';
  }
  return answer;
}

rl.on('close', () => {
  const n = input[0];
  const arr = input.slice(1);
  console.log(solution(n, arr));
  process.exit();
});
