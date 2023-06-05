/*
#1 다른 문제 풀이
function solution(number, k) {
    const stack = [];
    for(let i = 0; i < number.length; i++){
        while(k > 0 && stack[stack.length - 1] < number[i]){
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    stack.splice(stack.length - k, k);
    const answer = stack.join("");
    return answer;
}

#2 강사님 풀이
큰 값이 나오면 이전 값 중 더 작은값을 전부다 삭제
즉, 스택의 바닥에서부터 탑은 큰 수부터 작은 수로 나열

function solution(number,k){
  const stack = [];
  let count = 0;
  for(const item of number){
    while(count < k && stack[stack.length - 1] < item){
      stack.pop();
      count++;
    }
    stack.push(item);
  }
  while(count < k){
    stack.pop();
    count++;
  }
  return stack.join("");
}
*/
