/*
1. 개미 군단

다른사람 풀이 
function solution(hp) {
    return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
}

내 풀이
function solution(hp) {
    // general = 5, soldier = 3, ergate = 1
    let generalCnt,soldierCnt,ergateCnt = 0;
    let sum = 0;
    generalCnt = parseInt(hp/5);
    soldierCnt = parseInt((hp%5)/3);
    ergateCnt = hp%5%3;
    sum = generalCnt + soldierCnt + ergateCnt;
    return sum;
}

2. 모스부호(1)

내 풀이
 const morse = { 
     // key:value
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
function solution(letter) {
    let answer = '';
    // letter를 공백으로 분리 => 문자열로된 배열
    const splittedLetter = letter.split(' ');
    console.log(splittedLetter);
    for(let i = 0; i<splittedLetter.length; i++){
        answer += morse[splittedLetter[i]];
    }
    return answer;
}

3. 가위 바위 보

내 풀이

#1 if문 사용
function solution(rsp) {
    // rock(가위)=2, scissors(보)=5, paper(바위)=0
    let answer = '';
    for(let i = 0; i<rsp.length; i++){
        if(rsp[i]==="2")
            answer+="0";
        else if(rsp[i]==="0")
            answer+="5";
        else
            answer+="2";     
    }
    return answer;
}

#2 객체 이용
const win={
    "2":"0",
    "0":"5",
    "5":"2"
}
function solution(rsp) {
    // rock(가위)=2, scissors(보)=5, paper(바위)=0
    let answer = '';
    for(let i = 0; i<rsp.length; i++){
        answer+=win[rsp[i]];
    }
    return answer;
}

4. 구슬을 나누는 경우의 수

다른사람 풀이
const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)

function solution(balls, share) {
  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))
}

내 풀이
function fact(n){
    let nFactorial = 1;
    if(n===0){
        nFactorial = 1;
    }else{
        for(let i=n; i>=1; i--){
            nFactorial *=i;
        }
    }
    return nFactorial;
}
function solution(balls, share) {
    // denominator 분모, numerator 분자(balls)  
    let answer = 0;
    let numer = fact(balls);
    let denom = fact(share) * fact(balls-share);
    answer = Math.round(numer / denom);
    return answer;
}
 */