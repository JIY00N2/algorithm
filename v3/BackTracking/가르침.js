// 1062 가르침
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const strNandK = input[0].map((v) => +v);
const [n, k] = strNandK;
const words = input.slice(1).flat();
const visited = Array(26).fill(false);
let answer = 0;

function check() {
  let cnt = 0;
  for (let word of words) {
    let flag = true;
    for (let char of word) {
      if (!visited[char.charCodeAt(0) - 97]) {
        flag = false;
        break;
      }
    }
    if (flag) cnt++;
  }
  return cnt;
}

function backtracking(start, cntLength) {
  if (cntLength === k) {
    answer = Math.max(answer, check());
    return;
  }

  for (let i = start; i < 26; i++) {
    if (!visited[i]) {
      visited[i] = true;
      backtracking(i, cntLength + 1);
      visited[i] = false;
    }
  }
}

if (k < 5) {
  console.log(0);
} else if (k === 26) {
  console.log(n);
} else {
  ['a', 'c', 'i', 'n', 't'].forEach((char) => {
    visited[char.charCodeAt(0) - 97] = true;
  });
  backtracking(0, 5);
  console.log(answer);
}
