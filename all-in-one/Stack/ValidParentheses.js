// 스택
function isValid(s) {
  const stack = [];
  let result = true;
  s.split('').forEach((v) => {
    if (v === '(') {
      stack.push(')');
    } else if (v === '{') {
      stack.push('}');
    } else if (v === '[') {
      stack.push(']');
    } else if (stack.length && stack[stack.length - 1] === v) {
      stack.pop();
    } else {
      return (result = false);
    }
  });
  if (stack.length) {
    result = false;
  }
  return result;
}

console.log(isValid('()[]{}'));
