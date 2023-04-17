/* 2023.04.06
1. 이진 변환 반복하기 ❌
다른 사람 풀이
function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}
내 풀이
function solution(s) {
    let zeroCnt = 0;
    let repeat = 0;
    while(s.length !==1){
        const length = s.length;
        s = s.split("").filter(v=>v==="1").join("");
        const newLength = s.length;
        zeroCnt += length - newLength;
        s = newLength.toString(2);
        repeat++;
    }
    return [repeat, zeroCnt];
}
// 1. 문자열에서 0을 삭제한다.
// 2. 0을 제거한 문자열의 길이를 2진수로 변환해 반복

# 2023.04.17 ❌
function solution(s) {
    var answer = [];
    let zeroCnt = 0;
    let repeat = 0;
    while(s.length !== 1){
        const length = s.length;
        s = s.split('').filter(v=>v==="1").join(''); // 111111
        const newLength = s.length
        zeroCnt += length - newLength; //6
        s = newLength.toString(2);
        repeat++;
    }
    answer.push(repeat, zeroCnt);
    return answer;
}

2. 숫자의 표현 ❌
#1
function solution(n) {
    let answer = 0;
    
    for(let i = 1; i<=n; i++) {
        let temp = i;
        for(let j = i+1; j<=n; j++) {
            temp += j;
            if(temp === n) answer ++
            else if(temp > n) break;
        }
    }
    return answer + 1
}
#2
function solution(n) {
    let cnt = 0;
    for(let i = 0; i <=n; i++){
        if(n % i === 0 && i % 2 === 1){
            cnt++;
        }
    }
    return cnt;
}
// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수 = 홀수인 약수의 갯수
// 15의 약수는 1,3,5,15 이중 홀수는 4개

# 2023.04.17 ❌
function solution(n) {
    let answer = 1;
    if(n===1)
        return 1;
    for(let i = 1; i <=Math.ceil(n/2); i++){
        let total = 0;
        for(let j = i; j<=n; j++){
            total += j;
            if(total === n)
                answer++;
            if(total > n)
                break;
        }
    }
    return answer;
}
*/