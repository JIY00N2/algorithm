/*2023.04.19~20
1. 크레인 인형뽑기 게임 ❌

다른사람 풀이 
function solution(board, moves) {

    var count =0;
    var stack = [];

    for(var i=0;i<moves.length;i++){
        var now = moves[i]-1
        for(var j=0;j<board.length;j++){
            if(board[j][now]!=0){
                if(stack[stack.length-1]===board[j][now]){
                    stack.pop();
                    count+=2;
                }
                else{
                    stack.push(board[j][now])
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    console.log(stack)
    return count
}

내 풀이
function solution(board, moves) {
    let n = board.length;
    // 2차원 배열을 1차원 배열로 피기
    board = board.flat();
    // rotatedBoard [ [], [], [], [], [] ]
    let rotatedBoard = Array.from({length:n},(i)=>[]);
    // 격자의 세로줄이 하나의 배열이 되도록 2차원 배열 방향 변경
    for(let i = 0; i < board.length; i++){
        if(board[i]) // 0제거
            rotatedBoard[i % n].push(board[i]);
    }
    // console.log(rotatedBoard);
    // [ [ 4, 3 ], [ 2, 2, 5 ], [ 1, 5, 4, 1 ], [ 4, 3 ], [ 3, 1, 2, 1 ] ]
    // rotatedBoard [4,3]
    let stack = [];
    let cnt = 0;
    // moves 배열 순회하며 인형 꺼내서 stack에 집어넣기
    for(let move of moves){
        let doll = rotatedBoard[move-1].shift(); 
        // 4 3 1 1 3 2 undefined 4
        if(doll === undefined)
            continue;
        if(stack[stack.length-1]===doll){
            stack.pop();
            cnt+=2;
        }else{
            stack.push(doll);
        }
        
    }
    return cnt;
}
2. 문자열 나누기 ❌ 

다른 사람 풀이
function solution(s) {
    let answer = 0;
    let current;
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(count === 0) {
            answer++;
            current = s[i]
            count = 1
        } else {
            if(current !== s[i]) count--;
            else count++;
        }
    }

    return answer;
}

내 풀이
function solution(s) {
    let cnt = 0;
    let stack = [];
    for(let i = 0; i < s.length; i++){
        stack.push(s[i]); // [ 'b', 'a', 'n', 'a', 'n', 'a' ]
        // filter를 통해 기준 글자와 같은 배열, 같지 않은 배열을 생성
        const same = stack.filter((v) => v === stack[0]); // b
        const notSame = stack.filter((v) => v!==stack[0]); // a
    
        if(same.length === notSame.length){
            cnt++;
            stack = [];
        }   
    }
    // 만약 스택에 값이 남아있다면 처리되지 안은 문자열들이므로 하나의 문자열로 본다.
    if(stack.length !== 0)
        cnt++;
    return cnt;
}
*/