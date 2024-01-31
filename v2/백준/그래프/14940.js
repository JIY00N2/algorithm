// 14940 쉬운 최단거리
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [col, row] = input[0]; // [세로, 가로]
const map = input.slice(1);
const v = Array.from({ length: col }, () => Array(row).fill(-1));
let [goalY, goalX] = [];
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
// 우좌하상

for (let i = 0; i < col; i++) {
  for (let j = 0; j < row; j++) {
    // 목표지점 찾기
    if (map[i][j] === 2) {
      [goalY, goalX] = [i, j];
    }
  }
}

function inRange(y, x) {
  return y >= 0 && y < col && x >= 0 && x < row;
}

function bfs(sy, sx) {
  const q = [[sy, sx]];
  v[sy][sx] = 0; // 방문처리
  while (q.length !== 0) {
    const [curY, curX] = q.shift();
    const cnt = v[curY][curX]; // cnt: 몇개를 지나 왔는지
    for (let i = 0; i < 4; i++) {
      // 4방향 탐색
      const ny = curY + dir[i][0]; // ny = nextY
      const nx = curX + dir[i][1];
      // 1. 격자 밖은 무시
      if (!inRange(ny, nx)) {
        continue;
      }
      // 2. 원래 배열이 0인곳은 갈 수 없는 곳이니 무시
      if (map[ny][nx] === 0) {
        continue;
      }
      // 3. 방문 한 곳 제외
      if (v[ny][nx] !== -1) {
        continue;
      }
      v[ny][nx] = cnt + 1;
      q.push([ny, nx]);
    }
  }
  return v;
}

const result = bfs(goalY, goalX);

for (let i = 0; i < col; i++) {
  for (let j = 0; j < row; j++) {
    if (map[i][j] === 0) {
      result[i][j] = 0;
    }
  }
  console.log(...result[i]);
}
