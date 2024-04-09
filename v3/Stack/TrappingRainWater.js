function trap(height) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < height.length; i++) {
    const current = { index: i, value: height[i] };
    while (stack.length && current.value > stack[stack.length - 1].value) {
      const top = stack.pop();
      if (!stack.length) break;
      const prev = stack[stack.length - 1];
      const distance = current.index - prev.index - 1;
      const boundedHeight = Math.min(current.value, prev.value) - top.value;
      answer += distance * boundedHeight;
    }
    stack.push(current);
    // console.log(i, stack);
    // 0 [ { index: 0, value: 0 } ]
    // 1 [ { index: 1, value: 1 } ]
    // 2 [ { index: 1, value: 1 }, { index: 2, value: 0 } ]
    // 3 [ { index: 3, value: 2 } ]
    // 4 [ { index: 3, value: 2 }, { index: 4, value: 1 } ]
    // 5 [{ index: 3, value: 2 }, { index: 4, value: 1 }, { index: 5, value: 0 }]
    // 6 [{ index: 3, value: 2 }, { index: 4, value: 1 }, { index: 6, value: 1 }]
    // 7 [ { index: 7, value: 3 } ]
    // 8 [ { index: 7, value: 3 }, { index: 8, value: 2 } ]
    // 9 [{ index: 7, value: 3 }, { index: 8, value: 2 }, { index: 9, value: 1 }]
    // 10 [{ index: 7, value: 3 }, { index: 8, value: 2 }, { index: 10, value: 2 }]
    // 11 [{ index: 7, value: 3 }, { index: 8, value: 2 }, { index: 10, value: 2 }, { index: 11, value: 1 }]
  }

  return answer;
}
