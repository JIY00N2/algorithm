/* 2023.03.27
1. 제일 작은 수 제거하기

다른사람 풀이
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

내 풀이
function solution(arr) {
    let answer = [];
    const minNum = Math.min(...arr);
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        if(item === minNum)
            continue;
        else
            answer.push(item);
    }
    if(answer.length === 0)
        answer.push(-1);
    return answer;
}

2. 없는 숫자 더하기

다른사람 풀이
# 1
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

#2
function solution(numbers) {
    let answer = 0;

    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

    return answer;
}

내 풀이
function solution(numbers) {
    let answer = 45;
    for(let i = 0; i < numbers.length; i++){
        const item = numbers[i];
        answer -= item;
    }
    return answer;
}

3. 가운데 글자 가져오기

다른사람 풀이
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}

내 풀이
function solution(s) {
    let answer = '';
    const length = s.length;
    if(length % 2 === 0){
        answer += s[length/2-1];
        answer += s[length/2];
    }else{
        answer += s[(length - 1) / 2];
    }
    return answer;
    // 1. 문자열 길이 홀 짝 나누기
    // 2. 홀수이면 (n - 1) / 2
    // 3. 짝수이면 (n / 2) - 1, (n / 2)
}

4. 수박수박수박수박수박수?

다른사람 풀이
const waterMelon = n => "수박".repeat(n).slice(0,n);

내 풀이
function solution(n) {
    var answer = '';
        for(let i = 0; i < n; i++){
            if(i%2===0){
                answer += "수";
            }else{
                answer += "박";
            }
        }
    return answer;
}

5. 내적

다른사람 풀이
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
}

내 풀이
function solution(a, b) {
    var answer = 0;
    for(let i = 0; i < a.length; i++){
        const aItem = a[i];
        const bItem = b[i];
        answer += aItem * bItem;
    }
    return answer;
}

6. 문자열 내림차순으로 배치하기

내 풀이
function solution(s) {
    const arr = s.split("").sort().reverse().join("");
    return arr;
}

7. 약수의 개수와 덧셈

다른사람 풀이
// 제곱근이 정수이면 약수의 개수가 홀수
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

내 풀이
function divisorsCnt(n){
    let cnt = 0;
    for(let i = 1; i <=n; i++){
        if(n % i ===0){
            cnt +=1;
        }
    }
    return cnt;
}
function solution(left, right) {
    let result = 0;
    for(let i = left; i<=right; i++){
        if(divisorsCnt(i) % 2 ===0){
            result +=i;
        }else{
            result -=i;
        }
    }
    return result;
}

8. 문자열 다루기 기본

function solution(s) {
    if(s.length !== 4 && s.length !== 6)
        return false;
    for(let i = 0; i < s.length; i++){
        if(isNaN(Number(s[i]))){
            return false;
        }
    }
    return true;
}
다른사람 풀이
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}

내 풀이
function solution(s) {
    if(s.length === 4 || s.length ===6){
        return s.split("").every(v=>!isNaN(v));
    }else{
        return false;
    }
}

9. 부족한 금액 계산하기

다른사람 풀이
#1
function solution(price, money, count) {
    let answer = 0;

    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }

    return answer > money ? answer - money : 0;
}

#2
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

내 풀이
function solution(price, money, count) {
    let sum = 0;
    for(let i = 1; i <= count; i++){
        sum += i * price;
    }
    const answer = sum - money;
    if(answer < 0)
        return 0;
    return answer;
}

10. 행렬의 덧셈

다른사람 풀이
function sumMatrix(A,B){
    return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
}

내 풀이
function solution(arr1, arr2) {
    let answer = [];
    for(let i = 0; i < arr1.length; i++){
        let sum =[];
        for(let j = 0; j<arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(sum);
    }
    return answer;
}

*/