const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const n = +input[0][0];
let s = input[1][0].split(''); // [a, b, +, c, - , b, *]
const arr = [];
const temp = input.slice(2).map((v) => +v);
const map = new Map();

for (let i = 0; i < n; i++) {
  map.set(String.fromCharCode(i + 65), temp[i]);
}

for (let i = 0; i < s.length; i++) {
  if (map.has(s[i])) {
    arr.push(map.get(s[i]));
  } else {
    arr.push(s[i]);
  }
}

function calculate(first, second, op) {
  if (op === '+') {
    return first + second;
  } else if (op === '-') {
    return first - second;
  } else if (op === '*') {
    return first * second;
  } else {
    return first / second;
  }
}

const stack = [];
for (let i = 0; i < arr.length; i++) {
  if (!stack.length) {
    stack.push(arr[i]);
  } else {
    if (!Number.isInteger(arr[i])) {
      if (stack.length === 1) {
        break;
      }
      const second = stack.pop();
      const first = stack.pop();
      const op = arr[i];
      const result = calculate(first, second, op);
      stack.push(result);
    } else {
      stack.push(arr[i]);
    }
  }
}

console.log(stack[0].toFixed(2));
