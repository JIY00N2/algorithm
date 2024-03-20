function solution(n, wires) {
  let answer = 101;
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < wires.length; i++) {
    const [a, b] = wires[i];
    graph[a].push(b);
    graph[b].push(a);
  }

  function bfs(start, exceptNum) {
    let cnt = 0;
    const v = [];
    const q = [start];
    v[start] = true;
    while (q.length) {
      const cur = q.pop();
      const children = graph[cur]; // 자식
      for (let i = 0; i < children.length; i++) {
        if (children[i] !== exceptNum && !v[children[i]]) {
          v[children[i]] = true;
          q.push(children[i]);
        }
      }
      cnt++;
    }
    return cnt;
  }

  for (let i = 0; i < wires.length; i++) {
    const [a, b] = wires[i];
    answer = Math.min(answer, Math.abs(bfs(a, b) - bfs(b, a)));
  }

  return answer;
}
