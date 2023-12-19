/*
2. 문자열이 몇 번 등장하는지 세기
function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.slice(i, i + pat.length) === pat) {
            count++;
        }
    }
    return count;
}
5. 공백으로 구분하기 2
#1 정규식 이용
function solution(my_string) {
    const trimString = my_string.trim();
    // \s = 공백, + = 최소 한번 이상 반복
    const answer = trimString.split(/\s+/g);
    return answer;
}

#2  filter 이용
function solution(my_string) {
    return my_string.split(' ').filter(v => v);
}
 */