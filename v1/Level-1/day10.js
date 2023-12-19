/*2023.04.14
1. 체육복(그리디) ❌

내 풀이
function solution(n, lost, reserve) {
    let answer = 0;
    // 학생들이 가지고 있는 체육복 수를 모두 1로 채움
    // 1 1 1 1 1
    const clothes = Array(n).fill(1);
    // 도난당한 체육복 수를 0으로 채움
    // 1 0 1 0 1
    lost.map((idx)=>clothes[idx-1]=0);
    // 여벌있는 학생들의 체육복 수 1 증가
    // 2 0 2 0 2
    reserve.map((idx)=>clothes[idx-1] +=1);
    
    for(let i = 0; i < n; i++){
        // 체육복이 0개인 학생이 앞사람한테 받와왔을떄
        if(clothes[i] === 0 && clothes[i-1] === 2){
            clothes[i] = 1;
            clothes[i-1] = 1;
        }
        // 체육복이 0개인 학생이 뒷사람한테 받아왔을떄
        else if(clothes[i] === 0 && clothes[i+1] === 2){
            clothes[i] = 1;
            clothes[i+1] = 1;
        }
    }
    return clothes.filter(i=>i>0).length;
}

2. 완주하지 못한 선수(해시) ❌

내 풀이
function solution(participant, completion) {
    let answer = '';

    const sortedP = participant.sort();
    const sortedC = completion.sort();
   
    for(let i = 0; i < sortedP.length; i++){
        if(sortedP[i] !== sortedC[i]){
            answer = sortedP[i];
            return answer;
        }    
    }
}
*/