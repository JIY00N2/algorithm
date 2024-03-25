function solution(numbers) {
  const result = Array.from({ length: numbers.length }, () => -1);
  const stack = [];
  // 이전값이 현재값보다 크거나 같으면 stack안에 index를 전부 넣어 놓고
  // 현재값이 이전값보다 크면 stack에 있는 모든 index를 꺼내서 현재값으로 바꿔준다.
  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] > numbers[stack.at(-1)]) {
      const index = stack.pop();
      result[index] = numbers[i];
    }

    stack.push(i);
  }
  return result;
}
