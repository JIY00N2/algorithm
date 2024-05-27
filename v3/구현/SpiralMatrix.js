function spiralOrder(matrix) {
  const answer = [];
  let [row, col] = [matrix.length, matrix[0].length];
  let [startRow, startCol] = [0, 0]; // 0, 0
  let [endRow, endCol] = [matrix.length - 1, matrix[0].length - 1]; // 3, 3
  let totalEl = row * col;
  while (true) {
    if (answer.length === totalEl) {
      break;
    }

    // 왼 -> 오
    for (let col = startCol; col <= endCol; col++) {
      answer.push(matrix[startRow][col]);
    }
    startRow++;

    // 위 -> 아래
    for (let row = startRow; row <= endRow; row++) {
      answer.push(matrix[row][endCol]);
    }
    endCol--;

    // 마지막에 왼쪽에서 오른쪽으로 가서 중앙에서 끝날 경우,
    // 또는 열이 1개라 아래로 쭉 가서 끝날경우
    if (startRow > endRow || startCol > endCol) {
      break;
    }

    // 오 -> 왼
    for (let col = endCol; col >= startCol; col--) {
      answer.push(matrix[endRow][col]);
    }
    endRow--;

    // 아래 -> 위
    for (let row = endRow; row >= startRow; row--) {
      answer.push(matrix[row][startCol]);
    }
    startCol++;
  }

  return answer;
}
