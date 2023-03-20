/*
1. 주사위의 개수 

다른사람 풀이 
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

}

내 풀이
function solution(box, n) {
    let answer = 1;
    for(let i = 0; i<box.length; i++){
        answer *= ~~(box[i] / n);
    }
    return answer;
}

2. 합성수 찾기

다른 사람 풀이
const getIsCount = (i) =>{
    let isCount = false;
    for(let num = 2; num < i-1; num++){
        if(i%num===0)
            isCount = true;
    }
}
function solution(n){
    let answer = 0;
    for(let i = n; i>=1; i--){
        const isCount = getIsCount(i);
        if(isCount){
            answer+=1;
        }
    }
    return answer;
}

내 풀이
function solution(n) {
    let answer = 0;
    //합성수인가? 1과 자기자신을 빼고 판단
    //1은 합성수가 아님
    for(let i = n; i>=1; i--){
        let isCompositeNum = false;
        
        for(let j=2; j<i;j++){
            if(i%j===0)
                isCompositeNum=true;
        }
        if(isCompositeNum){
            answer+=1;
        }
    }
    return answer;
}

3. 최댓값 만들기(1)

다른사람 풀이
#1
function solution(numbers) {
    let [a, b] = numbers.sort((a,b) => b - a);
    return a * b;
}

#2 Math.max
function solution(numbers){
    let maxValue = -1;
    for(let i = 0; i<numbers.length; i++){
        for(let j = i-1; j<numbers.length; j++){
            maxValue = Math.max(maxValue, numbers[i]*numbers[j]);
        }
    }
    return maxValue;
}

내 풀이
function solution(numbers) {
    let answer = 0;
    const sortedNumbersArr = numbers.sort((a,b)=>b-a);
    answer = sortedNumbersArr[0] * sortedNumbersArr[1];
    return answer;
}

4. 팩토리얼

다른사람 풀이
function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    return i;
}

내 풀이
const getFactorial = (i) => {
    let factResult = 1;
    for(let j = 1; j<=i; j++){
        factResult *=j;
    }
    return factResult;
}
function solution(n) {
    for(let i = 1; ; i++){
        const factResult = getFactorial(i);
        if(n < factResult){
            return i-1;
        }
    }
}
 */