function solution(n, lost, reserve) {
  const arr = Array(n).fill(1);
  const realLost = lost
    .filter((v) => !reserve.includes(v))
    .sort((a, b) => a - b);
  const realReserve = reserve
    .filter((v) => !lost.includes(v))
    .sort((a, b) => a - b);

  const graph = arr.map((v, id) => {
    if (realLost.includes(id + 1)) {
      return v - 1;
    } else if (realReserve.includes(id + 1)) {
      return v + 1;
    } else {
      return v;
    }
  });
  const aa = graph.map((v, id) => {
    if (v === 0) {
      if (graph[id - 1] && graph[id - 1] === 2) {
        graph[id - 1] = graph[id - 1] - 1;
        v = v + 1;
        return;
      }
      if (graph[id + 1] && graph[id + 1] === 2) {
        graph[id + 1] = graph[id + 1] - 1;
        return;
      }
    }
    return v;
  });
  const answer = aa.filter((v) => v !== 0).length;
  return answer;
}
