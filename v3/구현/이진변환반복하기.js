function solution(s) {
  var answer = [];

  let cnt = 0;
  let deleteZeroCnt = 0;

  while (s.length !== 1) {
    let total = s.length;
    s = s.replaceAll('0', '');
    let newLength = s.length;
    cnt++;
    deleteZeroCnt += total - newLength;
    s = newLength.toString(2);
  }

  answer.push(cnt, deleteZeroCnt);
  return answer;
}
