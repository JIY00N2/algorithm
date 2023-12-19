/* 2023.04.05
1. 최솟값 만들기
다른 사람 풀이
function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}

내 풀이
function solution(A,B){
    let sum = 0;
    const ascA = A.sort((a,b)=>a-b);
    const desB = B.sort((a,b)=>b-a);
    for(let i = 0; i < A.length; i++){
        sum += ascA[i] * desB[i];
    }
    return sum;
    // 배열 A는 오름차순, 배열 B는 내림차순으로 정렬한다.
    // 서로 곱한것이 최소
}

# 2023.05.04 ⭕
function solution(A,B){
    let sum = 0;
    const sortA = A.sort((a,b)=>a-b); // 1 2 4
    const sortB = B.sort((a,b)=>b-a); // 5 4 4
    for(let i = 0; i < A.length; i++){
        sum += sortA[i] * sortB[i];
    }  
    return sum;
}


2. 올바른 괄호 ⭕
스택 이용
function solution(s){
    let stack = [];
    let cnt = 0;
    for(let i = 0; i < s.length; i++){
        const item = s[i];
        if(item === "("){
            stack.push(item);
            cnt++;
        }
        else{
            stack.pop();
            cnt--;
        }  
    }
    if(stack.length > 0 || cnt !==0) return false;
    return true;
}

#2
function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}

# 2023.04.17 🔺
처음이 ")" 일떄를 고려를 안함
function solution(s){
    const stack = [];
    if(s[0] === ")")
        return false;
    for(let i = 0; i < s.length; i++){
        const item = s[i];
        if(item === "("){
            stack.push(item);
        }else{
            stack.pop();
        }
    }
    if(stack.length > 0)
        return false;
    else
        return true;

}
*/