/*
4. 2의 영역
function solution(arr) {
    const startIdx = arr.indexOf(2);
    const endIdx = arr.lastIndexOf(2);
    
    return startIdx+endIdx< 1 ? [-1] : arr.slice(startIdx, endIdx+1)
}

5. 배열 조각하기
function solution(arr, query) {
    for(let i = 0 ; i < query.length ; i ++) {
        if(i%2 === 0) {
            arr.splice(query[i]+1, arr.length -(query[i]+1))
        } else {
             arr.splice(0, query[i])
        }
    }    
    return arr
}
 */