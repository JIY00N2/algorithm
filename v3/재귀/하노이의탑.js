function solution(n) {
  const answer = [];

  function hanoi(from, to, mid, n) {
    if (n === 1) {
      answer.push([from, to]);
    } else {
      hanoi(from, mid, to, n - 1); // 1 -> 2
      hanoi(from, to, mid, 1); // 1 -> 3
      hanoi(mid, to, from, n - 1); // 2 -> 3
    }
  }

  hanoi(1, 3, 2, n);
  return answer;
}
