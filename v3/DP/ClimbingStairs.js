// DP top down, memoization 재귀
function climbStairs(n) {
  const memo = Array(n + 1).fill(-1);
  function dp(memo, n) {
    // base case
    if (n === 0 || n === 1) {
      return 1;
    }
    if (memo[n] === -1) {
      memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
    }
    return memo[n];
  }
  return dp(memo, n);
}

// DP bottom up, for
function climbStairs(n) {
  const memo = Array(n + 1).fill(-1);
  // base case
  memo[0] = 1;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}
