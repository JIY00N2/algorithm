// 문자열 내 p와 y의 개수
function solution(s) {
  const lowerCaseArr = s.toLowerCase().split('');
  const pCnt = lowerCaseArr.filter((c) => c === 'p').length;
  const yCnt = lowerCaseArr.filter((c) => c === 'y').length;
  const answer = pCnt === yCnt;

  return answer;
}
