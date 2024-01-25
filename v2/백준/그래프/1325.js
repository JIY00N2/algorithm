// 1325 효율적인 해킹
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [node_length, line] = input[0];
const array = input.slice(1);
const graph = Array.from({ length: node_length + 1 }, () => []);

for (let i = 0; i < array.length; i++) {
  const [s, e] = array[i];
  graph[e].push(s);
}

function dfs(s) {
  const v = Array.from({ length: node_length + 1 }, () => false);
  let dq = [s];
  let cnt = 1;
  v[s] = true;
  while (dq.length !== 0) {
    const cur = dq.pop(); // 자기 자신
    const children = graph[cur]; // 자식
    for (let i = 0; i < children.length; i++) {
      if (!v[children[i]]) {
        v[children[i]] = true;
        cnt++;
        dq.push(children[i]);
      }
    }
  }
  return cnt;
}

const temp = [-1];
let max = 0;
for (let i = 1; i <= node_length; i++) {
  const length = dfs(i);
  max = Math.max(max, length);
  temp.push(length);
}

const answer = [];
for (let i = 0; i < node_length + 1; i++) {
  if (temp[i] === max) {
    answer.push(i);
  }
}

console.log(answer.join(' '));
