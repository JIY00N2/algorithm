/*2023.04.14
1. 구명보트(그리디) ❌

다른사람 풀이 
function solution(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}

내 풀이
function solution(people, limit) {
    
    const sortArr = people.sort((a,b)=>b-a);
    // 제일 무거운 사람과 제일 가벼운 사람을 더했을때 limit보다 크다면 무거운사람만 태움
    let left = 0;
    let right = people.length - 1;
    let boatCnt = 0;
    while(left < right){
        const sum = sortArr[left] + sortArr[right];
        if(sum > limit){
            left++;
        }else{
            left++;
            right--;
        }
        boatCnt++;
    }
    // 한명 남은 경우 배가 하나더 필요
    if(left === right) boatCnt++;
    return boatCnt;
}

2. 예상 대진표 ❌
다른 사람 풀이
function solution(n,a,b)
{
    let cnt = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        cnt++;
        // a b cnt
        // 2 4 1
        // 1 2 2
        // 1 1 3
    }

    return cnt;
}

*/