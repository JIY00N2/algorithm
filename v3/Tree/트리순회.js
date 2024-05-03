const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const n = +input[0][0];
const graph = input.slice(1);
let result = '';

// ABDCEFG
function preorder(node) {
  if (node === '.') {
    return;
  }
  result += node;
  preorder(tree[node][0]);
  preorder(tree[node][1]);
}

function inorder(node) {
  if (node === '.') {
    return;
  }
  inorder(tree[node][0]);
  result += node;
  inorder(tree[node][1]);
}

function postorder(node) {
  if (node === '.') {
    return;
  }
  postorder(tree[node][0]);
  postorder(tree[node][1]);
  result += node;
}

const tree = {};

for (let i = 0; i < n; i++) {
  const [root, left, right] = graph[i];
  tree[root] = [left, right];
}

preorder('A');
result += '\n';
inorder('A');
result += '\n';
postorder('A');
console.log(result);
