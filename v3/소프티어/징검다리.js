/** 재귀
 * 1. 문제 조건에서 시뮬레이션 -> 규칙을 찾는다.
 * 2. 함수의 형태를 잡는다.
 * 3. 재귀를 만든다. (+ 규칙)
 * 4. 탈출 조건을 걸어준다.
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (item) => {
  input.push(item.split(' ').map((v) => +v));
});

function solution(n, arr) {
  const dp = Array(n).fill(-1);

  // 인덱스를 받아서 돌 개수를 return
  // recur = (index) => count
  function recur(start) {
    if (dp[start] !== -1) {
      return dp[start];
    }

    // 마지막 값일때
    if (start === n - 1) {
      dp[start] = 1;
      return 1;
    }

    let temp = 0;
    for (let i = start + 1; i < n; i++) {
      if (arr[start] < arr[i]) {
        temp = Math.max(recur(i), temp);
      }
    }
    dp[start] = temp + 1;
    return temp + 1;
  }

  let max = 0;
  for (let i = n - 1; i >= 0; i--) {
    max = Math.max(recur(i), max);
  }
  return max;
}

rl.on('close', () => {
  const n = input[0][0];
  const arr = input.slice(1)[0];
  console.log(solution(n, arr));
  process.exit();
});
