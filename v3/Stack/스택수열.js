const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input[0];
const arr = input.slice(1);

const stack = [];
const answer = [];
let max = 0;

for (let i = 0; i < n; i++) {
  if (!stack.length) {
    for (let j = max + 1; j <= arr[i]; j++) {
      stack.push(j);
      answer.push('+');
    }
    max = Math.max(max, stack.at(-1));
    stack.pop();
    answer.push('-');
  } else {
    if (stack.at(-1) > arr[i]) {
      break;
    }
    if (arr[i] < max) {
      while (arr[i] <= stack.at(-1)) {
        stack.pop();
        answer.push('-');
      }
    } else {
      for (let j = max + 1; j <= arr[i]; j++) {
        stack.push(j);
        answer.push('+');
      }
      max = Math.max(max, stack.at(-1));
      stack.pop();
      answer.push('-');
    }
  }
}

console.log(stack.length ? 'NO' : answer.join('\n').trim());
