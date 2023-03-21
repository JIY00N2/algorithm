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

5.

다른사람 풀이

내 풀이

6.

다른사람 풀이

내 풀이

7.

다른사람 풀이

내 풀이

8.

다른사람 풀이

내 풀이

9.

다른사람 풀이

내 풀이

10.

다른사람 풀이

내 풀이

11.

다른사람 풀이

내 풀이

12.

다른사람 풀이

내 풀이

13.

다른사람 풀이

내 풀이

14.

다른사람 풀이

내 풀이
 */