/*
1. 모음 제거

다른사람 풀이 
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

내 풀이
function solution(my_string) {
    let answer = '';
    const vowels = ['a','e','i','o','u'];
       
    for(let i = 0; i<my_string.length; i++){
        let item = my_string[i];
        let isVowel = false;
        for(let j = 0; j<vowels.length; j++){
            if(item === vowels[j]){
                isVowel = true;
                break;
            } 
        }
        if(isVowel) continue;
        answer += item;
    }
    return answer;
}

2. 문자열 정렬하기(1)
Number.isNaN() - 전달된 값이 숫자값인지 확인

다른 사람 풀이
function solution(my_string){
    let answer = [];
    for(let i = 0; i<my_string.length; i++){
        // 숫자가 아닌것은 NaN 반환
        const item = Number(my_string[i]);
        // NaN이 있으면
        if(Number.isNaN(item))
            continue;
        answer.push(item);
    }
    return answer.sort((a,b)=>a-b);
}

내 풀이
function solution(my_string) {
    let answer = [];
    const str = my_string.replace(/[a-z]/g,'');
    const strArr = str.split('');
    const sortedStrArr = strArr.sort((a,b)=>a-b);
    for(let i = 0; i<sortedStrArr.length; i++)
        answer[i] = Number(sortedStrArr[i]);
    return answer;
}

3. 숨어있는 숫자의 덧셈(1)

다른사람 풀이
function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '')
                            .split('')
                            .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}

내 풀이
function solution(my_string) {
    var answer = 0;
    let sum = 0;
    const strArr = my_string.replace(/[a-zA-Z]/g,'').split('');
    for(let i = 0; i< strArr.length; i++){
        sum += Number(strArr[i]);
    }
    return sum;
}

4. 소인수분해

내 풀이
function solution(n) {
    let answer = [];
    // n!==1 다 나누어 떨어졌을 때
    for(let i = 2; n!==1; i++){
        if(n%i===0){
            // 나눌 수 있을만큼 계속 나눔
            while(n%i===0){
                n/=i; 
            }
            answer.push(i);
        }
    }
    return answer;
}
 */