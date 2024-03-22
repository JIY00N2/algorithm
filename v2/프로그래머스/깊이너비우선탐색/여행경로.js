function solution(tickets) {
  const answer = [];
  const goal = tickets.length + 1; // 모든 티켓을 다 사용함 (ICN에서 출발해서 +1)
  const v = Array.from({ length: tickets.length }, () => false); // 사용한 항공권 표시
  tickets.sort();

  const dfs = (path) => {
    if (path.length === goal) {
      answer.push(path);
    } else {
      for (let i = 0; i < tickets.length; i++) {
        // 사용하지 않은 항공권이면서 현재의 위치,
        // 즉 현재까지 거쳐간 모든 도시가 들어있는 path의 맨 마지막 도시 === 출발 항공권이라면
        // v 배열 방문 처리,  path에 해당 도시를 추가하여 다음으로 넘어갑니다.
        if (!v[i]) {
          const [start, end] = tickets[i];
          if (path.at(-1) === start) {
            v[i] = true;
            dfs([...path, end]);
            v[i] = false;
          }
        }
      }
    }
  };

  dfs(['ICN']);

  return answer[0];
}
