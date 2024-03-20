function solution(brown, yellow) {
  const temp = [];
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      if (i > yellow / i) {
        break;
      }
      temp.push([yellow / i, i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    const [w, h] = temp[i];
    if (w * 2 + (h + 2) * 2 === brown) {
      return [w + 2, h + 2];
    } else {
      continue;
    }
  }
}
