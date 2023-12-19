/*
1. 점의 위치 구하기

다른사람 풀이 
function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}

내 풀이
function solution(dot) {
    let answer = 0;
    if(dot[0]>0 && dot[1]>0) answer = 1;
    else if(dot[0]<0 && dot[1]>0) answer = 2;
    else if(dot[0]<0 && dot[1]<0) answer = 3;
    else answer = 4;
    return answer;
}

2. 2차원으로 만들기

다른 사람 풀이
function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}

내 풀이
function solution(num_list, n) {
    
    let answer=[];
    let innerArr=[];
    
    for(let i=0; i<num_list.length; i++){
        const item = num_list[i];
        innerArr.push(item);
        if(innerArr.length===n){
            answer.push(innerArr);
            innerArr=[];
        }
    }
    return answer;
}

3. 공 던지기

다른사람 풀이
function solution(numbers, k) {

    return numbers[((2 * (k -1))) % numbers.length];
}

내 풀이
function solution(numbers, k) {
    let answer = 0;
    let index = (2*(k-1)) % numbers.length;
    answer = numbers[index];
    return answer;
}

4. 배열 회전시키기

다른사람 풀이
function solution(numbers, direction) {
    var answer = [];

    if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }

    answer = numbers;

    return answer;
}

내 풀이
function solution(numbers, direction) {
    let answer = [];
    if(direction==="right"){
        answer.push(numbers[numbers.length-1]);
        for(let i = 0; i<numbers.length-1; i++){
            answer.push(numbers[i]);
        }
    }
    else{
        for(let i = 1; i<numbers.length; i++){
            answer.push(numbers[i]);
        }
        answer.push(numbers[0]);
    }
    return answer;
}
 */