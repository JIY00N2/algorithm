/*2023.04.12
1. [1차] 다트 게임 ❌

다른사람 풀이 
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}

내 풀이
function solution(dartResult) {
    let answer = 0;
    const stack = [];
    let sum = [];
    const dartArr = dartResult.split("");
    for(let i = 0; i < dartArr.length; i++){
        if(isNaN(dartArr[i]) === false){
            if(dartArr[i] === "0" && dartArr[i-1] === "1"){
                stack.pop();
                stack.push(10);
            }else{
                if(stack.length > 0)
                    sum.push(stack.pop());
                stack.push(+dartArr[i]);
            }
        }
        if(dartArr[i]==="D")
            stack[0] = Math.pow(stack[0],2);
        if(dartArr[i]==="T")
            stack[0] = Math.pow(stack[0],3);
        if(dartArr[i]==="*"){
            stack[0] = stack[0] * 2;
            if(sum.length > 0){
                const temp = sum.pop() * 2;
                sum.push(temp);
            }
        }
        if(dartArr[i] === "#")
            stack[0] = stack[0] * -1;
    }
    answer = sum.reduce((acc,cur)  => acc + cur, stack[0]);
    return answer;
}
// 숫자가 들어오면 stack에 숫자로 변환해 넣는다.
// 이전의 stack에 숫자가 들어있다면 빼서 sum 배열로 이동
// 10은 1과 0이연속으로 들어온다면 stack에 10을 넣어준다.
// s는 변화가 없으므로 구현 x
// d는 stack에 있는 숫자를 제곱
// t는 stack에 있는 숫자를 세제곱
// *는 stack에 있는 숫자에 2를 곱해주고 sum에 숫자가 있다면 배열 마지막 숫자를 빼내서 2를 곱해주고 다시 넣는다.
// #는 stack에 있는 숫자에 -1을 곱해줌
// 마지막은 stack에 있는 숫자와 sum 배열의 숫자들을 모두 더함

2. 추억 점수 ❌

다른 사람 풀이
function solution(name, yearning, photo) {
    let obj = {};
    for(let i = 0; i < name.length; i++){
        obj[name[i]] = yearning[i];
    }
    return photo.map(value => value.map(v => obj[v] ? obj[v] : 0).reduce((acc,cur) => acc + cur,0))
}

내 풀이
function solution(name, yearning, photo) {
    const result = [];
    const hash = new Map();
    name.forEach((item, index) =>{
        hash.set(item, yearning[index]);
    })
    //Map(1) { 'may' => 5 }
    //Map(2) { 'may' => 5, 'kein' => 10 }
    //Map(3) { 'may' => 5, 'kein' => 10, 'kain' => 1 }
    //Map(4) { 'may' => 5, 'kein' => 10, 'kain' => 1, 'radi' => 3 }
    for(let i = 0; i < photo.length; i++){
        let cnt = 0;
        for(let j = 0; j < photo[i].length; j++){
            const score = hash.get(photo[i][j]);
            if(!score)
                continue;
            cnt += score;
        }
        result.push(cnt);
    }
    return result;
}
*/