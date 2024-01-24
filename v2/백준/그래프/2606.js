const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const node_length = input[0][0];
const array = input.slice(2);
const map = new Map();

for (let i = 0; i < node_length; i++) {
  map.set(i + 1, []);
}

for (const [s, e] of array) {
  map.get(s).push(e);
  map.get(e).push(s);
}

const v = Array.from({ length: node_length + 1 }, () => false); // visited 방문 처리 배열
// v: 노드 개수만큼 false로 초기화 하는 배열

// s: startNode, g: graph
function dfs(s, g) {
  // dq: 처음엔 시작 노드만 넣고, while문에서 연결 노드를 push 하고 v[자기]를 true로 바꿈 -> 비어 있으면 while문 탈출 (dfs는 앞에다가 넣음..)
  let dq = []; // dequeue 실제 넣고 빼고 하는 배열
  dq.push(s);
  while (dq.length !== 0) {
    const cur = dq.shift();
    if (v[cur]) {
      continue;
    }
    v[cur] = true;
    dq = [...g.get(cur), ...dq];
  }
  return v;
}

const answer = dfs(1, map).filter((v) => v).length - 1;
console.log(answer);

// 묶음 갯수
// let result = 0;
// for (let i = 1; i < node_length + 1; i++) {
//   if (!v[i]) {
//     dfs(i, map);
//     result += 1;
//   }
// }

// console.log(result);
