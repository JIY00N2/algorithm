// DFS + 백트래킹
// 퀸의 공격 범위는 가로, 세로, 대각선

function solveNQueens(n) {
  const answer = [];

  // 정답 배열 그리기
  function makeAns(cur) {
    let arr = [];
    let str = '';
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (cur[i] === j) {
          str += 'Q';
        } else {
          str += '.';
        }
      }
      arr.push(str);
      str = '';
    }
    return answer.push(arr);
  }

  function isPossible(candidate, cur) {
    const nextRow = cur.length;
    for (let i = 0; i < nextRow; i++) {
      if (cur[i] === candidate) {
        return false;
      }
      if (Math.abs(i - nextRow) === Math.abs(cur[i] - candidate)) {
        return false;
      }
    }
    return true;
  }

  function backtrack(cur) {
    if (cur.length === n) {
      makeAns(cur);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isPossible(i, cur)) {
        cur.push(i);
        console.log(cur); // [1,3,0,2]
        backtrack(cur);
        cur.pop();
      }
    }
  }

  backtrack([]);

  return answer;
}

solveNQueens(4);
