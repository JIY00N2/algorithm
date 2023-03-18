/*
9. 중앙값 구하기

sort() - 문자열 기준으로 정렬한다 따라서 숫자 정렬 할때는
sort((a,b)=>a-b)

다른사람 풀이
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

내 풀이
function solution(array) {
    const newArray = array.sort((a,b)=>a-b);
    return answer = newArray[Math.floor(newArray.length / 2)];
}

10. 최빈값 구하기
 */