// DP topdown, 재귀 memoization
function minCostClimbingStairs(cost) {
  const n = cost.length;
  const memo = Array(n + 1).fill(-1);
  function dp(memo, n) {
    if (n === 0 || n === 1) {
      return 0;
    }
    if (memo[n] === -1) {
      memo[n] = Math.min(
        dp(memo, n - 1) + cost[n - 1],
        dp(memo, n - 2) + cost[n - 2]
      );
    }
    return memo[n];
  }
  return dp(memo, n);
}

// DP bottom up, for
function minCostClimbingStairs(cost) {
  const n = cost.length;
  const memo = Array(n + 1).fill(-1);
  memo[0] = 0;
  memo[1] = 0;
  for (let i = 2; i <= n; i++) {
    memo[i] = Math.min(memo[i - 1] + cost[i - 1], memo[i - 2] + cost[i - 2]);
  }
  return memo[n];
}
