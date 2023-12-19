/*2023.04.25
01. 같은 숫자는 싫어

다른사람 풀이 
#1
function solution(arr) {
    var answer = [arr[0]];

    for (let i=1; i<arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

#2 
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

내 풀이
function solution(arr)
{
    let stack = [];
    let beforeNum = -1;
    for(let i = 0; i < arr.length; i++){
        if(beforeNum !== arr[i]){
            stack.push(arr[i]);
            beforeNum = arr[i];
        }
    }
    return stack;
}

*/