// 22 Generate Parentheses
function generateParenthesis(n) {
  const result = [];
  function backtracking(cur, openCnt, closeCnt) {
    if (cur.length === n * 2) {
      result.push(cur.join(''));
      return;
    }

    if (openCnt < n) {
      cur.push('(');
      backtracking(cur, openCnt + 1, closeCnt);
      cur.pop();
    }

    if (openCnt > closeCnt) {
      cur.push(')');
      backtracking(cur, openCnt, closeCnt + 1);
      cur.pop();
    }
  }

  backtracking([], 0, 0);

  return result;
}
