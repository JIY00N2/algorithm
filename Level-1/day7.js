/* 2023.04.05

1. 소수 만들기 ❌

다른사람 풀이
const isPrime = (num) =>{
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0)
            return false;
    }
    return true;
}
function solution(nums) {
    let cnt = 0;
    
    for(let i = 0; i < nums.length-2; i++){
        for(let j = i+1; j < nums.length-1; j++){
            for(let k = j+1; k < nums.length; k++){
                if(isPrime(nums[i] + nums[j] +nums[k]))
                    cnt+=1;
            }
        }
    }
    return cnt;
}

2. 과일 장수

내 풀이
function solution(k, m, score) {
    let price = 0, sum = 0;
    const boxCnt = ~~(score.length / m); // 4개
    const sortedArr = score.sort((a,b)=>b-a);
    for(let i = 0; i < sortedArr.length; i++){
        if((i+1) % m === 0){
            sum += sortedArr[i] * m;
        }
    }
    return sum;
}
// 1. boxCnt = score.length / m  12개 / 3개 상자 4개
// 2. 내림차순으로 정렬해서 박스에 3개씩 넣음

3. 실패율 ❌

내 풀이
function solution(N, stages) {
    let failRate = [];
    let length = stages.length;
    for(let i = 1; i <= N; i++){
        let top = stages.filter(n=>n===i).length; // 실패율의 분자
        failRate.push([i,top/length]);
        length = length - top;
    }
    const answer = failRate.sort((a,b)=>b[1]-a[1]);
    return answer.map(i=>i[0])
    // console.log(failRate);
    //	[[ 1, 0.125 ],[ 2, 0.42857142857142855 ],[ 3, 0.5 ],[ 4, 0.5 ],[ 5, 0 ],[ 6, 1 ]]
}

4. 명예의 전당(1) ❌

다른사람 풀이
function solution(k, score) {
    const answer = [];
    const announced_score = [];

    for(let i = 0; i < score.length; i++) {
        announced_score.push(score[i]);
        announced_score.sort((a, b) => b - a);

        if(announced_score.length >= k) answer.push(announced_score[k - 1]);
        else answer.push(announced_score[announced_score.length - 1]);
    }

    return answer;
}

내 풀이
function solution(k, score) {
    let answer = [];
    let top = [];
    for(let i = 0; i < score.length; i++){
        if(i < k){
            top.push(score[i]);
        }
        // 이번 점수가 명예의 전당 최하위 점수보다 큰 경우
        if(Math.min(...top) < score[i]){
            // 가장 작은 수를 이번 점수와 교체 후 내림차 순 정렬
            top.pop();
            top.push(score[i]);
            top.sort((a,b)=>b-a);
        }
        // 결괏값에 명예의 전당 중 최하위 점수 입력
        answer.push(top.at(-1));
    }
    return answer;
}

*/