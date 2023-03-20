/*
1. 영어가 싫어요 

다른사람 풀이 
function solution(numbers) {
    const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0 ; i<number.length; i++){
        numbers = numbers.split(number[i]).join(i)
    }
    return +numbers
}

내 풀이
const numberStrings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
function solution(numbers) {
    let answer = '';
    for(let i = 0; i<numbers.length; ){
        const compareString = numbers[i] + numbers[i+1];
        for(let j = 0; j<numberStrings.length; j++){
            const numberString = numberStrings[j];
            const compareNumberString = numberString[0] + numberString[1];
            if(compareString === compareNumberString){
                answer += String(j);
                i += numberString.length;
                break;
            }
        }
    }
    return Number(answer);
}

2. 인덱스 바꾸기

다른 사람 풀이
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}

내 풀이
function solution(my_string, num1, num2) {
    let newString = '';
    for(let i = 0; i<my_string.length; i++){
        if(i===num1){
            newString+=my_string[num2];
        }
        else if(i===num2){
            newString+=my_string[num1];
        }
        else{
            newString+=my_string[i];
        }
    }
    return newString ;
}

3. 한 번만 등장한 문자

다른사람 풀이
lastindexOf() - 주어진 값과 일치하는 부분을 fromIndwx로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환

function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}

내 풀이
const obj = {}
// obj.a
// obj['a']
function solution(s) {
    let answer = [];
    for(let i = 0; i<s.length; i++){
        const item = s[i];
        if(obj[item]){
            obj[item] +=1;
        }else{
            obj[item] = 1;
        }
    }
    // Object.entries() - 객체의 쌍을 하나씩 꺼내서 배열로 반환
    const objArray = Object.entries(obj);
    for(let i = 0; i<objArray.length; i++){
        const objItem = objArray[i];
        if(objItem[1]===1)
            answer.push(objItem[0]);
    }
    const sortedAnswer = answer.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    return sortedAnswer.join('');
}

4. 약수 구하기

내 풀이
function solution(n) {
    let answer = [];
    for(let i=1; i<=n; i++){
        if(n%i===0)
            answer.push(i);
    }
    return answer;
}
 */