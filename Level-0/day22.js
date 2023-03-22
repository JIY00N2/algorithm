/*
1. 삼각형의 완성조건(2)

다른사람 풀이 
function solution(sides) {
    return Math.min(...sides)*2-1
}

내 풀이
function solution(sides) {
    let arr = [];
    const sortedSides = sides.sort((a,b) => a-b);
    const re = sides[0];
    const max = sides[1];
    for(let x = max - re + 1; x <= max; x++){
        arr.push(x);
    }
    for(let x = max; x< re+max; x++){
        arr.push(x);
    }
    const setArr = [...new Set(arr)];
    const answer = setArr.length;
    return answer;
}
// 0. side를 오름차순 정렬 remain = sides[0], max = sides[1]
// 1. max가 가장 긴변인 경우 구하려는 값 x
// 1-1 x <= sides[1] && x > sides[1] - sides[0] 사이의 값 게수
// 2. 구하려는 값 x가 가장 긴변인 경우
// 2-1 x >= sides[1] && x < sides[1] + sides[0] 사이의 값 개수
// 3. 배열에 저장 후 -> 길이

2. 외계어 사전

다른 사람 풀이
some() - 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트

function solution(p, d) {
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}

내 풀이
function solution(spell, dic) {
    const spellStr = spell.sort().join("");
    let arr = [];
    for(let i = 0; i< dic.length; i++){
        arr.push(dic[i].split("").sort().join(""));
    }
    const exist = arr.indexOf(spellStr);
    if(exist !==-1)
        return 1;
    else return 2;
}

3. 종이 자르기

다른사람 풀이
function solution(M, N) {
    return M*N-1;
}

내 풀이
function solution(M, N) {
    let answer = 0;
    // n으로 먼저 자르고 m으로 자르기
    const nCnt = N - 1;
    const mCnt = M - 1;
    const mResult = N*(M - 1)
    const result = nCnt + mResult;
    if(nCnt === 0 && mCnt ===0){
        answer = 0;
    }else{
        answer = result;
    }
    return answer;
}

4. 로그인 성공?

다른사람 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

내 풀이
function solution(id_pw, db) {
    let answer = '';
    const id = id_pw[0];
    const pw = id_pw[1];
    db.map((item,i) => {
        if(id === item[0] && pw === item[1])
            answer = "login";
        else if(id === item[0] && pw !== item[1])
            answer = "wrong pw";
        else if(id !== item[0] && pw !== item[1])
            answer = "fail";
    })
    return answer;
}
 */