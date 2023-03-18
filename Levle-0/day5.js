/*
17. 옷가게 할인 받기

내 풀이
function solution(price) {
    if(price >= 500000) return parseInt(price*(1-0.2));
    else if(price>= 300000) return parseInt(price*(1-0.1));
    else if(price>=100000) return parseInt(price*(1-0.05));
    else return parseInt(price);
}

18. 아이스 아메리카노

내 풀이
function solution(money) {
    const answer = [Math.floor(money/5500), money%5500];
    return answer;
}

19. 나이 출력

내 풀이
function solution(age) {
    return answer = 2022 - age + 1;
}

20. 배열 뒤집기

다른사람 풀이
#1
function solution(num_list) {
    return num_list.sort((a, b) => -1);
}

#2
function solution(num_list) {
    return num_list.reverse()
}

내 풀이
function solution(num_list) {
    const arr=[]
    for(let i=num_list.length-1; i>=0; i--){
        arr[num_list.length-1-i] = num_list[i]
    }
    return arr;
}
 */