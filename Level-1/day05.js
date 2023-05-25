/* 2023.04.03

1. 이상한 문자 만들기 ❌

다른사람 풀이
function solution(s){
    let answer = "";
    let words = s.split(" ");

    for(let i = 0; i < words.length; i++){
        const item = words[i];
        for(let j = 0; j < item.length; j++){
            if(j % 2 === 0){
                answer += item[j].toUpperCase();
            }else{
                answer += item[j].toLowerCase();
            }
        }
        // 단어 사이에 공백을 추가
        if(i < words.length - 1){
            answer += " ";
        }
    }
    return answer;
}

2. 시저 암호

다른사람 풀이
function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer= '';

    for(let i =0; i <s.length; i++){
        let text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}

내 풀이
function solution(s, n) {
    var answer = '';
    // A~Z 65~90 a~z 97~122
    for(let i = 0; i < s.length; i++){
        const numCode = s.charCodeAt(i); // 65 66 , 97 32 66 32 122
        let charCode = numCode + n;
        
        if(numCode === 32)
            answer += " "
        else{
            if(numCode >= 65 && numCode <=90){
                if(charCode > 90){
                    charCode = charCode - 26;
                    answer += String.fromCharCode(charCode);
                }
                else{
                    answer += String.fromCharCode(charCode);
                }
            }if(numCode >=97 && numCode <=122){
                if(charCode > 122){
                    charCode = charCode - 26;
                    answer += String.fromCharCode(charCode);
                }
                 else{
                    answer += String.fromCharCode(charCode);
                }
            }
        }
    }
    return answer;
}

3. 삼총사 ❌

다른사람 풀이
function solution(number){
    let result = 0;
    const combination = (curr, start) =>{
        if(current.length === 3){
            result += current.reduce((acc,cur)=> acc + cur, 0) === 0 ? 1 : 0;
            return;
        }
        for(let i = start; i < number.length; i++){
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return result;
}

내 풀이 
function solution(number) {
    let cnt = 0;
    for(let i = 0; i < number.length; i++){
        for(let j = i + 1; j < number.length; j++){
            for(let k = j + 1; k < number.length; k++){
                if(number[i] + number[j] + number[k] === 0)
                    cnt+=1;
            }
        }
    }
    return cnt;
}

4. 최소직사각형

다른사람 풀이
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}

내 풀이
function solution(sizes) {
    let answer = 0;
    let leftArr = [];
    let  rightArr = [];
    for(let i = 0; i < sizes.length; i++){
        const arr = sizes[i];
        leftArr.push(Math.max(arr[0], arr[1]));
        rightArr.push(Math.min(arr[0], arr[1]));
    }
    answer = Math.max(...leftArr) * Math.max(...rightArr);
    return answer;
}

5. [1차] 비밀지도

다른사람 풀이

2
ㅣlet solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))

내 풀이
function binaryArr(arr,n){
    const binStr = arr.map((num) => num.toString(2));
    const result = binStr.map((str) => str.padStart(n,"0"));
    return result;
}
function solution(n, arr1, arr2) {

    // 십진수를 2진수로 변환
    // parseInt(string, radix);
    // padStart(자리수, 채울 문자);
    const binArr1 = binaryArr(arr1,n);
    const binArr2 = binaryArr(arr2,n);
    let newArr = [];
    
    for(let i = 0; i < n; i++){
        const bin1 = binArr1[i]; // 100001
        const bin2 = binArr2[i]; // 010011
        let str = "";
        for(let j = 0; j < n; j++){
            if(bin1[j] === "0" && bin2[j] === "0"){
                str += " ";
            }else{
                str+="#";
            }  
        }
        newArr.push(str);
    }
    return newArr;
}

function solution(n, arr1, arr2) {
    var answer = [];
    const binArr1 = arr1.map(num => num.toString(2).padStart(n,"0"));
    const binArr2 = arr2.map(num => num.toString(2).padStart(n,"0"));
    for(let i = 0; i < n; i++){
        let str = '';
        for(let j = 0; j < n; j++){
            if(binArr1[i][j] === "0" && binArr2[i][j] === "0"){
                str += " ";
            }else{
                str += "#";
            }
        }
        answer.push(str);
    }
    return answer;
}
6. 문자열 내 마음대로 정렬하기 ❌

내 풀이
function solution(strings, n) {
    return answer = strings.sort((a,b) =>{
        // 인덱스 n번째 글짜를 기준으로 오름차순 정렬
        if(a[n] > b[n])
            return 1;
        // 인덱스 n번째 글짜를 기준으로 내림차순 정렬
        else if(a[n] < b[n])
            return -1;
        // 같으면 사전순 정렬
        else return a > b ? 1 : -1;
    });       
}

7. 숫자 문자열과 영단어 ❌

내 풀이
function solution(s) {
    const numbers=["zero","one","two","three","four","five","six","seven","eight","nine"];
    let answer = s;
    for(let i = 0; i < numbers.length; i++){
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }
    
    return Number(answer);
}

*/