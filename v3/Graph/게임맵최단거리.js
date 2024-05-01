function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  function bfs(sx, sy) {
    const v = Array.from({ length: n }, () => Array(m).fill(false));
    const q = [[sx, sy, 1]];
    v[sx][sy] = true;
    while (q.length) {
      const [curx, cury, move] = q.shift();
      if (curx === n - 1 && cury === m - 1) {
        return move;
      }
      for (let i = 0; i < dir.length; i++) {
        const nx = curx + dir[i][0];
        const ny = cury + dir[i][1];
        if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
          if (!v[nx][ny] && maps[nx][ny] === 1) {
            v[nx][ny] = true;
            q.push([nx, ny, move + 1]);
          }
        }
      }
    }
    return -1;
  }
  let answer = bfs(0, 0);

  return answer;
}
