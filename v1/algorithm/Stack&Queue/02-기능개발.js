/*2023.04.25
02. 기능개발 

다른사람 풀이 
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}

내 풀이
function solution(progresses, speeds) {
    const restDay = []; // 7 3 9
    for(let i = 0; i < progresses.length; i++){
        restDay.push(Math.ceil((100 - progresses[i]) / speeds[i])); 
    }
    let cnt = 1;
    let maxDay = restDay[0]; // 7
    let cntArr = [];
    for(let i = 1; i < restDay.length; i++){
        if(maxDay >= restDay[i]){   // 7 > 3
            cnt++;
        }else{ 
            maxDay = restDay[i];
            cntArr.push(cnt);
            cnt = 1;
        } 
    }
    cntArr.push(cnt);
    return cntArr;
}
// 1. 남은 일수의 배열 만듬
// 2. 앞에서부터 stack에 담는다
// 3-1. 앞 숫자보다 작으면 계속 담는다 cnt유지
// 3-2. 앞 숫자보다 크면 cnt+=1 하고 진행
// 4. 마지막 cnt 담기

*/