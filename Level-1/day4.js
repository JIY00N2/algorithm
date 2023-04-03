/* 2023.03.28

1. 직사각형 별찍기

다른사람 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});

내 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for(let i = 1; i <=b; i++){
        let answer = "";
        for(let j = 1; j<=a; j++){
            answer += "*";
        }
        console.log(answer);
    }
});

2. 최대공약수와 최소공배수

다른사람 풀이
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}

내 풀이
function solution(n, m) {
    var answer = [];
    let gcd = 1; // 최대 공약수
    let lcm = 1; // 최소 공배수
    const big = n > m ? n : m;
    for(let i = 1; i <= big; i++){
        if(n % i === 0 && m % i ===0){
            gcd = i;
        }
    }
    lcm = (n / gcd) * (m /gcd) * gcd;
    answer.push(gcd, lcm);
    return answer;
}

3. 같은 숫자는 싫어

다른사람 풀이
function solution(arr){
    return arr.filter((val,index) => val != arr[index+1]);
}

내 풀이
function solution(arr){
    let answer= [];
    let beforeNum = -1;
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        if(beforeNum !== item){
            answer.push(item);
            beforeNum = item;
        }
    }
    return answer;
}

4. 3진법 뒤집기

다른사람 풀이
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

내 풀이
function solution(n) {
    var answer = 0;
    let arr = [];
    while(n / 3 > 0){
        arr.push(n%3);
        n=~~(n/3);
    }
    const reverseArr = arr.reverse();
    for(let i = 0; i<reverseArr.length; i++){
        const item  = reverseArr[i];
        answer += item * (3**i);
    }
    return answer;
}
// 1. n을 3으로 나눈다 나머지, 몫 배열에 저장
// 2. 10진법으로 표현

5. 예산

내 풀이
function solution(d, budget) {
    
    const arr = d.sort((a, b) => a - b);
    let cnt = 0;
    
    for(let i = 0; i < d.length; i++) {
        const item = arr[i];
        if(item > budget)
            break;
        budget -= item;
        cnt += 1;
    }
    return cnt;
}
*/