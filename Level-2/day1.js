/* 2023.04.04
1. 최댓값과 최솟값
function solution(s) {
    let answer = '';
    const arr = s.split(" ").map((s)=>Number(s));
    answer = String(Math.min(...arr)) + " " +String(Math.max(...arr));
    return answer;
}

# 2023.04.17 ⭕
function solution(s) {
    let answer = '';
    const numArr = s.split(" ").map((str)=>Number(str)).sort((a,b)=>a-b);
    answer = numArr[0] + " " + numArr[numArr.length-1];
    return answer;
}

다른사람 풀이
function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}

2. JadenCase 문자열 만들기 ❌
# 2023.04.17 ❌
function solution(s) {
    const arr = s
    .toLowerCase() // 3people unfollowed me
    .split(" ") // [3people, unfollowed, me]
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1)) // ["3people, "unfollowed","Me"];
    .join(" "); // "3people Unfollowed Me"
    return arr;
}
*/