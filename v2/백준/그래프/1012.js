const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const t = input[0];
const array = input.slice(1);

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let idx = 0;
for (let i = 0; i < t; i++) {
  const [m, n, x] = array[idx];
  const map = array.slice(idx + 1, idx + x + 1);
  idx = idx + x + 1;
  let graph = Array.from({ length: m }, () => Array(n).fill(0));
  let v = Array.from({ length: m }, () => Array(n).fill(false));
  for (let k = 0; k < x; k++) {
    const [y, x] = map[k];
    graph[y][x] = 1;
  }
  countedArea(m, n, v, graph);
  // for (let i = 0; i < m; i++) {
  //   console.log(...graph[i]);
  // }
}

function bfs(sy, sx, v, g, m, n) {
  const q = [[sy, sx]];
  v[sy][sx] = true;
  while (q.length !== 0) {
    const [curY, curX] = q.shift();
    for (let i = 0; i < 4; i++) {
      const ny = curY + dir[i][0];
      const nx = curX + dir[i][1];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }
      if (g[ny][nx] === 0) {
        continue;
      }
      if (v[ny][nx]) {
        continue;
      }
      v[ny][nx] = true;
      q.push([ny, nx]);
    }
  }
}

function countedArea(m, n, v, graph) {
  let cnt = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1 && !v[i][j]) {
        bfs(i, j, v, graph, m, n);
        cnt++;
      }
    }
  }
  console.log(cnt);
}
