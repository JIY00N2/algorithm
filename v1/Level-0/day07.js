/*
1. 특정 문자 제거하기

다른사람 풀이 
#1 split, join
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

#2 replaceAll(pattern, replacement) 
- pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환합니다. 
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}

내 풀이
function solution(my_string, letter) {
    let answer='';
    for(let i = 0; i<my_string.length; i++){
        if(my_string[i]===letter){
            continue;
        }
        else{
            answer += my_string[i];
        }
    }
    return answer;
}

2. 각도기

다른 사람 풀이
#1 filter
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}

#2 삼항 연산자
function solution(angle) {
    return angle < 90 ? :1  angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

내 풀이
function solution(angle) {
    if(angle > 0 && angle < 90){
        answer = 1;
    }else if(angle === 90){
        answer = 2;
    }
    else if(angle === 180){
        answer = 4;
    }
    else{
        answer = 3;
    }
    return answer;
}

3. 양꼬치

다른사람 풀이
#1 ~~ 는 Math.floor()와 동일
function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}

#2
function solution(n, k) {
    return n*12000 + k*2000 - parseInt(n/10)*2000
}

내 풀이
function solution(n, k) {
    let discount = 0;
    let money = 0;
    if(parseInt(n/10)>=1){
        discount = parseInt(n/10);
    }
    money = (12000 * n) + (2000*(k-discount));
    return money;

4. 짝수의 합

다른사람 풀이
function solution(n) {
    var answer = 0;
    for(let i=2 ; i<=n ; i+=2)
        answer += i;
    return answer;
}

내 풀이
function solution(n) {
    let evenSum = 0;
    for(let i =0; i<=n; i++){
        if(i % 2 === 0)
            evenSum+=i;
    }
    return evenSum;
}
 */