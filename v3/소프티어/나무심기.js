const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout,
});

let input = [];

rl.on('line', (item) => {
  input.push(item.split(' ').map((v) => +v));
});

function solution(n, arr) {
  arr.sort((a, b) => b - a);
  let answer = Math.max(
    arr[0] * arr[1],
    arr[arr.length - 1] * arr[arr.length - 2]
  );
  return answer;
}

rl.on('close', () => {
  const n = input[0][0];
  const arr = input.slice(1)[0];
  console.log(solution(n, arr));
  process.exit();
});
