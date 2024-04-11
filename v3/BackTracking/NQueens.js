// DFS + 백트래킹
// 퀸의 공격 범위는 가로, 세로, 대각선

function solveNQueens2(n) {
  const answer = [];

  function drawGraph(curr) {
    let arr = [];
    let str = '';
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (curr[i] === j) {
          str += 'Q';
        } else {
          str += '.';
        }
      }
      arr.push(str);
      str = '';
    }
    answer.push(arr);
  }

  function isValid(currentCol, curr) {
    const currentRow = curr.length;
    for (let i = 0; i < currentRow; i++) {
      if (currentCol === curr[i]) {
        return false;
      }
      if (Math.abs(currentCol - curr[i]) === Math.abs(currentRow - i)) {
        return false;
      }
    }
    return true;
  }

  function backtracking(currentRow, curr) {
    if (currentRow === n) {
      return drawGraph(curr);
    }

    for (let col = 0; col < n; col++) {
      if (isValid(col, curr)) {
        curr.push(col);
        backtracking(currentRow + 1, curr);
        curr.pop();
      }
    }
  }

  backtracking(0, []);
  return answer;
}

console.log(solveNQueens2(4));

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
        backtrack(cur);
        cur.pop();
      }
    }
  }

  backtrack([]);

  return answer;
}

solveNQueens(4);
