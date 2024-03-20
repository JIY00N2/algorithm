function solution(priorities, location) {
  let answer = 0;
  const loc = []; // [ 0, 1, 2, 3 ]
  let max = Math.max(...priorities);
  for (let i = 0; i < priorities.length; i++) {
    loc.push(i);
  }
  while (priorities.length !== 0) {
    max = Math.max(...priorities);
    if (priorities[0] < max) {
      priorities.push(priorities.shift());
      loc.push(loc.shift());
    } else {
      priorities.shift();
      answer += 1;
      if (loc.shift() === location) {
        return answer;
      }
    }
  }
}
