/*
1. 문자열안에 문자열

다른사람 풀이 
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}

내 풀이
indeOf() - 문자열 찾을 때 사용 
있으면 첫 번째 위치 반환 없으면 -1 반환

function solution(str1, str2) {
    let answer = 0;
    const result = str1.indexOf(str2);
    answer = result === -1 ? 2 : 1;
    return answer;
}

2. 제곱수 판별하기

다른 사람 풀이
Number.isInteger() - 정수인지 판별

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

내 풀이
Math.sqrt() - 숫자의 제곱근 반환

function solution(n) {
    let answer = 0;
    const squareRoot = Math.sqrt(n);
    answer = n % squareRoot === 0 ? 1 : 2;
    return answer;
}

3. 세균 증식

다른사람 풀이
function solution(n, t) {
  return n << t;
}

내 풀이
function solution(n, t) {
    const exp = n * Math.pow(2,t)
    return exp;
}

4. 문자열 정렬하기(2)

다른사람 풀이
function solution(my_string) {
    return my_string.toLowerCase().split('').sort().join('');
}

내 풀이
function solution(my_string) {
    const lowerStr = my_string.toLowerCase().split('');
    const sortedArr = lowerStr.sort();
    return sortedArr.join('');
}
 */