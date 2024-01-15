// 20291번 파일 정리
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const repeat = Number(input[0]);
const arr = input
  .slice(1)
  .map((v) => v.split('.')[1])
  .sort();

const map = new Map();

for (const key of arr) {
  if (map.has(key)) {
    const temp = map.get(key);
    map.set(key, temp + 1);
  } else {
    map.set(key, 1);
  }
}
// 객체를 key value 배열로
for (const [key, value] of map) {
  console.log(key, value);
}
