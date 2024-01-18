// 20437 문자열 게임2

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const temp = input.slice(1);
const words = []; // [ 'superaquatornado', 'abcdefghijklmnopqrstuvwxyz' ]
const cnt = []; // [2, 5]

for (let i = 0; i < temp.length; i++) {
  if (i % 2 === 0) {
    words.push(temp[i]);
  } else {
    cnt.push(Number(temp[i]));
  }
}

for (let i = 0; i < n; i++) {
  const word = words[i];
  const c = cnt[i];
  const map = new Map();
  for (let j = 0; j < word.length; j++) {
    if (!map.has(word[j])) {
      map.set(word[j], []);
    }
    map.get(word[j]).push(j);
  }

  let min = Infinity;
  let max = -Infinity;
  for (const value of map.values()) {
    if (value.length < c) {
      continue;
    }
    value.map((v, id) => {
      if (id + c - 1 > value.length - 1) {
        return;
      }
      const length = value[id + c - 1] - v + 1;
      min = Math.min(min, length);
      max = Math.max(max, length);
    });
  }
  if (min === Infinity) {
    console.log(-1);
  } else {
    console.log(min, max);
  }
}
