/*2023.04.
# 

다른사람 풀이 

내 풀이
function solution(begin, target, words) {
    let answer = 0;
    let visited = []; // 방문 여부를 저장할 변수 선언
    let queue = []; // bfs를 돌기 위한 큐 선언
    queue.push([begin, answer]); // 1. 큐에 [시작단어, 변경횟수]를 넣음
    // 2. words배열에 target이 없으면 0 반환
    if(!words.includes(target))
        return 0;
    // 3. bfs
    while(queue.length){
        let [v, cnt] = queue.shift(); // 큐의 맨 왼쪽 값을 꺼냄
        // 꺼낸 값과 target이 같으면 cnt 반환
        if(v === target)
            return cnt;
        //forEach() - 주어진 함수를 배열 요소 각각에 대해 실행
        words.forEach(word => {
            let notEqual = 0; // 다른 갯수를 구하기위해 변수를 선언
            // 방문했던 단어면 pass
            if(visited.includes(word))
                return;
            //word를 반복하면서 다른 알파벳의 갯수를 체크한다
            for(let i = 0; i < word.length; i++){
                if(word[i] !== v[i])
                    notEqual++;
            }
            // 만약 다른게 1개라면
            if(notEqual === 1){
                // 큐에 [단어, 횟수] 형태로 넣음
                // ++cnt는 cnt에 이미 1이 더해진 상태로 보여줌
                queue.push([word, ++cnt]);
                // ex) hit->hot이 되었을때 1이된다.
                visited.push(word); //방문처리
            }
        });
    }
    
    return answer;
}
// 최소 몇단계의 과정 -> bfs
// 큐를 이용, 큐에서 뺀 노드는 항상 방문처리, 조건에 맞으면 큐에 푸시, 정답일때 return
*/
