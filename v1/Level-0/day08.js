/*
1. 배열 자르기

내 풀이
slice(begin, end) 
- 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.

function solution(numbers, num1, num2) {
    let answer = [];
    answer = numbers.slice(num1,num2+1);
    return answer;
}

2. 외계행성의 나이

내 풀이
function solution(age) {
    var answer = '';
    // 1. 숫자 -> 문자열
    // 2. '0' -> 48, 'a' -> 97
    const strAge = String(age); 
    // 3.문자열 -> 아스키코드 (charCodeAt)
    for(let i = 0; i < strAge.length; i++){
        // 문자열이 0일때 아스키코드에다가 +49를 해서 문자열 a ,아스키코드-> 문자열(String.fromCharCode)
       answer = answer + String.fromCharCode(strAge[i].charCodeAt(0) + 49);
    }
    return answer;
}

3. 진료순서 정하기

다른사람 풀이
function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}

내 풀이
function solution(emergency) {
    // a-b 오름 b-a 내림
    let newEmergencyArray =[];
    // 객체 사용
    for(let i = 0; i<emergency.length; i++){
      newEmergencyArray.push({value: emergency[i], idx: i})
    }
    // 내림 차순 정렬
    newEmergencyArray.sort((a,b)=>b.value-a.value)
    
    // 배열 길이 확보
    let answer = new Array(emergency.length);
    
    for(let i = 0; i<newEmergencyArray.length; i++){
        let item = newEmergencyArray[i];
        answer[item.idx] = i + 1;
    }
    return answer;
}

4. 순서쌍의 개수

내 풀이
function solution(n) {

    let cnt = 0;
    for(let i =1; i<=n; i++){
        if(n%i===0)
            cnt+=1;
    }
    return cnt;
}
 */