/*
1. 숫자 찾기
indexOf() - 배열에서 지정된 요소를 찾을 수 있는 첫 번쨰 인덱스를 반환하고
존재하지 않으면 -1을 반환
includes() - 배열이 항목 중 특정 값을 반환 true하거나 
false적절하게 포함하는지 여부를 결정합니다.
toString() - 문자열을 반환하는 Object

다른사람 풀이 
function solution(num, k) {
    var answer = num.toString()
    if (answer.includes(k)) {
        return answer.indexOf(k) + 1;
    } else {
        return -1;
    }
}

내 풀이
function solution(num, k) {
    let answer = 0;
    const strArr = String(num).split('');
    let numArr = [];
    for(let i = 0; i<strArr.length; i++){
        numArr.push(Number(strArr[i])); [2,9,1,8,3]
        const item = numArr[i];
        if(numArr.indexOf(k)===-1){
            answer = -1
        }else{
            answer = numArr.indexOf(k) + 1;
        }
    }
    return answer;
}

2. n의 배수 고르기

다른 사람 풀이
function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
}

내 풀이
function solution(n, numlist) {
    let answer = [];
    for(let i = 0; i < numlist.length; i++){
        const item = numlist[i];
        if(item % n === 0){
            answer.push(item);
        }
    }
    return answer;
}

3. 자릿수 더하기

다른사람 풀이
function solution(n) {
    let result = 0;

    while (n > 0) {
        result += n % 10;

        n = Math.floor(n/10);
    }

    return result;
}

내 풀이
function solution(n) {
    let sum = 0;
    const strArr = String(n).split('');
    let numArr = [] 
    for(let i = 0; i < strArr.length; i++){
        numArr.push(Number(strArr[i]));
        sum += numArr[i];
    } 
    return sum;
}

4. OX퀴즈

내 풀이
function solution(quiz) {
    let answer = [];
    for(let i = 0; i < quiz.length; i++){
        const item = quiz[i];
        const [firstNum, oper, secondNum, , result] = item.split(' ').map((v,index)=>{          
            if(index === 1){
                return v;
            }
            return Number(v);
        });
        const calResult = oper === "+" ? firstNum+secondNum : firstNum - secondNum;
        if(calResult===result){
                answer.push("O");
        }else{
                answer.push("X");    
        }
    }
    return answer;
}
//1. quiz 배열의 원소를 하나씩 꺼낸다
//2. 그 원소를 ' '으로 나워서 숫자와 연산자를 나눈다.
// 0 -> 첫번쨰 숫자, 1 -> 연산자, 2 -> 두번째 숫자, 4 -> 결과
//3. 실제로 계산해보고 값이 맞으면 o , 아니면 x를 answer에 넣는다.
 */