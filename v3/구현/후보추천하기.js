const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const n = input[0][0];
const r = input[1][0];
const arr = input.slice(2)[0];
const map = new Map();

for (let i = 0; i < r; i++) {
  // 1. 후보를 더 받을 수 있을 경우
  if (map.size < n) {
    // 1-1. 이미 추천받은 적이 있는 경우
    if (map.has(num)) {
      const { cnt, firstIdx } = map.get(num);
      map.set(num, {
        cnt: cnt + 1,
        firstIdx,
      });
    }
    // 1-2. 새롭게 추천받은 경우
    else {
      map.set(num, {
        cnt: 1,
        firstIdx: idx,
      });
    }
  }
  // 2. 이미 후보가 다 찬 경우
  else {
    // 2-1. 기존 후보
    if (map.has(num)) {
      const { cnt, firstIdx } = map.get(num);
      map.set(num, {
        cnt: cnt + 1,
        firstIdx,
      });
    }
    // 2-2. 새로운 후보 등록
    else {
      const arr = [...map].sort((a, b) => {
        if (a[1].cnt === b[1].cnt) {
          return a[1].firstIdx - b[1].firstIdx;
        }
        return a[1].cnt - b[1].cnt;
      });

      const removeNum = arr[0][0];

      map.delete(removeNum);
      map.set(num, {
        cnt: 1,
        firstIdx: idx,
      });
    }
  }
}
console.log([...map.keys()].sort((a, b) => a - b).join(' '));
