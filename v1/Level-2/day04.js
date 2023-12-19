/*2023.04.07
1. 다음 큰 숫자

다른사람 풀이 
function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}

내 풀이
function solution(n) {
    let answer = 0;
    const bin = n.toString(2); // 1001110
    let oneCnt = 0; // 4
    for(let i = 0; i < bin.length; i++){
        if(bin[i]==="1")
            oneCnt++;
    }
    while(true){
        n++;
        let newBin = n.toString(2);
        let newOneCnt = 0;
        for(let i = 0; i < newBin.length; i++){
            if(newBin[i]==="1")
                newOneCnt++;
        }
        if(newOneCnt === oneCnt){
            answer = n;
            break;
        }
    }
    return answer;
}
// 1. n을 2진수로 변환시 1의 개수를 센다.
// 2. n을 1씩 증가시키면서 2진수로 변환시 1의개수가 1번과 같을 경우 끝

2. 피보나치 수 ❌
다른 사람 풀이

내 풀이
function solution(n) {
  
    let ans = [0,1];
    for(let i = 2; i <=n; i++){
        ans[i] = (ans[i-1]+ans[i-2])%1234567;
    }
    return ans.pop();
}
// dp bottom-up 으로 해결
*/