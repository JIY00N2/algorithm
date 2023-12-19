/*
1. 저주의 숫자 3

내 풀이
function solution(n) {
    let xxx = 0;
    // n까지 반복
    for(let i = 1; i <= n; i++){
        // i가 증가할때 1씩 증가
        xxx +=1;
        // 3이 있거나 3으로 나누어떨어지면 1씩 증가
        while(xxx.toString().includes("3") || xxx % 3 === 0){
            xxx+=1;
        }
    }
    return xxx;
}

2. 문자열 밀기

다른 사람 풀이
let solution=(a,b)=>(b+b).indexOf(a)

내 풀이
function solution(A, B) {
    if(A===B)
        return 0;
    let cnt = 0;
    const arr = A.split("");
    for(let i = arr.length - 1; i >=0; i--){
        // A의 마지막 문자
        let lastWord = arr.splice(arr.length-1,1)[0];
        // arr 문자열의 맨 앞에 넣음
        arr.unshift(lastWord);
        cnt +=1;
        if(arr.join("") === B){
            return cnt;
        }   
    }
    return -1;
    // unshift() - 배열 앞에 새로운 요소 추가

}
// 1. A와 B가 같은경우 1
// 2. A와 B가 같을 수 있는 경우 cnt
// 3. A와 B가 같을 수 없는 경우 -1

3. 다음에 올 숫자

다른사람 풀이
function solution(common) {
    if ((common[1]-common[0])==(common[2]-common[1])){
        return common.pop() + common[1] - common[0];
    }
    else{
        return common.pop()*common[1]/common[0];
    }
}


내 풀이
function solution(common) {
    let answer = 0;
    if(common[1] - common[0] === common[2]-common[1]){
        // 등차
        const an = common[0] + (common.length)*(common[1]-common[0]);
        answer = an;
    }else{
        // 등비
        const ar = common[0] * (common[1]/common[0]) ** common.length;
        answer = ar;
    }
    return answer;
}
// 등비 등차 구분


4. 연속된 수의 합

내 풀이
function solution(num, total) {
    let arr = [];
    const a = (2 * total / num + 1 - num) / 2;
    for(let i = 0; i < num; i++){
        arr.push(i+a);
    }
    return arr;
}
// total = a + (a+1) + (a+2) + ... + (a+n-1)
// total = (a+n-1) + (a+n-2) + (a+n-3) + ... +a
// 좌변 우변 더해서 a 값을 구한 후
// 등차 수열 공식
 */