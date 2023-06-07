/*
02-완주하지 못한 선수 🔺
내 풀이

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}
테스트 1 〉	통과 (50.07ms, 47.8MB)
테스트 2 〉	통과 (74.04ms, 53.7MB)
테스트 3 〉	통과 (159.62ms, 58.5MB)
테스트 4 〉	통과 (120.36ms, 60.9MB)
테스트 5 〉	통과 (100.14ms, 60.4MB)

다른 사람 풀이
function solution(participant, completion) {
    const map = new Map();
    
    for(let i = 0; i < participant.length; i++){
        let p = participant[i];
        let c = completion[i];
        // 참가자 키에 해당하는 값을 가져옴, 없으면 초기 값 0
        let pCnt = map.get(p) || 0;
        // 키에 해당하는 값이 있다면 1을 더한다.
        map.set(p, pCnt+1);
        
        let cCnt = map.get(c) || 0;
         // 키에 해당하는 값이 있다면 1을 뺀다.
        map.set(c, cCnt-1);
    }
    // cnt가 0보다 크면 완주하지 못함
    for(const [person, cnt] of map){
        if(cnt > 0)
            return person;
    }
}
// 정렬로 풀고 싶은데 ... 시간복잡도...

// p.length > c.length p로 돌리자
// p에 값을 저장하고 있다면 1 증가, c에 값이 있다면 -1

테스트 1 〉	통과 (46.49ms, 54.1MB)
테스트 2 〉	통과 (55.94ms, 61.9MB)
테스트 3 〉	통과 (32.69ms, 66.9MB)
테스트 4 〉	통과 (55.81ms, 66.4MB)
테스트 5 〉	통과 (83.81ms, 62.9MB)
*/
