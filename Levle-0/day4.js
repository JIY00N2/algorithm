/*
1. 피자 나눠먹기(1)

다른사람 풀이
Math.ceil() - 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.(올림)
function solution(n) {
    return Math.ceil(n / 7)
}
내 풀이
function solution(n) {
    if(n%7 === 0) return Math.floor(n/7);
    else return Math.floor((n/7)+1);
}

2. 피자 나눠먹기(2)

내 풀이
function solution(n) {
    for(let i = 1; i <=n; i++){
        if((6*i) % n === 0) return i; 
    }
}

3. 피자 나눠먹기(3)

내 풀이
function solution(n) {
    for(let i = 1; i <=n; i++){
        if((6*i) % n === 0) return i; 
    }
}

4. 배열의 평균값

다른사람 풀이
for(i of numbers){} - numbers에서 가져온 값을 순차적으로 하나씩 작동

function solution(numbers) {
    var answer = 0;
    for(i of numbers) {
        answer += i
    }
    return answer / numbers.length;

}

내 풀이
function solution(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    answer = sum / numbers.length;
    return answer;
}
 */