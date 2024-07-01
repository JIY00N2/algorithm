const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (item) => {
  input.push(item.split(' ').map((v) => parseInt(v)));
});

function solution(n, map) {
  map.sort((a, b) => a[1] - b[1]);
  return map[0].join(' ');
}

rl.on('close', () => {
  const n = input[0];
  const map = input.slice(1);
  console.log(solution(n, map));
  process.exit();
});
