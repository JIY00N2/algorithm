/* 야근 지수 ❌
function solution(n, works) {
  if(works.reduce((a,b) => a+b) <= n) return 0;
  
  let sort = works.sort((a,b) => a-b);
  const length = works.length;
  
  while(n) {
    const max = sort[length-1];
    
    for(let i = length-1; i >= 0; i--) {
      if(sort[i] >= max) {
        sort[i]--;
        n--;
      }
      if(!n) break;
    }
  }
  
  return sort.reduce((a,b) => a + Math.pow(b, 2), 0);
}

// 1. works의 모든 합이 n 보다 작으면 피로도는 0
// 2. 내림 차순으로 정렬 -> n 만큼 뺴주기
// 3. total += works의 제곱
 */
