/*2023.04.21
1. n^2 배열 자르기 🔺

내 풀이
function solution(n, left, right) {
    let arr = [];
    for(let i = left; i <= right; i++){ //2 3 4 5
        const y = parseInt(i/n) + 1; // 1 2 2 2 y축
        const x = i % n + 1; // 3 1 2 3 x축
        arr.push(Math.max(y,x));
    }
    return arr;
}

2. 위장
 
다른 사람 풀이

내 풀이

*/