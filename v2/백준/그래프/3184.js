// 3184 양
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const [y, x] = input[0];
const numY = Number(y);
const numX = Number(x);

const map = input.slice(1).flat();
const v = Array.from({ length: numY }, () => new Array(numX).fill(false));

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let totalSheep = 0;
let totalWolf = 0;

function bfs(sy, sx) {
  const q = [[sy, sx]];
  v[sy][sx] = true;
  let sheep = 0;
  let wolf = 0;
  let canEscape = false;
  while (q.length !== 0) {
    const [curY, curX] = q.shift();
    if (curY === 0 || curX === 0 || curY === numY - 1 || curX === numX - 1) {
      canEscape = true;
    }
    if (map[curY][curX] === 'o') {
      sheep++;
    }
    if (map[curY][curX] === 'v') {
      wolf++;
    }
    for (let i = 0; i < 4; i++) {
      const ny = curY + dir[i][0];
      const nx = curX + dir[i][1];
      if (nx < 0 || nx >= numX || ny < 0 || ny >= numY) {
        continue;
      }
      if (v[ny][nx]) {
        continue;
      }
      if (map[ny][nx] === '#') {
        continue;
      }
      v[ny][nx] = true;
      q.push([ny, nx]);
    }
  }
  if (canEscape) {
    return;
  }
  if (sheep > wolf) {
    totalSheep += sheep;
  } else {
    totalWolf += wolf;
  }
}

function countedArea() {
  for (let i = 0; i < numY; i++) {
    for (let j = 0; j < numX; j++) {
      if (!v[i][j] && map[i][j] !== '#') {
        bfs(i, j);
      }
    }
  }
  console.log(totalSheep, totalWolf);
}

countedArea();
