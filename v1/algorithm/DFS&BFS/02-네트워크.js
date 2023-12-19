/*2023.04.28
02 네트워크

내 풀이
function solution(n, computers) {
    // const computers = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1]
    ];
    var answer = 0;
    const visited = Array.from({length:n}, i => false); //[ false, false, false ]
    // let visited = new Array(n).fill(false); // 방문하지않음
    function dfs(index){
        visited[index] = true; // 해당 노드 방문
        for(let i = 0; i < computers.length; i++){
            // 해당 노드를 기준으로 자신이 아니고, 방문하지 않은 연결된 다른 노드를 찾아 dfs실행
            if(computers[index][i] && !visited[i]){
                dfs(i);
            }
        }
    }
    // 첫번째 노드부터 방문하지 않았을 경우 dfs함수를 통해서 깊이 탐색 시작
    for(let i = 0; i < computers.length; i++){
        if(!visited[i]){
            dfs(i);
            answer++; // 네트워크수 증가
        }
    }
    return answer;
}
dfs
방문 여부를 체크하며 if문을 통해 해당 컴퓨터와 연결 되어있는지, 방문을 했었는지를 재귀 함수로 뻗어나가면서 확인하고 answer의 값을 증가시켜 답을 리턴했다.


# 강사님 풀이
// DFS 함수를 만듭니다.
function dfs(n, computers, visited, start) {
    const stack = [start]; // DFS의 시작점을 미리 초기화 합니다.

    while (stack.length > 0) { // 탐색이 끝날 때 까지 루프를 돌립니다.
        const curr = stack.pop(); // 요소를 하나 뽑습니다.

        visited[curr] = true; // 이미 탐색한 곳은 다음에 탐색을 방지하기 위해 체크합니다.

        for (let i = 0; i < n; i += 1) { // 탐색 가능한 곳을 찾습니다.
            if (!visited[i] && computers[curr][i]) {
                stack.push(i); // 가능하다면 스택에 추가합니다.
            }
        }
    }
}

function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false); // 방문한 노드를 기록하기 위한 배열을 선언합니다.

    for (let i = 0; i < n; i += 1) { // 노드 수 만큼 루프를 돌립니다.
        if (!visited[i]) { // 아직 방문하지 않은 곳이 있다면
            dfs(n, computers, visited, i); // 탐색합니다.
            answer += 1; // 영역 하나를 찾았으므로 하나 더해줍니다.
        }
    }

    return answer;
}


*/
