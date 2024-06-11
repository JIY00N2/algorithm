/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board) {
  const dir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const m = board.length;
  const n = board[0].length;
  const copyBoard = JSON.parse(JSON.stringify(board));

  const valid = (x, y) => {
    return x >= 0 && y >= 0 && x < m && y < n;
  };

  function game(x, y) {
    let cnt = 0;
    for (let i = 0; i < dir.length; i++) {
      const nx = dir[i][0] + x;
      const ny = dir[i][1] + y;
      if (valid(nx, ny) && copyBoard[nx][ny] === 1) {
        cnt++;
      }
    }

    if (cnt === 2 && copyBoard[x][y] === 1) {
      return 1;
    }
    if (cnt === 3) {
      return 1;
    }
    return 0;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = game(i, j);
    }
  }
}
