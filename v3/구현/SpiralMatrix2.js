function generateMatrix(n) {
  if (n === 1) {
    return [[1]];
  }

  const arr = Array.from({ length: n }, () => Array(n).fill(0));
  let [startRow, startCol] = [0, 0];
  let [endRow, endCol] = [n - 1, n - 1];
  let num = 1;

  while (num <= n * n) {
    // 왼 -> 오
    for (let col = startCol; col <= endCol; col++) {
      arr[startCol][col] = num;
      num++;
    }
    startRow++;

    // 위 -> 아래
    for (let row = startRow; row <= endRow; row++) {
      arr[row][endCol] = num;
      num++;
    }
    endCol--;

    // 오 -> 왼
    for (let col = endCol; col >= startCol; col--) {
      arr[endRow][col] = num;
      num++;
    }
    endRow--;

    // 아래 -> 위
    for (let row = endRow; row >= startRow; row--) {
      arr[row][startCol] = num;
      num++;
    }
    startCol++;
  }

  return arr;
}
