// 1. top down - 재귀
function minCostClimbingStairs(cost) {
  const n = cost.length;
  const memo = Array(n + 1).fill(-1);
  return dp(memo, cost, n);
}

function dp(memo, cost, n) {
  if (n === 0 || n === 1) {
    return 0;
  }
  if (memo[n] === -1) {
    memo[n] = Math.min(
      dp(memo, cost, n - 1) + cost[n - 1],
      dp(memo, cost, n - 2) + cost[n - 2]
    );
  }
  return memo[n];
}

// 2. bottom up 반복문
function minCostClimbingStairs(cost) {
  const n = cost.length;
  const dp = Array(n + 1).fill(-1);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
}
