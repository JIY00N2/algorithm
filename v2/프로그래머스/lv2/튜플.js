function solution(s) {
  const answer = [];
  const arr = s
    .slice(2, s.length - 2)
    .split('},{')
    .map((v) => v.split(','));
  const nArr = arr
    .map((v) => v.map((e) => +e))
    .sort((a, b) => a.length - b.length);
  answer.push(nArr[0][0]);
  for (let i = 1; i < nArr.length; i++) {
    const nA = nArr[i]; // [2,1]
    for (let j = 0; j < nA.length; j++) {
      if (!answer.includes(nA[j])) {
        answer.push(nA[j]);
      }
    }
  }
  return answer;
}
