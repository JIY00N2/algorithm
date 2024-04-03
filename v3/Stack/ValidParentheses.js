function isValid(s) {
  let result = false;
  const stack = [];
  if (s[0] === ')' || s[0] === ']' || s[0] === '}') {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(')');
    } else if (s[i] === '[') {
      stack.push(']');
    } else if (s[i] === '{') {
      stack.push('}');
    } else if (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length === 0) {
    result = true;
  }
  return result;
}
