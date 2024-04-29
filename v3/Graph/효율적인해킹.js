const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, m] = input[0];
const arr = input.slice(1);

const graph = Array.from({ length: n + 1 }, () => []);
for (const [s, e] of arr) {
  graph[e].push(s);
}

function dfs(s) {
  const v = Array.from({ length: n + 1 }, () => false);
  v[s] = true;
  const dq = [s];
  let cnt = 1;
  while (dq.length) {
    const cur = dq.pop();
    const child = graph[cur];
    for (let i = 0; i < child.length; i++) {
      if (!v[child[i]]) {
        v[child[i]] = true;
        cnt++;
        dq.push(child[i]);
      }
    }
  }
  return cnt;
}

const temp = [-1];

for (let i = 1; i <= n; i++) {
  temp.push(dfs(i));
}

let max = Math.max(...temp);

const answer = [];

for (let i = 0; i < n + 1; i++) {
  if (temp[i] === max) {
    answer.push(i);
  }
}

console.log(answer.join(' '));
