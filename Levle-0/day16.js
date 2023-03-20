/*
1. 편지

내 풀이
function solution(message) {
    return message.length * 2;
}

2. 가장 큰 수 찾기

다른 사람 풀이
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}

내 풀이
function solution(array) {
    var answer = [];
    const maxNum = Math.max(...array);
    answer.push(maxNum);
    for(let i = 0; i < array.length; i++){
        if(array[i] === maxNum)
            answer.push(i);
    }
    return answer;
}

3. 문자열 계산하기

다른사람 풀이
eval() - 문제풀이에만 사용하자
function solution(my_string) {
    return eval(my_string);
}

내 풀이
function solution(my_string) {
    const stringArr = my_string.split(" ");
    let answer = Number(stringArr[0]);
    for(let i = 1; i < stringArr.length; i+=2){
        const oper = stringArr[i];
        const num = Number(stringArr[i+1]);
        if(oper === "+"){
            answer += num;
        }else{
            answer -= num;
        }
    }
    return answer;
}

4. 배열의 유사도

다른사람 풀이
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}

내 풀이
function solution(s1, s2) {
    let cnt = 0;
    for(let i = 0; i < s2.length; i++){
        const s2item = s2[i];
        for(let j = 0; j < s1.length; j++){
            const s1item = s1[j];
            if(s2item === s1item){
                cnt+=1;
            }
        }
    }
    return cnt;
}
 */