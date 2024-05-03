const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const n = input[0][0];
const arr = input.slice(1);
for (let i = 0; i < n * 2; i = i + 2) {
  const [n, m] = arr[i]; // 6 0
  const q = arr[i + 1]; // 1 1 9 1 1 1
  const temp = [];
  const stack = [];
  for (let j = 0; j < q.length; j++) {
    temp.push([j, q[j]]);
  }
  let max = Math.max(...q);
  while (temp.length) {
    if (temp[0][1] < max) {
      temp.push(temp.shift());
    } else {
      const t = temp.shift();
      stack.push(t);
      max = Math.max(...temp.map((v) => v[1]));
    }
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack[i][0] === m) {
      console.log(i + 1);
    }
  }
}
