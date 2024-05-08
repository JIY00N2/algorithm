const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let n = input[0];
const k = n;
let cnt = n;
const targetNumber = input[1];
const g = Array.from({ length: k }, () => Array(k).fill(0));
let lastIndex = Math.floor(k / 2);
let start = n * n;
let j = 0;

while (cnt >= 1) {
  if (cnt === 1) {
    g[lastIndex][lastIndex] = 1;
  }
  for (let i = j; i < n - 1; i++) {
    g[i][j] = start;
    start--;
  }
  for (let i = j; i < n - 1; i++) {
    g[n - 1][i] = start;
    start--;
  }
  for (let i = n - 1; i > j; i--) {
    g[i][n - 1] = start;
    start--;
  }
  for (let i = n - 1; i > j; i--) {
    g[j][i] = start;
    start--;
  }
  j++;
  n--;
  cnt -= 2;
}

let str = '';
for (let x = 0; x < k; x++) {
  for (let y = 0; y < k; y++) {
    str += g[x][y];
    str += ' ';
  }
  str += '\n';
}

console.log(str.trim());

for (let x = 0; x < k; x++) {
  for (let y = 0; y < k; y++) {
    if (g[x][y] === targetNumber) {
      console.log(x + 1, y + 1);
    }
  }
}
