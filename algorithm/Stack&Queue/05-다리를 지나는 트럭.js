/*2023.04.25
05. 다리를 지나는 트럭

다른사람 풀이 
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0, qu = [[0, 0]], weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면 
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}

내 풀이
function solution(bridge_length, weight, truck_weights) {
    const bridge = Array.from({length: bridge_length}, v => 0); // [ 0, 0 ]
    let curWeight = 0; // 다리위에 존재하는 트럭들의 무게의 합을 담아둘 변수 curWeight
    let time = 0; // 지나는 시간을 담는 변수
    while(truck_weights.length !== 0){
        time++;
        curWeight -= bridge.shift();
        if(curWeight + truck_weights[0] > weight){
            bridge.push(0);
        }else{
            const curTruck = truck_weights.shift();
            bridge.push(curTruck);
            curWeight += curTruck;
        }
    }
    return time + bridge_length;
}
*/