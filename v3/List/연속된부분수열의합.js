function solution(sequence, k) {
  let temp = [];
  let left = 0;
  let right = 0;
  let sum = sequence[left];
  while (right < sequence.length) {
    if (sum === k) {
      temp.push([left, right]);
      // 현재 sequence[i] 값을 빼고 i를 증가 시켜야 하므로 i++
      sum -= sequence[left];
      left++;
      right++;
      // 다음 sequence[j] 값을 더하고 j를 증가 시켜야 하므로 ++j
      sum += sequence[right];
    } else if (sum > k) {
      sum -= sequence[left];
      left++;
    } else if (sum < k) {
      right++;
      sum += sequence[right];
    }
  }
  const answer = temp.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
  return answer;
}
