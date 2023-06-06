// 그래프를 표현하기 위한 인접 리스트
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// 방문한 정점을 체크하기 위한 배열
const visited = [];

function dfs(node) {
  // 현재 노드를 방문 처리
  visited[node] = true;
  console.log(node);

  // 현재 노드와 인접한 정점들을 가져옴
  const neighbors = graph[node];

  // 인접한 정점들을 순회하며 방문하지 않은 정점에 대해 재귀적으로 DFS 호출
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];
    if (!visited[neighbor]) {
      dfs(neighbor);
    }
  }
}

// DFS 호출 (시작 노드: 'A')
dfs("A");
