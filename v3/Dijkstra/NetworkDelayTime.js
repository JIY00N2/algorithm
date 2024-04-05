// Dijkstra
function networkDelayTime(times, n, k) {
  // 1. 그래프 구현
  const graph = Array.from({ length: n + 1 }, () => []);
  times.forEach((time) => {
    const [u, v, w] = time;
    graph[u].push([v, w]);
  });

  // 2. 다익스트라 구현
  const costs = Array.from({ length: n + 1 }, () => null);
  const pq = [[k, 0]];
  while (pq.length) {
    // pop인 이유는 sort할 때 내림차순이라서 시간복잡도가 더 낮다.
    const [cur_v, cur_cost] = pq.pop();
    if (costs[cur_v] === null) {
      costs[cur_v] = cur_cost;
      graph[cur_v].forEach((element) => {
        let [next_v, next_cost] = element;
        next_cost += cur_cost;
        pq.push([next_v, next_cost]);
      });
      pq.sort((a, b) => b[1] - a[1]);
    }
  }

  // 앞에거 제거
  costs.shift();
  // 3. 방문 못한 노드 찾기
  const flag = costs.every((v) => v !== null);

  // 4. 최소 비용중에서 최대 비용 찾기
  if (flag) {
    return Math.max(...costs);
  } else {
    return -1;
  }
}
