// 22233

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));
const [a, b] = input[0];
const n = Number(a);
const m = Number(b);
const keywords = input.slice(1, n + 1).flat();
const posts = input.slice(n + 1, n + m + 1).flat();

const set = new Set(keywords);
const result = [];

for (let i = 0; i < m; i++) {
  const post = posts[i].split(',');
  for (let j = 0; j < post.length; j++) {
    if (set.has(post[j])) {
      set.delete(post[j]);
    }
  }
  result.push(set.size);
}
console.log(result.join('\n'));
