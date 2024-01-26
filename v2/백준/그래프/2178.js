// 2178 미로 탐색
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [col, row] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((v) => v.split('').map((v) => Number(v)));
const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]; // 좌우상하
const [goalY, goalX] = [col - 1, row - 1]; // row=열=세로, col=행=가로

function bfs() {
  const q = [[0, 0, 1]];
  while (q.length !== 0) {
    const [curY, curX, move] = q.shift();
    if (goalX === curX && goalY === curY) {
      return move;
    }
    for (let i = 0; i < 4; i++) {
      const nx = curX + dir[i][0];
      const ny = curY + dir[i][1];
      if (ny >= 0 && ny < col && nx >= 0 && nx < row && graph[ny][nx]) {
        graph[ny][nx] = 0; // 방문 처리
        q.push([ny, nx, move + 1]); // 다음 위치넣고 한 칸 이동
      }
    }
  }
}

console.log(bfs());
