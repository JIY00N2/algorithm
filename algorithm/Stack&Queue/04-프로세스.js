/*2023.04.25
04. 프로세스

다른사람 풀이 
function solution(priorities, location) {
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });

    var queue = [];

    while(arr.length > 0) {
        var firstEle = arr.shift();
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}

내 풀이
function solution(priorities, location) {
    let idx = 0;
    let posArr = []; // [ 0, 1, 2, 3 ]
    // 1. priorities의 index를 가리키는 posArr 만듬
    for(let i = 0; i < priorities.length; i++){
        posArr.push(i);
    }
    let max = Math.max(...priorities); // 3
    // 2. 알고리즘
    // shift() - 맨 앞 원소 삭제
    while(priorities.length !== 0){
        // 첫번째 원소가 가장 큰값보다 작으면 맨뒤로 보냄
        // 인덱스도 뒤로 보냄
        if(priorities[0] < max){
            priorities.push(priorities.shift());
            posArr.push(posArr.shift());
        }else{ // priorities[0] >= max
            idx++;
            priorities.shift();
            if(posArr.shift() === location){
                return idx;
            }
            max = Math.max(...priorities);
        }
    }  
    return idx;
}
*/