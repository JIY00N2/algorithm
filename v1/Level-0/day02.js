/* 
1. 두 수의 나눗셈
parseInt() - 정수 반환

다른 사람 풀이
function solution(num1, num2) {
    var answer = parseInt((num1/num2) * 1000);
    return answer;
}

내 풀이 - 음수일때는 안됨
function solution(num1, num2) {
    var answer = Math.floor(num1 / num2 * 1000);
    return answer;
}

2. 숫자 비교하기

다른 사람 풀이
function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}

내 풀이
function solution(num1, num2) {
    var answer = 0;
    if (num1 === num2){
        answer = 1;
    }
    else{
        answer = -1;
    }
    return answer;
}

3. 분수의 덧셈

분자 분모의 최대 공약수로 나눔
1. 분자 분모중 작은 수 찾기
2. 작은수를 분자 분모로 나눠보기
3-1. 나누어 떨어지면(나머지=0
)그 나눈 수가 최대 공약수
3-2 안나누어 떨어지면 작은 수를 1 줄이고 2로 돌아감

다른 사람 풀이
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

function solution(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum/gcd, num/gcd];
}

내 풀이
function solution(numer1, denom1, numer2, denom2) {
    let top = (numer1 * denom2) + (denom1 * numer2);
    let bottom = denom1 * denom2;
    
    let minNum;
    if(top<bottom){
        minNum=top;
    }else{
        minNum=bottom;
    }
    while(true){
        if(top%minNum===0 && bottom%minNum==0){
            return[top/minNum, bottom/minNum]
        }
        minNum-=1;
    }

}

4. 배열 두배 만들기 
다른 사람 풀이
# 1
map() - 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const solution = (numbers) => numbers.map((number) => number * 2)
# 2
push() - 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
function solution(numbers) {
    var answer = [];
    for(let i=0;i<numbers.length;i++){
        answer.push(numbers[i]*2)
    }
    return answer;
}

내 풀이
function solution(numbers) {
    let answer=[]
    for(let i = 0; i < numbers.length; i++){
       answer[i] = numbers[i]*2;
    }
    return answer;
}
*/

