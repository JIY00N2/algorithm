const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [node_length, line, s] = input[0];
const array = input.slice(1);
const graph = new Map();

for (let i = 1; i <= node_length; i++) {
  graph.set(i, []);
}

for (const [s, e] of array) {
  graph.get(s).push(e);
  graph.get(e).push(s);
}

for (const value of graph.values()) {
  value.sort((a, b) => a - b);
}

function dfs(s, g) {
  const v = Array.from({ length: node_length + 1 }, () => false);
  let dq = [];
  const node = [];
  dq.push(s);
  while (dq.length !== 0) {
    const cur = dq.shift();
    if (v[cur]) {
      continue;
    }
    v[cur] = true;
    node.push(cur);
    dq = [...g.get(cur), ...dq];
  }
  return node;
}

function bfs(s, g) {
  const v = Array.from({ length: node_length + 1 }, () => false);
  let q = [];
  const node = [];
  q.push(s);
  while (q.length !== 0) {
    const cur = q.shift();
    if (v[cur]) {
      continue;
    }
    v[cur] = true;
    node.push(cur);
    q = [...q, ...g.get(cur)];
  }
  return node;
}

console.log(dfs(s, graph).join(' '));
console.log(bfs(s, graph).join(' '));
