// 1. top down - 재귀
function uniquePaths(m, n) {
  const memo = Array.from({ length: m }, () => Array(n).fill(-1));
  return dp(memo, m - 1, n - 1);
}

function dp(memo, r, c) {
  if (r === 0 && c === 0) {
    memo[r][c] = 1;
    return memo[r][c];
  }
  if (memo[r][c] === -1) {
    let unique_path = 0;
    if (r - 1 >= 0) {
      unique_path += dp(memo, r - 1, c);
    }
    if (c - 1 >= 0) {
      unique_path += dp(memo, r, c - 1);
    }
    memo[r][c] = unique_path;
  }
  return memo[r][c];
}

// 2. bottom up - 반복문
function uniquePaths(m, n) {
  const memo = Array.from({ length: m }, () => Array(n).fill(-1));

  for (let r = 0; r < m; r++) {
    memo[r][0] = 1;
  }
  for (let c = 0; c < n; c++) {
    memo[0][c] = 1;
  }

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      memo[r][c] = memo[r - 1][c] + memo[r][c - 1];
    }
  }

  return memo[m - 1][n - 1];
}
