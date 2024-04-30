const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(path).toString().trim();

const numbers = input.split('-').map((s) =>
  s
    .split('+')
    .map((v) => +v)
    .reduce((acc, cur) => acc + cur, 0)
);

// 첫번째 원소에서 나머지 모든 원소를 빼준다.
let answer = 2 * numbers[0] - numbers.reduce((s, v) => s + v, 0);

console.log(answer);
