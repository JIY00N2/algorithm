// 3758
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const t = input[0][0];
const remain = input.slice(1);

let j = 0;
for (let a = 0; a < t; a++) {
  const [team, question, targetId, m] = remain[j];
  const map = new Map();
  for (let x = 1; x <= team; x++) {
    map.set(x, { array: Array(question).fill(0), cnt: 0, recent: 0 });
  }
  for (let b = j + 1; b < m + j + 1; b++) {
    const [id, number, score] = remain[b];
    const cur = map.get(id);
    let { array, cnt, recent } = cur;
    array[number - 1] = Math.max(array[number - 1], score);
    cnt++;
    map.set(id, { array, cnt: cnt++, recent: b });
  }
  for (const [key, value] of map.entries()) {
    const sum = value.array.reduce((acc, cur) => acc + cur);
    const cur = map.get(key);
    map.set(key, { ...cur, sum });
  }
  const sorted = [...map.entries()].sort((a, b) => {
    if (a[1].sum !== b[1].sum) {
      return b[1].sum - a[1].sum;
    } else if (a[1].cnt !== b[1].cnt) {
      return a[1].cnt - b[1].cnt;
    } else {
      return a[1].recent - b[1].recent;
    }
  });
  sorted.forEach((array, id) => {
    if (array[0] === targetId) {
      console.log(id + 1);
    }
  });
  j = m + j + 1;
}
