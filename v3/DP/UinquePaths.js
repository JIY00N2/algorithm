// DP top down dfs
function uniquePaths(m, n) {
  const memo = Array.from({ length: m }, () => Array(n).fill(-1));

  function dp(memo, x, y) {
    if (x === 0 && y === 0) {
      return (memo[x][y] = 1);
    }
    if (memo[x][y] === -1) {
      let move = 0;
      if (x - 1 >= 0) {
        move += dp(memo, x - 1, y);
      }
      if (y - 1 >= 0) {
        move += dp(memo, x, y - 1);
      }
      memo[x][y] = move;
    }
    return memo[x][y];
  }

  return dp(memo, m - 1, n - 1);
}

// DP bottom up for
function uniquePaths(m, n) {
  const memo = Array.from({ length: m }, () => Array(n).fill(-1));
  for (let i = 0; i < m; i++) {
    memo[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    memo[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
    }
  }
  return memo[m - 1][n - 1];
}
