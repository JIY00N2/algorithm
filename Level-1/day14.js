/*2023.04.21
1. 달리기 경주 ❌

다른사람 풀이 
function solution(players, callings) {
    let idx;
    let name1;
    let name2;
    const idxList = {}

    players.forEach((name,index)=>idxList[name]=index)
    for(let call of callings){
        idx = idxList[call]
        name1 = players[idx]
        name2 = players[idx-1]
        idxList[call]-=1
        idxList[name2]+=1
        players[idx] = name2
        players[idx-1] = name1
    }    

    return players;
}

내 풀이
function solution(players, callings) {
    const playerMap = {};
    for(let i = 0; i < players.length; i++){
        playerMap[players[i]] = i;
    }
    // console.log(playerMap) { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 } 
    for(let i = 0; i < callings.length; i++){
        const idx = playerMap[callings[i]]; // 3 3 4 4 
        const temp = players[idx-1]; // poe poe kai kai
        // 해당 idx와 이전 idx의 원소를 swap
        players[idx-1] = callings[i];
        players[idx] = temp;
        // map의 idx도 갱신
        playerMap[callings[i]] = idx - 1;
        playerMap[temp] = idx;
    } 
    return players;
}

2. 개인정보 수집 유효기간 ❌

다른 사람 풀이
function solution(today, terms, privacies) {
  let answer = [];
  let [year, month, date] = today.split(".").map(Number);
  let todates = year * 12 * 28 + month * 28 + date;
  let t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    let [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    let dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}

내 풀이
const getExpireDate = (dateString, month) =>{
    // dateString을 .을 기준으로 분리하고 숫자로 바꿈
    let [year, mon, day] = dateString.split('.').map(v=>Number(v));
    mon += month;
    day -= 1;
    if(day === 0){
        day = 28;
        mon -= 1;
    }
    if(mon >= 12){
        const monthCnt = Math.floor(mon/12);
        mon -= monthCnt * 12;
        year+= monthCnt;
    }
    if(mon === 0){
        mon+=12;
        year-=1;
    }
    return [year, mon, day];
}
function solution(today, terms, privacies) {
    var answer = [];
    // privacies에서 원소를 하나씩 꺼냄
    privacies.forEach((privacy, index)=>{
        const [date, term] = privacy.split(' '); // 공백을 기준으로 날짜와 term 분리
        // terms의 첫번째 원소랑 term이랑 같은것을 찾고 공백으로 구분해서 두번째것만 받음
        const termPeriod = Number(terms.find((innerTerm) => {
            return innerTerm [0] === term;
        }).split(' ')[1]);
        //console.log(termPeriod);  6 12 3 3
        const [eYear,eMon,eDay] = getExpireDate(date, termPeriod);
        const [year,mon, day] = today.split('.').map(v=>Number(v));
        let expired = false;
        if(year > eYear){
            expired = true;
        }
        if(year === eYear && mon > eMon){
            expired = true;
        }
        if(year === eYear && mon === eMon && day > eDay){
            expired = true;
        }
        if(expired){
            answer.push(index + 1);
        }
    })
    return answer;
}

3. 바탕화면 정리
 
다른 사람 풀이


내 풀이


4. 신고 결과 받기
 
내 풀이


5. 공원 산책
 
다른 사람 풀이


내 풀이

*/