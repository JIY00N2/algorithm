function solution(sizes) {
  const big = [];
  const small = [];
  for (let i = 0; i < sizes.length; i++) {
    let [w, h] = sizes[i];
    if (w > h) {
      big.push(w);
      small.push(h);
    } else {
      big.push(h);
      small.push(w);
    }
  }
  const size = Math.max(...big) * Math.max(...small);
  return size;
}
