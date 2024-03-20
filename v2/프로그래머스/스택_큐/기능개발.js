function solution(progresses, speeds) {
  const answer = [];

  const map = progresses.map((v, id) => {
    const speed = speeds[id];
    return Math.ceil((100 - v) / speed);
  });
  let target = map[0];
  let cnt = 0;
  for (let i = 0; i < map.length; i++) {
    if (target >= map[i]) {
      cnt++;
    } else {
      answer.push(cnt);
      cnt = 1;
      target = map[i];
    }
  }
  answer.push(cnt);
  return answer;
}
