/* 2023.03.20 ~ 2023.03.26

1. 짝수와 홀수

내 풀이
function solution(num) {
    const answer = num % 2 === 0 ? "Even" : "Odd";
    return answer;
}

2. 약수의 합

내 풀이
function solution(n) {
    let answer = 0;
    for(let i = 1; i<=n; i++){
        if(n % i === 0)
            answer += i;
    }
    return answer;
}

3. 평균 구하기

다른사람 풀이
function average(array){
  return array.reduce((a,b) => a+b) / array.length;
}

내 풀이
function solution(arr) {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    const answer = sum / arr.length;
    return answer;
}

4. 자릿수 더하기

다른사람 풀이
function solution(n)
{
    var a = (n + '').split('');
    var b = 0;
    for(var i = 0; i < a.length; ++i) {
        b += parseInt(a[i]);
    }
    return b;
    //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}

내 풀이
function solution(n)
{
    const arr = String(n).split('');
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        sum += Number(item);
    }
    return sum;
}

5. x만큼 간격이 있는 n개의 숫자

다른사람 풀이
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

내 풀이
function solution(x, n) {
    let answer = [];
    const len = x * n;
    for(let i = 1; i <= n; i++){
        answer.push(x*i);
    }
    return answer;
}

6. 자연수 뒤집어 배열로 만들기

다른사람 풀이
function solution(n) {
    return n.toString().split('').reverse().map(o => o = parseInt(o));
}

내 풀이
function solution(n) {
    let nArr = [];
    const strArr = String(n).split("");
    for(let i = strArr.length - 1; i >= 0; i--){
        nArr.push(Number(strArr[i]));
    }
    return nArr;
}

7. 정수 제곱근 판별

내 풀이
function solution(n) {
    const sqrt = Math.sqrt(n);
    if(n % sqrt === 0){
        return (sqrt+1) ** 2;
    }else{
        return -1;
    }
}

8. 문자열 내 p와 y의 개수

다른사람 풀이
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

내 풀이
function solution(s){
    const lower = s.toLowerCase();
    let pcnt = 0, ycnt = 0;
    for(let i = 0; i < lower.length; i++){
        if(lower[i] === "p"){
            pcnt+=1;
        }else if(lower[i] === "y"){
            ycnt+=1;
        }
    }
    if(pcnt === ycnt) return true;
    else return false;
}
*/
