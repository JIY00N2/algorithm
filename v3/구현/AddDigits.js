function addDigits(num) {
  let str = num.toString();
  let answer = 0;
  if (str.length <= 1) {
    return num;
  }
  while (str.length > 1) {
    answer = str
      .split('')
      .map((v) => +v)
      .reduce((acc, cur) => acc + cur, 0);
    if (answer.toString().length > 1) {
      str = answer.toString();
    } else {
      break;
    }
  }
  return answer;
}
