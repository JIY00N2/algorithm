// 11724 연결 요소의 개수
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, m] = input[0];
const map = input.slice(1);
const graph = new Map();

for (let i = 1; i <= n; i++) {
  graph.set(i, []);
}

for (const [u, v] of map) {
  graph.get(u).push(v);
  graph.get(v).push(u);
}

const v = Array.from({ length: n + 1 }, () => false);

function dfs(s) {
  const q = [s];
  v[s] = true;
  while (q.length !== 0) {
    const cur = q.pop();
    const children = graph.get(cur);
    for (let i = 0; i < children.length; i++) {
      if (!v[children[i]]) {
        v[children[i]] = true;
        q.push(children[i]);
      }
    }
  }
}

let answer = 0;
for (let i = 1; i <= n; i++) {
  if (!v[i]) {
    dfs(i);
    answer++;
  }
}

console.log(answer);
