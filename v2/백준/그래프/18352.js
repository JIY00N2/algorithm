// 18352 특정 거리의 도시 찾기
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, m, k, x] = input[0];
const map = input.slice(1);
const graph = new Map();

for (let i = 1; i <= n; i++) {
  graph.set(i, []);
}

for (const [s, e] of map) {
  graph.get(s).push(e);
}

const temp = [];

function bfs(s) {
  const v = Array.from({ length: n + 1 }, () => 0);
  const dq = [s];
  v[s] = 1;
  while (dq.length !== 0) {
    const cur = dq.shift();
    if (v[cur] === k + 1) {
      temp.push(cur);
      continue;
    }
    for (const next of graph.get(cur)) {
      if (!v[next]) {
        dq.push(next);
        v[next] = v[cur] + 1;
      }
    }
  }
  return temp;
}

bfs(x);

if (temp.length) {
  console.log(temp.sort((a, b) => a - b).join('\n'));
} else {
  console.log(-1);
}
