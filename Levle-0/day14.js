/*
1. 가까운 수

내 풀이
function solution(array, n) {
    let answer = 0;
    let minAbs = 101; //최솟값을 구하기 위해
    //배열을 정렬해서 가장 가까운 수가 여러개 있어도 무조건 앞에꺼 출력
    const sortedArr = array.sort((a,b)=>a-b); 
    for(let i = 0; i<array.length; i++){
        const item = array[i];
        // 지금 구한 절댓값 보다 새로 들어온 절댓값이 더 작으면
        if(minAbs > Math.abs(item-n)){
            minAbs = Math.abs(item-n);
            answer = item;
        } 
    }    
    return answer;
}

2. 369게임

다른 사람 풀이
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}

내 풀이
function solution(order) {
    let cnt = 0;
    const orderArr = String(order).split('');
    for(let i = 0; i<orderArr.length; i++){
        if(orderArr[i]==="3" || orderArr[i]==="6"|| orderArr[i]==="9"){
            cnt+=1;
        }
    }
    return cnt;
}

3. 암호 해독

다른사람 풀이
function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

내 풀이
function solution(cipher, code) {
    let answer = '';
    let repeat = 0;
    for(let n = 1; n<=parseInt(cipher.length/code); n++){
            repeat = code * n - 1;
            answer += cipher[repeat];
    }  
    return answer;
}

4. 대문자와 소문자

다른사람 풀이
function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}

내 풀이
function solution(my_string) {
    var answer = '';
    // 아스키코드 영어 소문자 97~122 영어 대문자 65~90
    for(let i = 0; i<my_string.length; i++){
        // 대문자이면 소문자로
        if(my_string.charCodeAt(i)>=65 && my_string.charCodeAt(i)<=90){
            answer += my_string[i].toLowerCase();
        }
        // 소문자이면 대문자로
        else if(my_string.charCodeAt(i)>=97 && my_string.charCodeAt(i)<=122){
            answer += my_string[i].toUpperCase();
        }
    }
    return answer;
}
 */