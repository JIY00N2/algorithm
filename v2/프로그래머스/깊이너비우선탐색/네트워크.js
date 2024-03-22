function solution(n, computers) {
  let cnt = 0;
  const v = Array.from({ length: n }, () => false); // [f, f, f]

  function dfs(start) {
    v[start] = true;

    for (let i = 0; i < n; i++) {
      // computers 배열을 돌면서 1인데, 방문안했으면 dfs
      if (computers[start][i] === 1 && !v[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // 방문처리가 안돼서 처음노드랑 끊어져 있다고 판단
    if (!v[i]) {
      dfs(i);
      cnt++;
    }
  }

  return cnt;
}
