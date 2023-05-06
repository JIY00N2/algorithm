/*2023.04.13
1. 짝지어 제거하기 ❌

다른사람 풀이 
function solution(s){
    // s가 홀수일때는 0 리턴
    if(s.length % 2 !== 0)
        return 0;
    let stack = [];
    // 문자열을 앞에서부터 끝까지 탐색하면서 스택의 맨 마지막 요소와 동일하면
    // 스택에서 빼고, 다르면 스택에 집어넣음
    for(let i = 0; i < s.length; i++){
        if(stack[stack.length - 1] === s[i])
            stack.pop();
        else
            stack.push(s[i]);           
    }
    //  탐색이 끝나고 스택에 요소가 남아있다면 짝이 지어지지 않은 문자열이 있다
    return stack.length === 0 ? 1 : 0;
}

내 풀이 시간초과..
function solution(s){
    const arr = s.split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            let result = arr.splice(i,2);
            i = -1;
        }
    }
    return arr.length === 0 ? 1 : 0;
}

2. 영어 끝말잇기 ❌

내 풀이
function solution(n, words) {
    let answer = [0,0];
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        const num = i % n + 1;
        const turn = Math.ceil((i+1)/n);
        
        if(i > 0){
            // 이전 단어 마지막 글자
            let last = words[i-1].split("").pop();
            // 중복이거나 틀린 경우
            if(i >  words.indexOf(word) || words[i][0] !== last){
                answer = [num, turn];
                break;
            }
        }
    }
    return answer;
}

3. 카펫 ❌

내 풀이
function solution(brown, yellow) {
    let answer = [];
    // 가로 , 세로는 최소 3부터 시작
    for(var height = 3; height<= (brown+yellow)/height; height++){
        var width = Math.floor((brown+yellow)/height);
        if((width-2)*(height-2) === yellow)
            break;
    }
    return [width, height];
}
*/