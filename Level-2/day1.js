/* 2023.04.04
1. 최댓값과 최솟값
function solution(s) {
    let answer = '';
    const arr = s.split(" ").map((s)=>Number(s));
    answer = String(Math.min(...arr)) + " " +String(Math.max(...arr));
    return answer;
}

2. JadenCase 문자열 만들기 ❌

function solution(s) {
    const arr = s
    .toLowerCase() // 3people unfollowed me
    .split(" ") // [3people, unfollowed, me]
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1)) // ["3people, "unfollowed","Me"];
    .join(" "); // "3people Unfollowed Me"
    return arr;
}
*/