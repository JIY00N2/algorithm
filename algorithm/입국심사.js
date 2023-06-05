/*
로그시간 -> 이진 탐색
times -> 선형 로그 시간으로 충분히 가능
우리는 특정 값을 찾는 것이 아님
우리가 찾는것은 최소 몇 분에 모든 심사가 끝나는가?
=> 결정 문제(이진 탐색 => parametric search)

최소 1분에서 10억분 * n 명 사이
면접관들이 몇명을 처리하는가?
만약 처리 가능한 입국자가 n보다 작다면 분을 올려야되고
n보다 크면 분을 내려야됨
면접관이 시간 대비 몇명을 처리 할 수 있는가?

function solution(n, times){
  const sortedTimes = times.sort((a,b) => a-b); // O(nlogn)
  let left = 1; // 1분부터 시작
  left right = sortedTimes[sortedTimes.length - 1] * n;
  while(left <= right){
    const mid = Math.floor((left+ right)/2); // 내림
    // sum([시간/심사시간])
    const sum = items.reduce((acc,time) => acc+ Math.floor(mid/time),0);

    if(sum < n){
      left = mid + 1;
    }else{
      right = mid - 1;
    }
    return  left;
  }
} */
