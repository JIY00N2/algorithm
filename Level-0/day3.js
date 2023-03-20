/*
2. 중앙값 구하기

sort() - 문자열 기준으로 정렬한다 따라서 숫자 정렬 할때는
sort((a,b)=>a-b)

다른사람 풀이
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

내 풀이
function solution(array) {
    const newArray = array.sort((a,b)=>a-b);
    return answer = newArray[Math.floor(newArray.length / 2)];
}

3. 최빈값 구하기
내 풀이
function solution(array) {
    const sortedArray = array.sort((a,b)=>a-b);
    let cnt = 0; //각 숫자의 갯수
    let mode = -1; // 최빈값이 뭔지
    let modeRepeatCnt = 0; //최빈값이 될 때 몇 번 반복해서 된건지
    let repeatCnt = 0; //현재 똑같은 숫자가 몇번 반복했는지
    let beforeNum = -1; //이전 숫자
    let isDupMode = false; //최빈값이 중복 됐는지
    while(cnt<array.length){
        // 이전 숫자랑 지금 숫자랑 같지 않으면
        if(beforeNum!==sortedArray[cnt]){
            // 지금 숫자는 1번 반복
            repeatCnt=1;
        }else{
            // 반복한 만큼 +1
            repeatCnt+=1;
        }
        // 최빈값 중복 확인
        // 지금 반복 횟수가 최빈값 반복 횟수랑 같을때
        if(repeatCnt===modeRepeatCnt){
            // 최빈값과 지금 숫자가 다를때
            if(mode !==sortedArray[cnt]){
                // 중복이 발생
                 isDupMode = true;
            }
        }
        // 지금 숫자의 반복횟수가 최빈값의 반복 횟수보다 크다면
        if(repeatCnt>modeRepeatCnt){
            // 최빈값은 지금 숫자
            mode = sortedArray[cnt];
            // 최빈값의 반복 횟수는 지금 숫자의 반복 횟수
            modeRepeatCnt = repeatCnt;
            isDupMode=false;
        }
        // 이전 숫자는 현재 숫자로 변경
        beforeNum = sortedArray[cnt];
        cnt+=1;
        sortedArray[cnt];
    }
    if(isDupMode) return -1;
    return mode;
}
//1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다
//2. 최반값을 그때그때 기록한다.

4. 짝수는 싫어요

내 풀이
function solution(n) {
    const answer = [];
    for(let i = 1; i <= n; i++){
        if(i % 2 === 1){
            answer.push(i);
        }
    }
    return answer;
}
 */
