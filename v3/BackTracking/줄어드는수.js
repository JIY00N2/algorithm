// 1174 줄어드는 수
const path = process.flatform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = +require('fs').readFileSync(path).toString().trim();

const n = input;

// 중복 체크
let set = new Set();

function backtracking(cur) {
  if (cur.length) {
    set.add(parseInt(cur.join('')));
  }

  for (let i = 0; i < 10; i++) {
    // 현재 배열이 비어있거나 마지막 숫자가 i보다 클 경우(감소하는 수열)
    if (cur.length === 0 || cur[cur.length - 1] > i) {
      cur.push(i);
      backtracking(cur);
      cur.pop();
    }
  }
}

backtracking([]);

const result = [...set.values()].sort((a, b) => a - b);

if (result.length >= n) {
  console.log(result[n - 1]);
} else {
  console.log(-1);
}
