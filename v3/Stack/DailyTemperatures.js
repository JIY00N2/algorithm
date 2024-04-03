// 스택..
function dailyTemperatures(dailyTemperatures) {
  const answer = Array.from({ length: temperatures.length }, () => 0);
  const stack = [];
  temperatures.forEach((v, id) => {
    while (stack.length !== 0 && stack[stack.length - 1].v < v) {
      const { id: old_id } = stack.pop();
      answer[old_id] = id - old_id;
    }
    stack.push({ v, id });
  });
  return answer;
}
