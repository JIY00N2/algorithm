// 암시적 bfs
function shortestPathBinaryMatrix(grid) {
  let shortest = -1;
  const n = grid.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const dir = [
    [-1, -1],
    [-1, 1],
    [-1, 0],
    [1, -1],
    [1, 1],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return shortest;
  }

  function inRange(x, y) {
    return x >= 0 && y >= 0 && x < n && y < n;
  }

  function bfs(sx, sy) {
    const q = [[sx, sy, 1]];
    visited[sx][sy] = true;
    while (q.length) {
      const [curX, curY, move] = q.shift();
      if (curX === n - 1 && curY === n - 1) {
        return (shortest = move);
      }
      dir.forEach((d) => {
        const nx = curX + d[0];
        const ny = curY + d[1];
        if (inRange(nx, ny)) {
          if (grid[nx][ny] === 0 && !visited[nx][ny]) {
            q.push([nx, ny, move + 1]);
            visited[nx][ny] = true;
          }
        }
      });
    }
  }

  bfs(0, 0);

  return shortest;
}
