const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, repeat] = input[0];
const arr = input.slice(1);

const blocks = new Array(n + 2).fill(0);

// 누적합을 이용한다.
for (let i = 0; i < repeat; i++) {
  const [a, b] = arr[i];
  blocks[a]++;
  blocks[b + 1]--;
}

for (let i = 1; i <= n + 1; i++) {
  blocks[i] += blocks[i - 1];
}

blocks.sort((a, b) => a - b);

console.log(blocks[Math.floor(blocks.length / 2 + 1)]);
