function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let cur = prices[i];
    let time = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (cur <= prices[j]) {
        time += 1;
      } else {
        time += 1;
        break;
      }
    }
    answer.push(time);
  }
  return answer;
}
