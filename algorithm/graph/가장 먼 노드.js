/*
제한사항이 크면 큐 사용, 작으면 shift 사용
핵심 키워드는 노드, 간선, 최단경로
최단 경로가 제일 큰 경우의 집합을 구하는 문제


function solution(n, edge){
  const graph = Array.from(Array(n+1),() => []);

  // src는 출발 , dest는 도착
  // 그래프 완성, 양방향
  for(const [src, dest] of edge){
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n+1).fill(0);
  distacne[1] = 1; // 1번의 길이를 1이라고 정의

  // bfs - 큐로 구현
  const queue = [1];
  while(queue.length > 0){
    const src = queue.shift(); // shift는 O(n) 이지만 요소가 적으면 자바스크립트 엔진에서 최적화 해줌
    for(const dest of graph[src]){
      if(distance[dest] === 0){
        queue.push(dest);
        distance[dest] = distacne[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter(item => item === max).length;
}

# 큐를 이용한 문제 풀이

class Queue{
  constructor(){
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value){
    this.queue[this.rear++] = value;
  }

  dequeue(){
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  isEmpty(){
    return this.rear === this.front;
  }
}

function solution(n, edge){
  const graph = Array.from(Array(n+1),() => []);

  // src는 출발 , dest는 도착
  // 그래프 완성, 양방향
  for(const [src, dest] of edge){
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n+1).fill(0);
  distance[1] = 1; // 1번의 길이를 1이라고 정의

  // bfs - 큐로 구현
  const queue = new Queue();
  queue.enqueue(1);
  while(queue.isEmpty()){
    const src = queue.dequeue(); 
    for(const dest of graph[src]){
      if(distance[dest] === 0){
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter(item => item === max).length;
}
*/
