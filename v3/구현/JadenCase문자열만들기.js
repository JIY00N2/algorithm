function solution(s) {
  const answer = s
    .toLowerCase()
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1))
    .join(' ');
  return answer;
}
