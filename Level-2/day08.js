/*2023.04.17 ~ 2023.04.18
1. 멀리 뛰기(DP) ❌

내 풀이
function fibo(n){
    const dp = new Array(n+1).fill(0);
    dp[0] = 1, dp[1] = 1;
    for(let i = 2 ; i <=n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    return dp[n];
}
function solution(n) {
    return fibo(n);
}
// 피보나치 수열은 dp로 푸는 것이 효율

2. 귤 고르기 ❌

다른 사람 풀이
function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};
  tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);
  const tArr = Object.values(tDict).sort((a, b) => b - a);
  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }
  return answer;
}

내 풀이
function solution(k, tangerine) {
    const obj = {};
    // 같은 귤의 갯수가 몇개인지 확인
    tangerine.forEach((n)=>{
        // obj[n] 값이 있으면 1을 더한 값을,
        // 없으면 1을 넣어준다.
        obj[n] = ++obj[n] || 1;
    });
    //{ '1': 1, '2': 2, '3': 2, '4': 1, '5': 2}
    // Object.values() 값만 추출하여 내림차순 정렬
    const sort = Object.values(obj).sort((a,b)=>b-a);
    
    let sum = 0, answer = 0;
    for(let i = 0; i < sort.length; i++){
        sum += sort[i];
        answer++;
        if(sum >= k)
            break;
    }
    return answer;

*/