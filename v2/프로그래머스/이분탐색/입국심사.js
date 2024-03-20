function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times.at(-1);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = 0;
    for (let i = 0; i < times.length; i++) {
      cnt += Math.floor(mid / times[i]);
    }
    if (cnt >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
