function solution(maps) {
  // bfs
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const 세로 = maps.length;
  const 가로 = maps[0].length;

  const inRange = (y, x) => {
    if (y >= 0 && y < 세로 && x >= 0 && x < 가로) {
      return true;
    }
    return false;
  };

  const bfs = () => {
    let q = [[0, 0, 1]];
    maps[0][0] = 0;
    while (q.length) {
      const [curY, curX, move] = q.shift();

      if (curY === 세로 - 1 && curX === 가로 - 1) {
        return move;
      }

      for (let i = 0; i < 4; i++) {
        const y = curY + dir[i][0];
        const x = curX + dir[i][1];
        if (!inRange(y, x)) {
          continue;
        }

        if (maps[y][x] === 0) {
          continue;
        }
        q.push([y, x, move + 1]);
        maps[y][x] = 0;
      }
    }
    return -1;
  };

  return bfs();
}
