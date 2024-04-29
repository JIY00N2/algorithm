const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, m, start] = input[0];
const arr = input.slice(1);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = arr[i - 1];
  graph[a].push(b);
  graph[b].push(a);
}

graph.forEach((arr) => arr.sort((a, b) => a - b));

const dfsV = Array.from({ length: n + 1 }, () => false);
const dfsAnswer = [];
function dfs(s) {
  dfsV[s] = true;
  dfsAnswer.push(s);
  for (const next of graph[s]) {
    if (!dfsV[next]) {
      dfs(next);
    }
  }
}

dfs(start);

function bfs(s) {
  const v = Array.from({ length: n + 1 }, () => false);
  const answer = [s];
  const q = [s];
  v[s] = true;
  while (q.length) {
    const cur = q.shift();
    for (const next of graph[cur]) {
      if (!v[next]) {
        v[next] = true;
        answer.push(next);
        q.push(next);
      }
    }
  }
  return answer;
}

console.log(dfsAnswer.join(' '));
console.log(bfs(start).join(' '));
