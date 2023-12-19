/* 2023.04.13

1. 로또의 최고 순위와 최저 순위 ❌

내 풀이
function solution(lottos, win_nums) {
    const answer = [];
    const sameNum = lottos.filter((num)=>win_nums.includes(num)).length; // 2 0
    const zeroCnt = lottos.filter((num)=>num===0).length; // 2 6
    let min = 7 - sameNum >= 6 ? 6 : 7 - sameNum;
    let max = min-zeroCnt < 1 ? 1 : min-zeroCnt;
    answer.push(max, min);
    return answer;
    // 최저 순위는 7에서 맞은 갯수를 뺸다. 단, 같은 수가 0일 경우 6으로 변경
    // 최고 순위는 최저 순위에서 0 의 개수를 뺀다. 단, 로또가 모두 0일 경우 min은6, max는 0이되므로 1로 변경
}

2. 카드 뭉치 ❌

다른사람 풀이

내 풀이
function solution(cards1, cards2, goal) {
    let answer = '';
    for(let i = 0; i < goal.length; i++){
        if(cards1[0] === goal[i]){
            cards1.shift();
        }else if(cards2[0]===goal[i]){
            cards2.shift();
        }else{
            return "No";
        }
    }
    return "Yes";
}

3. 덧칠하기 ❌

내 풀이
function solution(n, m, section) {
    var answer = 0;
    let painted = 0;
    for(let num of section){
        if(painted < num){
            answer++;
            painted = num + m -1;
        }
    }
    return answer;
}

4. 기사단원의 무기 ❌

다른사람 풀이
function solution(number, limit, power) {
    let answer = 0;
     
    for(let i = 1; i <= number; i++){
        let cnt = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                if(i / j === j){
                    cnt++;
                }else{
                    cnt+=2;
                }
            }
            if(cnt > limit){
                cnt = power;
                break;
            }
        }
        answer += cnt;
    }
    return answer;
}
// 시간 초과 문제 해결을 위해 Math.sqrt사용
// i가 4인 경우 Math.sqrt(i) = 2
// j가 1인 경우 4 % 1 === 0, 4 / 1 === 4 이므로 약수의 갯수는 2개
// j가 2인 경우 4 % 2 === 0 , 4 / 2 === 2 이므로 약수의 갯수는 1개

// i가 10인 경우 Math.sqrt(i) = 3
// j가 1인 경우 10 % 1 === 0, 10 / 1 === 10 이므로 약수의 갯수는 2개
// j가 2인 경우 10 % 2 === 0 , 10 / 2 === 5 이므로 약수의 갯수는 2개
// j가 3인 경우 10 % 3 === 1이므로 스킵

내 풀이 시간초과 😑
function divisors(num){
    const arr = []; // 1,2,2,3,2
    
    for(let i = 1; i <=num; i++){
        let cnt = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                cnt++;
            }
        }
        arr.push(cnt);
    }
    return arr;
}
function solution(number, limit, power) {
    var answer = 0;
    const divCnt = divisors(number); // 1,2,2,3,2
    for(let i = 0; i < divCnt.length; i++){
        if(divCnt[i] > limit){
            answer += power;
        }
        else{
            answer += divCnt[i];
        }
    }
    return answer;
}
5. 숫자 짝꿍 ❌

다른사람 풀이
function solution(X, Y) {
    let answer = '';
    X = X.split("");
    Y = Y.split("");
    // 예제 2
    for(let i = 0; i < 10; i++){
        // 0의 갯수=2, 1의 갯수=1 나머지 = 0
        const newX = X.filter((s)=>Number(s) === i).length;
        // 0의 갯수 = 2, 2,3,4,5의 갯수 = 1, 나머지 = 0
        const newY = Y.filter((s)=>Number(s) === i).length;
        const min = Math.min(newX,newY); // 2 0 0 0 0 0 0 0 0 0
        answer += String(i).repeat(min);
    }
    if(answer === "") return "-1";
    if(Number(answer)===0) return "0";
    return answer.split("").sort((a,b)=>b-a).join("");
}

내 풀이 몇몇 케이스 오답
function solution(X, Y) {
    const sameStr = Y.split("").filter((str)=>X.split("").includes(str)); // 빈배열, ["0","0"]
    const numSortedArr = sameStr.map(Number).sort((a,b)=>b-a);
    // const arr = new Set(numSortedArr);
    if(numSortedArr.length === 0)
        return "-1";
    for(let i = 0; i < numSortedArr.length; i++){
        if(numSortedArr[i] !== 0)
            break;
        return "0";
    }
    return numSortedArr.join("");
}
*/