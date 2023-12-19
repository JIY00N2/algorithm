/*2023.04.25
03. 올바른 괄호

다른사람 풀이
#1
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

#2 
function solution(s){
    let cnt=0;

    if(s[s.length-1]==='(' || s[0]===')') return false;

    for(let i=0; i<s.length; i++){ 
        s[i]==='(' ? cnt++ : cnt--;
        if(cnt<0) break;
    }

    return cnt===0 ? true : false;
}

내 풀이
function solution(s){
    if(s[0]===")")
        return false;   
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i]==="("){
            stack.push(s[i]);
        }else{
            stack.pop();
        }
    }
    if(stack.length === 0)
        return true;
    else
        return false;
}
*/