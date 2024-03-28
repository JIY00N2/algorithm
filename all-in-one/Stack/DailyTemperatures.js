// 스택
/* 접근방법
1. 직관적으로 생각 -> 완탐, 단순화, 극한화 -> O(n^2) 따라서 안됨
2. 자료구조와 알고리즘 활용 -> 정렬 해볼까? -> 이 문제는 순서가 중요해서 정렬 안 됨 
-> 단순화, 극한화 해보기 -> 특정한 조건에서만 반응을 함(온도가 높을때, 괄호 문제..) 
-> 들어오는 데이터가 다른 데이터들과 상호작용함(괄호는 1:1)
3. 메모리 사용 -> 해시테이블 */

function dailyTemperatures(temperatures) {
  const answer = Array(temperatures.length).fill(0);
  const stack = [];
  temperatures.forEach((temperature, day) => {
    while (
      stack.length !== 0 &&
      stack[stack.length - 1].temperature < temperature
    ) {
      const { temperature, day: pop_day } = stack.pop();
      answer[pop_day] = day - pop_day;
    }
    stack.push({ temperature, day });
  });
  return answer;
}
