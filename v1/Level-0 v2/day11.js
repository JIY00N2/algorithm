/*
1. 문자 개수 세기
function solution(my_string) {
    let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var answer = new Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) {
        answer[alp.indexOf(my_string[i])]++;
    }
    return answer;
}
3. 글자 지우기 
function solution(my_string, indices) {
    let answer = '';
    for(let i = 0; i<my_string.length; i++){
        if(!indices.includes(i)){
            answer += my_string[i]
        }
    }
    return answer;
}
 */