/*
1. 정수를 나선형으로 배치하기
function solution(n) {
    const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const answer = Array.from(new Array(n), () => new Array(n).fill(0))
    let x = 0, y = 0, dir = 0, num = 1;
    while(num <= n * n) {
        answer[x][y] = num;
        let nextX = x + move[dir][0];
        let nextY = y + move[dir][1];
        if (nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || answer[nextX][nextY] !== 0) {
            dir = (dir + 1) % 4;
            nextX = x + move[dir][0];
            nextY = y + move[dir][1];
        }
        x = nextX;
        y = nextY;
        num ++;

    }
    return answer;
}
4. 이차원 배열 대각선 순회하기
function solution(board, k) {
    let result = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(i + j <= k){
                result += board[i][j];            
            }
        }
    }
    return result;
}
 */