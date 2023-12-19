/* 
1. 수열과 구간 쿼리 4

function solution(arr, queries) {
    for(const [s,e,k] of queries){
        arr = arr.map((v,i) => s <= i && i <= e && i % k === 0 ? v + 1 : v);
    }
    return arr;
}

2. 배열 만들기 2
function solution(l, r) {
    var answer = [];

    for(let i = l ; i <= r; i += 1) {
        if(i.toString().split("").every(e => e == "5" || e == "0"))
        answer.push(i);
    }
    return answer.length == 0 ? [-1] : answer;
}

function solution(l, r) {
    let result = [];

    for (let i = l; i <= r; i++) {
        const numStr = i.toString();
        if (numStr.match(/^[05]+$/)) {
            result.push(i);
        }
    }

    if (result.length === 0) {
        result.push(-1);
    }

    return result;
}
 */