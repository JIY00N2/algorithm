function totalNQueens(n) {
  let answer = 0;

  function isPossible(currentCol, curr) {
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
      answer++;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isPossible(col, curr)) {
        curr.push(col);
        backtracking(currentRow + 1, curr);
        curr.pop();
      }
    }
  }

  backtracking(0, []);
  return answer;
}
