/*2023.04.19
1. H-index 🔺

내 풀이
function solution(citations) {
    var answer = 0;
    const sort = citations.sort((a,b)=>b-a);
    for(let i = 0; i < sort.length; i++){
        if(sort[i] >= i + 1)
            answer = i + 1;
    }
    return answer;
}
// h지수 구하는 법
// 인용된 수를 내림차순 정렬 -> citation과 논문 수가 같아지거나 작아짐

2. 괄호 회전하기 🔺

다른 사람 풀이
function solution(s) {
    if(s.length % 2 === 1) return 0;

    let answer = 0;
    const mapping = { "}" : "{", "]" : "[", ")" : "("};

    for(let i = 0; i < s.length; i++) {
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        let flag = true;

        for(let j = 0; j < s.length; j++) {
            if(rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{" )
                stack.push(rotate[j]);
            else {
                const last = stack.pop();
                if(last !== mapping[rotate[j]]) {
                    flag = false
                    break;
                }
            }
        }

        if(flag) answer++;
    }

    return answer;
}

내 풀이
function solution(s) {
    const stack = [];
    let cnt = 0;
    let isRight = true;
    // 홀수이면 무조건 0
    if(s.length % 2 === 1)
        return 0;
    for(let i = 0; i < s.length; i++){
        let str = s.slice(i) + s.slice(0,i);
        isRight = true;
        for(let j = 0; j < str.length; j++){
            const item = str[j];
            if(item === "(" || item === "{" || item === "["){
                stack.push(item);
            }else{
                let leftItem = stack.pop();
                if(item === ")" && leftItem ==="(") continue;
                if(item === "}" && leftItem ==="{") continue;
                if(item === "]" && leftItem ==="[") continue;
                isRight = false;
                break;
            }
        }
        if(isRight) cnt++;
    }
    return cnt;
}
*/