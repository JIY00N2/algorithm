const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const n = +input[0][0];
const arr = input.slice(1).map((v) => v[0].split('').map((v) => +v));

const stack = [];

function recursion(n, x, y) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += arr[i + y][j + x];
    }
  }

  if (total === 0) stack.push(0);
  else if (total === n * n) stack.push(1);
  else {
    n /= 2;
    stack.push('(');
    recursion(n, x, y);
    recursion(n, x + n, y);
    recursion(n, x, y + n);
    recursion(n, x + n, y + n);
    stack.push(')');
  }
}

recursion(n, 0, 0);

console.log(stack.join(''));
