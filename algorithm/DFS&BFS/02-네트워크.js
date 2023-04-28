/*2023.04.28
02 네트워크

내 풀이
function solution(n, computers) {
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
/*dfs
방문 여부를 체크하며 if문을 통해 해당 컴퓨터와 연결 되어있는지, 방문을 했었는지를 재귀 함수로 뻗어나가면서 확인하고 answer의 값을 증가시켜 답을 리턴했다.
*/
*/