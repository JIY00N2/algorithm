// 2644 촌수계산
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const peopleCnt = input[0];
const [s, e] = input[1];
const line = input[2];
const map = input.slice(3);

const graph = new Map();

for (let i = 1; i <= peopleCnt; i++) {
  graph.set(i, []);
}

for (const [s, e] of map) {
  graph.get(s).push(e);
  graph.get(e).push(s);
}

let answer = 0;

function bfs() {
  const v = Array.from({ length: peopleCnt }, () => false);
  const q = [[s, 0]];
  v[s] = true;
  while (q.length !== 0) {
    const [cur, depth] = q.shift();
    const children = graph.get(cur);
    if (cur === e) {
      return (answer = depth);
    }
    for (let i = 0; i < children.length; i++) {
      if (!v[children[i]]) {
        v[children[i]] = true;
        q.push([children[i], depth + 1]);
      }
    }
  }
}

bfs();

console.log(answer === 0 ? -1 : answer);
