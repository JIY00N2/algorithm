/*
2. 조건에 맞게 수열 변환하기 2
function solution(arr) {
    let cnt = 0;
    
    while(!arr.every(num => (num >= 50 && num % 2 === 1) || (num < 50 && num % 2 === 0))) {
        arr = arr.map(num => {
            if (num >= 50 && num % 2 === 0) return num / 2;
            if (num < 50 && num % 2 === 1) return num * 2 + 1;
            return num;
        })
        
        cnt++;
    };
    
    return cnt;
}
 */