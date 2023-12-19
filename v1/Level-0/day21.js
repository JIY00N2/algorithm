/*
1. 다항식 더하기

다른사람 풀이 

내 풀이
function solution(polynomial) {
    let answer = '';
    // 문자열의 모든 공백 제거
    //const str = polynomial.replace(/ /gi,'');
    const arr = polynomial.split(" + ");
    let nexp = 0;
    let xexp = 0;
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        if(item.includes("x")){
            const strFilter = item.replace("x", "");
            if(strFilter === ""){
                xexp += 1;
            }else{
                xexp += parseInt(strFilter);
            }
        }else{
            nexp += parseInt(item);
        }
    }
    // 상수가 없을떄
    if(nexp===0){
        if(xexp === 1){
            answer = "x";
        }else{
            answer = xexp + "x";
        }
    // x계수가 없을떄
    }
    else if(xexp === 0){
        answer = String(nexp);
    }
    else{
        if(xexp === 1){
            answer = "x" + " + " + nexp;
        }else{
            answer = xexp + "x" + " + " + nexp;
        }
    }
    return answer;
}
    
// 0. + 연산자를 기준으로 배열 나눔
// 1. x 연산자가 있을때
// 1-1 x앞에 게수가 있을때 
// 1-2 x앞에 계수가 없을떄
// 2. x 연산자가 없을때 - 상수항 계수로 더함

2. k의 개수

다른 사람 풀이
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}

내 풀이
function solution(i, j, k) {
    let arr = '';
    let cnt = 0;
    for(let x = i; x <= j; x++){
        arr += (String(x));
    }
    const strArr = arr.split('');
    for(let x = 0; x < strArr.length; x++){
        const item = strArr[x];
        if(item === String(k))
            cnt+=1;
    }
    return cnt;
}

3. 숨어있는 숫자의 덧셈(2)

다른사람 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}


내 풀이
function solution(my_string) {
    let sum = 0;
    const regex = /[^0-9]/gi;
    const filterString = my_string.replace(regex," ");
    const arr = filterString.split(" ");  
    // [ '1', '2', '3', '4', '123', '' ]
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        if(item !== ""){
            sum += Number(item);
        }
    }
    return sum;
}

4. 이진수 더하기

다른사람 풀이
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}

내 풀이
function calc(bin){
    const binarr = bin.split("").reverse();
    let sum = 0;
    for(let i = 0; i<binarr.length; i++){
        const item = Number(binarr[i]);
        sum += item * (2**i);
    }
    return sum;
}
function solution(bin1, bin2) {
    let arr =[];
    const bin1arr = calc(bin1);
    const bin2arr = calc(bin2);
    let bin = bin1arr + bin2arr;
    if(bin===0){
        return "0";
    }
    while(bin / 2 > 0){
        arr.push(bin % 2);
        bin = parseInt(bin / 2);
    }
    const newArr = arr.reverse().join("");
    return newArr;
}
 */