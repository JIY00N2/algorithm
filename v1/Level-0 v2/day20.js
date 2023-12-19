/*
1. 배열의 길이를 2의 거듭제곱으로 만들기
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}
3. 문자열 묶기
function solution(strArr) {
    let ans = Array(31).fill(0);
    for (let s of strArr) ans[s.length]++
    return Math.max(...ans)
}
 */