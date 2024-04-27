const path = process.flatform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = +require('fs').readFileSync(path).toString().trim();
let minCnt = 1000000;

function dfs(num, cur) {
  if (minCnt < cur) {
    return;
  }
  if (num === 1) {
    minCnt = cur;
    return;
  }
  if (num < 1) {
    return;
  }
  if (num % 3 === 0) {
    dfs(num / 3, cur + 1);
  }
  if (num % 2 === 0) {
    dfs(num / 2, cur + 1);
  }
  if (num > 1) {
    dfs(num - 1, cur + 1);
  }
}

dfs(input, 0);

console.log(minCnt);
