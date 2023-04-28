/*2023.04.28
03 게임 맵 최단거리

내 풀이
// 최단거리는 bfs
function solution(maps) {
    var answer = 0;
    // 상,하(행이동), 좌,우(열이동)
    // 상,하,좌,우 행=dx=[-1,1,0,0];
    // 상,하,좌,우 열=dy=[0,0,-1,1];
    // dx,dy 상하좌우로 이동할시의 칸수
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    const xLen = maps.length; // 5 행
    const yLen = maps[0].length; // 5  열
    // 도착지점의 좌표
    const goalX = xLen - 1; 
    const goalY = yLen - 1;
    // bfs에 사용할 큐
    const queue = [];
    // 처음 시작은 가장 상단 0,0에서 시작하고 이동한 칸수는 1칸
    // x, y, 이동 칸수
    queue.push([0,0,1]);
    //bfs시작
    while(queue.length){
        // 현재위치, 현재까지 이동한 칸수를 큐에서 빼서 현재의 위치가 도착지점의 좌표와 같으면 현재까지 이동한 칸수를 반환
        const [curX, curY, move] = queue.shift();
        if(curY === goalY && curX === goalX)
            return move;
        // 상하좌우 4번 반복
        for(let i = 0; i < 4; i++){
            const nx = curX + dx[i];
            const ny = curY + dy[i];
            if(nx >= 0 && nx < xLen && ny >=0 && ny < yLen && maps[nx][ny] === 1){
                // 해당 좌표와 이동 칸수 1 증가
                queue.push([nx,ny,move+1]);
                // 다시 밟지 않도록 0으로 변경
                maps[nx][ny] = 0;
            }
        }
    }
    //모든 칸을 돌았으나 도착지점에 갈 수 없었고 반복문을 나왔다면 -1을 반환하는 것
    return -1;
}

*/