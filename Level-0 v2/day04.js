/*
1.코드 처리하기
function solution(code) {
    let answer = '';
    let mode = 0;
    for(let i = 0; i<code.length; i++){
        if(code[i] == "1"){
            if(mode == 0)
                mode = 1;
            else
                mode = 0;
            continue;
        }
        if(mode == 1 && i % 2==1){
            answer += code[i]
        }
        else if(mode == 0 && i % 2==0){
            answer += code[i]
        }
    }

    if(answer.length == 0){
        return "EMPTY";
    }
    return answer;
}


function solution(code) {
    let odd = false
    return Array.from(code).reduce((acc, v, i) => {
        if (v === '1') {
            odd = !odd
            return acc
        }
        return (i % 2 === (odd ? 1 : 0)) ? acc + v : acc
    }, '') || 'EMPTY'
}
 */
