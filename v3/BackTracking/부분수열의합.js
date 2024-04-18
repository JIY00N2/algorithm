// 1182 부분수열의 합
const path = process.flatform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, target] = input[0];
let arr = input.slice(1)[0];
let cnt = 0;

function backtracking(start, cur) {
  if (cur.reduce((acc, cur) => acc + cur, 0) === target && cur.length) {
    cnt++;
  }

  for (let i = start; i < n; i++) {
    cur.push(arr[i]);
    backtracking(i + 1, cur);
    cur.pop();
  }
}

backtracking(0, []);

console.log(cnt);
