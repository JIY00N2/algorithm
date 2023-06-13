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

2023.06.04
# 2. 두번째 풀이
function solution(priorities, location) {
   const arr = priorities.map((priority, index) => {
       return {
           index, priority,
       };
   });
    
    const queue = [];
    
    while(arr.length > 0){
        const front = arr.shift();
        const isHighPriority = arr.some(item => item.priority > front.priority);
        if(isHighPriority){
            arr.push(front);
        }else{
            queue.push(front);
        }
    }
    const answer = queue.findIndex(item => item.index === location) + 1;
    return answer;
}


# 강사님 답
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enqueue(newValue){
        const newNode = new Node(newValue);
        if(this.head === null){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    peek(){
        return this.head.value;
    }
}

function solution(priorites, location){
    const queue = new Queue();
    for(let i = 0; i < priorites.length; i++){
        // 큐에 우선순위와 인덱스를 넣음
        queue.enqueue([priorities[i]], i);
    }
    // 내림차순으로 정렬
    priorities.sort((a,b) => b-a);
    let count = 0;
    while(true){
        const currentValue = queue.peek();
        if(currentValue[0] < priorities[count]){
            queue.enqueue(queue.dequeue());
        }else{
            const value = queue.dequeue();
            count += 1;
            if(location === value[1]){
                return count;
            }
        }
    }
    return count;
}


splice vs shift 속도 차이
https://velog.io/@dorito/JavaScript-Splice-vs-Shift-%EC%86%8D%EB%8F%84-%EC%B0%A8%EC%9D%B4-%EA%B6%81%EA%B8%88%ED%95%B4%EC%84%9C-%EA%B5%AC%EA%B8%80%EB%A7%81-z9aiz4b1

*/
