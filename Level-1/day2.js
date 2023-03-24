/* 2023.03.27

1. 나머지가 1이 되는 수 찾기 

내 풀이
function solution(n) {
    for(let i = 1; i<n; i++){
        if(n % i === 1){
            return i;
        }
    }
}

2. 정수 내림차순으로 배치하기  

다른사람 풀이
function solution(n) {
    return parseInt((n+"").split("").sort().reverse().join(""));
}

내 풀이
function solution(n) {
    const strArr = String(n).split("").sort((a,b)=>b-a);
    const num = Number(strArr.join(""));
    return num;
}

3. 문자열을 정수로 바꾸기

다른사람 풀이
function strToInt(str){
  return +str;
}

내 풀이
function solution(s) {
    return Number(s);
}

4. 하샤드 수

다른사람 풀이
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}

내 풀이
function solution(x) {
    let answer = true;
    const str = String(x);
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        sum += Number(str[i]);
    }
    if(x % sum === 0) answer = true;
    else answer = false;
    return answer;
}

5. 두 정수 사이의 합

다른사람 풀이
function adder(a, b){
    var result = 0
    //함수를 완성하세요
    return (a+b) * (Math.abs(a-b)+1) / 2;
}

내 풀이
function solution(a, b) {
    let sum = 0;
    let max =0, min = 0;
    if(a > b){
        max = a;
        min = b;
    }
    else{
        max = b;
        min = a;
    }
    for(let i = min; i<=max; i++){
        sum +=i;
    }
    return sum;
}

6. 콜라츠 추측

다른사람 풀이
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
        answer++;
  }
    return num == 1 ? answer : -1;
}

내 풀이
function solution(num) {
    let cnt = 0;
    if(num===1) return cnt = 0;
    for(let i = 0; i < 500; i++){
        if(num % 2 === 0){
            num = num / 2;
            cnt+=1;
         }else{
            num = num * 3 + 1;
            cnt+=1;
        }
        if(num ===1){
            return cnt;
        }
    }
    return cnt = -1;
}

7. 서울에서 김서방 찾기

다른사람 풀이
function findKim(seoul){
  let idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}

내 풀이
function solution(seoul) {
    let index = 0;
    for(let i = 0; i < seoul.length; i++){
        const word = seoul[i];
        if(word === "Kim"){
            index = i;
        }
    }
    return "김서방은 " + index + "에 있다"
}

8. 나누어 떨어지는 숫자 배열

다른사람 풀이
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

내 풀이
function solution(arr, divisor) {
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        if(item % divisor === 0){
            answer.push(item);
        }
    }
    const sortedArr = answer.sort((a,b)=>a-b);
    if(sortedArr.length === 0)
        answer.push(-1);
    return sortedArr;
}

9. 핸드폰 번호 가리기

다른사람 풀이
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
  }

내 풀이
function solution(phone_number) {
    let answer = '';
    for(let i = 0; i < phone_number.length ; i++){
        if(i < phone_number.length - 4){
            answer += phone_number[i].replace(/^[0-9]/g,"*");
        }else{
            answer+=phone_number[i];
        }     
    }
    return answer;
}

10. 음양 더하기

다른사람 풀이
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

내 풀이
function solution(absolutes, signs) {
    let sum = 0;
    for(let i = 0; i< signs.length; i++){
        const bool = signs[i];
        const num = absolutes[i];
        if(bool === true){
            sum += num;
        }else{
            sum -= num;
        }
    }
    return sum;
}

*/