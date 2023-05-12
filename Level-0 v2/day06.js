/* 
1. 수열과 구간 쿼리 4

function solution(arr, queries) {
    for(const [s,e,k] of queries){
        arr = arr.map((v,i) => s <= i && i <= e && i % k === 0 ? v + 1 : v);
    }
    return arr;
}


 */