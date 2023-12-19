/* 이중우선순위큐 ⭕

내 풀이
function solution(operations) {
  let answer = [];
  let queue = [];
  for(let i = 0; i < operations.length; i++){
      if(operations[i][0] === "I"){
          queue.push(operations[i].substring(2));
          queue.sort((a,b)=>a-b); // 오름차순 정렬
      }else if(operations[i] === "D -1"){
          queue.shift();
      }else if(operations[i] === "D 1"){
          queue.pop();
      }
  }
  if(queue.length === 0){
      answer = [0,0];
  }else{
      answer = [Math.max(...queue), Math.min(...queue)];
  }
  return answer;
}
// I: 숫자 삽입, D -1: 최솟값 삭제, D 1: 최댓값 삭제
// 큐가 비어있으면 [0,0] 그렇지 않으면 [최댓값, 최솟값]
*/