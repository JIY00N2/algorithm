/*
1. 문자열 뒤집기

다른사람 풀이
function solution(my_string) {
    return my_string.split('').reverse().join('');
}

내 풀이
function solution(my_string) {
    let answer='';
    // 문자열 똑같이 배열과 마찬가지로 인덱스로 꺼낼 수 있음
    for(let i = my_string.length-1; i>=0; i--){
        answer += my_string[i];
    }
    return answer;
}


2. 직각삼각형 출력하기

다른사람 풀이 
repeat() - 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환

function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}

내 풀이
반복할때는 +=

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = (Number(input[0]));
    let star=''
    for(let i=1; i <= n; i++){
        for(let j=1; j<=i; j++){
            star +='*';
        }
        star+='\n';
    }
    console.log(star);
});


3. 짝수 홀수 개수

다른사람 풀이
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}

내 풀이
function solution(num_list) {
    let evenCnt = 0;
    let oddCnt = 0;
    let answer = [];
    
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] % 2 === 0)
            evenCnt +=1;
        else oddCnt+=1;
    }
    answer = [evenCnt, oddCnt];
    return answer;
}

4. 문자 반복 출력하기

다른사람 풀이
function solution(my_string, n) {
    return my_string.split('').map(str => str.repeat(n)).join('');
}

내 풀이
function solution(my_string, n) {
    let answer = '';
    for(let i=0; i<my_string.length; i++){
        for(let j=0; j<n; j++){
            answer += my_string[i];
        }
    }
    return answer;
}
 */