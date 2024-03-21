function solution(number, k) {
  const stack = [];
  for (const v of number) {
    while (k > 0 && stack.at(-1) < v) {
      stack.pop();
      k--;
    }
    stack.push(v);
  }
  // k가 0보다 클 수 있다. 뒤에 나머지 제거
  stack.splice(stack.length - k, k);
  return stack.join('');
}
