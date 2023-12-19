/* 
1. 수열과 구간 쿼리 3

function solution(arr, queries) {
    for(const[i,j] of queries){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

2. 수열과 구간 쿼리 2
function solution(arr, queries) {
    const answer = [];
    for(const[s, e, k] of queries){
        const tmp = arr.filter((v,i) => s <= i && i <= e && v > k).sort((a,b)=>a-b)[0];
        answer.push(tmp ? tmp : -1);
    }
    return answer;
}
 */