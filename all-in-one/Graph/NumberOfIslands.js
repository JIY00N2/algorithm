// bfs로 풀이
function numIslands(grid) {
  let number_of_islands = 0;
  const m = grid.length; // 행
  const n = grid[0].length; // 열
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // 상하좌우

  function inRange(next_x, next_y) {
    return next_x >= 0 && next_y >= 0 && next_x < m && next_y < n;
  }

  function bfs(x, y) {
    visited[x][y] = true;
    const q = [[x, y]];
    while (q.length) {
      const [curX, curY] = q.shift();
      dir.forEach((d) => {
        const next_x = curX + d[0];
        const next_y = curY + d[1];
        // 방문하면 안되는 좌표
        if (inRange(next_x, next_y)) {
          if (grid[next_x][next_y] === '1' && !visited[next_x][next_y]) {
            visited[next_x][next_y] = true;
            q.push([next_x, next_y]);
          }
        }
      });
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        bfs(i, j);
        // bfs start를 할 때마다 1증가
        number_of_islands++;
      }
    }
  }

  return number_of_islands;
}
