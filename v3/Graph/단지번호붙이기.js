const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input.shift();
const arr = input.map((a) => a.split('').map((v) => +v));

let temp = [];

const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const isValid = (x, y) => {
  return x >= 0 && y >= 0 && x < n && y < n;
};

const bfs = (start) => {
  const q = [start];
  let cnt = 0;

  while (q.length) {
    const [curX, curY] = q.shift();
    cnt++;

    for (let i = 0; i < dir.length; i++) {
      const nx = curX + dir[i][0];
      const ny = curY + dir[i][1];

      if (isValid(nx, ny) && arr[nx][ny]) {
        arr[nx][ny] = 0;
        q.push([nx, ny]);
      }
    }
  }
  return cnt;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j]) {
      arr[i][j] = 0;
      temp.push(bfs([i, j]));
    }
  }
}

console.log(temp.length);
console.log(temp.sort((a, b) => a - b).join('\n'));
