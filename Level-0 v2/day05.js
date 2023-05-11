/* 
1. 수열과 구간 쿼리 3

function solution(arr, queries) {
    for(const[i,j] of queries){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
 */