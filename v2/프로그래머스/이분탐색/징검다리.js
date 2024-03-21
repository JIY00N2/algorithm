function solution(distance, rocks, n) {
  let left = 0;
  let right = distance;
  rocks = [...rocks.sort((a, b) => a - b), distance];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let removeCnt = 0;
    let startDist = 0;

    for (const rock of rocks) {
      if (rock - startDist < mid) {
        removeCnt++;
      } else {
        startDist = rock;
      }
    }

    if (removeCnt > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
}
