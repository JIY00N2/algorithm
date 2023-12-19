/*
1. 컨트롤 제트

다른사람 풀이 
function solution(s) {
    let sum = 0;
    const splittedArr = s.split(' ');
    for(let i = 0; i<splittedArr.length; i++){
        const item = splittedArr[i];
        if(item !== 'Z'){
            sum += Number(item);
        }else{
            sum -= Number(splittedArr[i-1]);
        }
    }
    return sum;
}

내 풀이
function solution(s) {
    let answer = 0;
    let collectedNum = '';
    let numbersArr=[];
    for(let i = 0; i<s.length; i++){
        const item = s[i];
        if(item === 'Z'){
            // pop 마지막 원소를 지움
            numbersArr.pop();
        }else if(item===' '){
            // 공백을 만나면 전의 문자열을 숫자로 바꿔서 넣음
            numbersArr.push(Number(collectedNum));
            // 넣은 후에 초기화
            collectedNum = '';
        }else{
            // 숫자 -> 공백이 나올 떄 까지
            collectedNum += item;
        }
    }
    if(collectedNum!==''){
        // 마지막 숫자 push
        numbersArr.push(Number(collectedNum));
    }
    for(let i =0; i<numbersArr.length; i++){
        answer += numbersArr[i];
    }
    return answer;
}
// 1. -, 0~9 숫자
// 2. Z
// 3. 공백

2. 배열 원소의 길이

다른 사람 풀이
function solution(strlist) {
    var answer = strlist.map(v => v.length);
    return answer;
}

내 풀이
function solution(strlist) {
    let answer = [];
    for(let i = 0; i<strlist.length; i++){
        answer.push(strlist[i].length);
    }
    return answer;
}

3. 중복된 문자 제거

다른사람 풀이
function solution(my_string) {
    return [...new Set(my_string)].join('');
}

내 풀이
function solution(my_string) {
    //my_string의 문자와 result의 문자끼리 비교
    let result = '';
    for(let i = 0; i<my_string.length; i++){
        const item = my_string[i];
        let existed = false;
        for(let j = 0; j<result.length; j++){
            if(item===result[j]){
                existed=true;
                break;
            }
        }
        if(!existed){
            result+=item;
        }
    }
    return result;
}

4. 삼각형의 완성조건(1)

다른사람 풀이
function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}

내 풀이
function solution(sides) {
    let sortedSidesArr = sides.sort((a,b)=>b-a);
    if(sides[1]+sides[2]>sides[0]) return 1;
    else return 2;
}
 */