// 1. top-down 재귀
function climbStairs(n) {
  const memo = Array(n + 1).fill(-1);
  return topdown(memo, n);
}

function topdown(memo, n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (memo[n] === -1) {
    memo[n] = topdown(memo, n - 1) + topdown(memo, n - 2);
  }
  return memo[n];
}

// 2. bottom-up 반복문
function climbStairs(n) {
  const dp = Array(n + 1).fill(-1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
