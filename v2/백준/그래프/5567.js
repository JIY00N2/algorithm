// 5567 결혼식
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const node = input[0];
const node_length = input[1];
const map = input.slice(2);
const graph = new Map();
let cnt = 0;

for (let i = 1; i <= node; i++) {
  graph.set(i, []);
}

for (const [s, e] of map) {
  graph.get(s).push(e);
  graph.get(e).push(s);
}

function bfs(s) {
  const q = [[s, 0]];
  const v = Array.from({ length: node_length + 1 }, () => false);
  v[s] = true;
  while (q.length !== 0) {
    const [cur, depth] = q.shift();
    const children = graph.get(cur);
    if (depth === 2) {
      break;
    }
    for (let i = 0; i < children.length; i++) {
      if (!v[children[i]]) {
        v[children[i]] = true;
        cnt++;
        q.push([children[i], depth + 1]);
      }
    }
  }
}

bfs(1);

console.log(cnt);
