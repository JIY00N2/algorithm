/*
1. 중복된 숫자 개수

다른사람 풀이 
function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n)
    answer = Array.length

    return answer;
}

내 풀이
function solution(array, n) {
    let cnt = 0;
    for(let i = 0; i<array.length; i++){
        const key = array[i];
        if(key === n)
            cnt += 1;
    }
    return cnt;
}

2. 머쓱이보다 키 큰 사람

다른 사람 풀이
function solution(array, height) {
    var answer = array.filter(v => v > height).length;
    return answer;
}

내 풀이
function solution(array, height) {
    let answer = 0;
    let cnt = 0;
    const sortArr = array.sort();
    for(let i = 0; i < array.length; i++){
        const compare = sortArr[i];
        if(height < compare){
            cnt+=1;
        }else{
            cnt = 0;
        }
    }
    return answer = cnt;
}

3. 최댓값 만들기(2)

다른사람 풀이
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}


내 풀이
function solution(numbers) {
    const sortedArr = numbers.sort((a,b) => b-a);
    const front = sortedArr[0] * sortedArr[1];
    const back = sortedArr[numbers.length-1] * sortedArr[numbers.length-2];
    const answer = front > back ? front : back;
    return answer;
}

4. A로 B만들기

다른사람 풀이
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

내 풀이
function solution(before, after) {
    const sortBefore = before.split('').sort();
    const sortAfter = after.split('').sort();
    let diff = 0;
    for(let i = 0; i < sortBefore.length; i++){
        const beforeItem = sortBefore[i];
        const afterItem = sortAfter[i];
        if(beforeItem !== afterItem)
            diff +=1;
    }
    return diff>=1 ? 0 : 1;
}
 */