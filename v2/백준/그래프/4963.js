// 4963 섬의 개수
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const dir = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

let len = 0; // 24
while (len < input.length - 1) {
  const [x, y] = input[len];
  const map = input.slice(len + 1, len + y + 1);
  const v = Array.from({ length: y }, () => Array(x).fill(false));
  len = len + y + 1;
  countedArea(x, y, map, v);
}

function bfs(sy, sx, y, x, map, v) {
  const q = [[sy, sx]];
  v[sy][sx] = true;
  while (q.length !== 0) {
    const [curY, curX] = q.shift();
    for (let i = 0; i < 8; i++) {
      const ny = curY + dir[i][0];
      const nx = curX + dir[i][1];
      if (nx < 0 || nx >= x || ny < 0 || ny >= y) {
        continue;
      }
      if (v[ny][nx]) {
        continue;
      }
      if (map[ny][nx] !== 1) {
        continue;
      }
      v[ny][nx] = true;
      q.push([ny, nx]);
    }
  }
}

function countedArea(x, y, map, v) {
  let cnt = 0;
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (!v[i][j] && map[i][j] === 1) {
        bfs(i, j, y, x, map, v);
        cnt++;
      }
    }
  }
  console.log(cnt);
}
