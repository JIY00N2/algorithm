/* 최고의 집합 ❌

내 풀이
function solution(n, s) {
    if(n > s)
        return [-1];
    const mid = Math.floor(s/n); // 내림
    const answer = new Array(n).fill(mid); // [4,4]
    for(let i = 0; i < s % n; i++){
        // i = 0
        answer[answer.length - 1 - i]++;
        // answer[1]++;
    }
    return answer;
}
*/