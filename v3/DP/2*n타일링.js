function solution(n) {
  // 피보나치의 결과 값이랑 값이 동일
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  const memo = Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1000000007;
  }

  return memo[n];
}
