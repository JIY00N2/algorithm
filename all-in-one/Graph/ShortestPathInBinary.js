// 최단거리 -> bfs
function shortestPathBinaryMatrix(grid) {
  let shortestPathLen = -1;
  const row = grid.length;
  const col = grid[0].length;
  const dir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  if (grid[0][0] === 1 || grid[row - 1][col - 1] === 1) {
    return shortestPathLen;
  }

  function inRange(x, y) {
    return x >= 0 && y >= 0 && x < row && y < col;
  }

  function bfs(sx, sy) {
    const visited = Array.from({ length: row }, () => Array(col).fill(false));
    const q = [[sx, sy, 1]];
    visited[sx][sy] = true;
    while (q.length) {
      const [curX, curY, distance] = q.shift();

      if (curX === row - 1 && curY === col - 1) {
        shortestPathLen = distance;
        return;
      }

      dir.forEach((d) => {
        const nx = curX + d[0];
        const ny = curY + d[1];

        if (inRange(nx, ny)) {
          if (grid[nx][ny] === 0 && !visited[nx][ny]) {
            visited[nx][ny] = true;
            q.push([nx, ny, distance + 1]);
          }
        }
      });
    }
  }

  bfs(0, 0);

  return shortestPathLen;
}
