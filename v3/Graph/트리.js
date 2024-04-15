// 1068 트리
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = parseInt(input[0]);
const tree = input[1].split(' ').map(Number);
const target = parseInt(input[2]);

const visited = Array(n).fill(false);
const graph = Array.from({ length: n }, () => []);

// 부모 노드를 인덱스로 자식 노드들을 그래프에 추가
for (let i = 0; i < n; i++) {
  const parent = tree[i];
  if (parent !== -1) {
    graph[parent].push(i);
  }
}

// DFS를 수행하여 제거할 노드를 제거하고, 그래프를 업데이트
function dfs(node) {
  visited[node] = true;
  for (const child of graph[node]) {
    if (!visited[child]) {
      dfs(child);
      graph[child].push(100); // 제거할 노드를 표시
    }
  }
  graph[node].push(100); // 제거할 노드를 표시
}

dfs(target);

let cnt = 0;
for (const children of graph) {
  // 제거할 노드를 자식으로 갖고 있고, 자식 노드가 없는 경우 리프 노드
  if (children.includes(target) && children.length === 1) {
    cnt++;
  }
  // 자식 노드가 없는 경우 리프 노드
  if (children.length === 0) {
    cnt++;
  }
}

console.log(cnt);
