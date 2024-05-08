const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const n = input[0][0];
const arr = input.slice(1).sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let t = 0;
let answer = 0;
arr.forEach((time) => {
  if (time[0] >= t) {
    answer++;
    t = time[1];
  }
});

console.log(answer);
