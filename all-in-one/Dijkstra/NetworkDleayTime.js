function networkDelayTime(times, n, k) {
  const graph = Array.from({ length: n + 1 }, () => []);
  times.forEach((element) => {
    const [u, v, w] = element;
    graph[u].push([v, w]);
  });

  // 2. 다익스트라 알고리즘
  const costs = Array.from({ length: n + 1 }, () => undefined);
  const pq = [[k, 0]];
  while (pq.length) {
    const [cur_v, cur_cost] = pq.pop();
    if (costs[cur_v] === undefined) {
      costs[cur_v] = cur_cost;
      graph[cur_v].forEach((element) => {
        const [next_v, cost] = element;
        const next_cost = cur_cost + cost;
        pq.push([next_v, next_cost]);
      });
      // 내림차순 정렬
      pq.sort((a, b) => b[1] - a[1]);
    }
  }

  costs.shift();
  // 3. 방문 못한 노드 찾기
  const flag = costs.every((cur) => {
    return cur !== undefined;
  });
  // 4. 최소값 중에서 최대값 구하기
  if (flag) {
    return Math.max(...costs);
  } else {
    return -1;
  }
}
