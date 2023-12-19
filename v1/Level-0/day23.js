/*
1. 치킨 쿠폰

내 풀이
function solution(chicken) {
    let result = 0;
    while(chicken >= 10){
        result += Math.floor(chicken/10);
        chicken = chicken % 10 + Math.floor(chicken/10);
    }
    return result;
}

2. 등수 매기기

내 풀이
function solution(score) {
    // score의 평균 점수
    const avg = score.map(v=>(v[0]+v[1])/2);
    // avg를 내림차순으로 정렬한 배열 sort를 선언
    const sorted = avg.slice().sort((a,b)=>b-a);
    // avg의 요소와 동일한 sorted 배열의 index 값에 1을 더한다.
    const answer = avg.map(v=>sorted.indexOf(v)+1);
    return answer;

}

3. 유한소수 판별하기

내 풀이
function solution(a, b) {

    let gcd = 0;
    const big = a > b ? a : b;
    for(let i = 1; i <=big; i++){
        if(a % i === 0 && b % i ===0){
            gcd = i;
        }
    }
    a = a / gcd;
    b = b / gcd;
    while(b % 2 === 0){
        b = b/2;
    }
    while(b % 5===0){
        b = b/5;
    }
    
4. 특이한 정렬

내 풀이
function solution(numlist, n) {
    let answer = numlist.sort((a,b)=>{
        const [aGap, bGap] = [Math.abs(a-n), Math.abs(b-n)];
        // 거리가 같다면 더 큰수를 우선 배치
        if(aGap === bGap){
            return b - a;
            // 거리가 다르다면 거리별 오름차순 정렬
        }else{
            return aGap - bGap;
        }
    })
    return answer;
}
 */