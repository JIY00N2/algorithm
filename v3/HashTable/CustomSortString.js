// 791. Custom Sort String 해시
// 5:00-5:52
function customSortString(order, s) {
  let answer = '';
  const sMap = new Map();

  s.split('').forEach((v) => {
    sMap.has(v) ? sMap.set(v, sMap.get(v) + 1) : sMap.set(v, 1);
  });

  for (let i = 0; i < order.length; i++) {
    if (sMap.has(order[i])) {
      while (sMap.get(order[i]) > 0) {
        answer += order[i];
        sMap.set(order[i], sMap.get(order[i]) - 1);
      }
    }
  }

  for (const [key, value] of sMap.entries()) {
    if (value > 0) {
      answer += key.repeat(value);
    }
  }

  return answer;
}
