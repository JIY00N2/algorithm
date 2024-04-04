// 암시적 bfs
function numIslands(grid) {
  let cnt = 0;
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function inRange(x, y) {
    return x >= 0 && y >= 0 && x < m && y < n;
  }

  function bfs(sx, sy) {
    const q = [[sx, sy]];
    visited[sx][sy] = true;
    while (q.length) {
      const [curX, curY] = q.shift();
      dir.forEach((d) => {
        const nx = curX + d[0];
        const ny = curY + d[1];
        if (inRange(nx, ny)) {
          if (grid[nx][ny] === '1' && !visited[nx][ny]) {
            q.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      });
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        bfs(i, j);
        cnt++;
      }
    }
  }
  return cnt;
}
