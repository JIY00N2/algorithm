function longestValidParentheses(s) {
  let longest = 0;
  if (s.length === 0) {
    return longest;
  }
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    const compareItem = s[i];
    const popItemIndex = stack[stack.length - 1];
    if (compareItem === '(') {
      stack.push(i);
    } else if (compareItem === ')') {
      stack.pop();
      if (stack.length) {
        let len = i - popItemIndex;
        longest = Math.max(longest, len);
      } else {
        stack.push(i);
      }
    }
  }
  return longest;
}
