const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

let [n, m] = input[0];
n = +n;
m = +m;
const arr = input.slice(1).flat();
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function valid(x, y) {
  return x >= 0 && x < n && y >= 0 && y < m;
}

function bfs(sx, sy) {
  const v = Array.from({ length: n }, () => Array(m).fill(false));
  v[sx][sy] = true;
  const q = [[sx, sy, 1]];

  while (q.length) {
    const [curX, curY, move] = q.shift();
    if (curX === n - 1 && curY === m - 1) {
      console.log(move);
      return;
    }
    for (let i = 0; i < dir.length; i++) {
      const nx = curX + dir[i][0];
      const ny = curY + dir[i][1];
      if (valid(nx, ny) && !v[nx][ny] && arr[nx][ny] === '1') {
        v[nx][ny] = true;
        q.push([nx, ny, move + 1]);
      }
    }
  }
}

bfs(0, 0);
