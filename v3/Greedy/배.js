// 1092 배
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [cC, c, bC, b] = input;
const cranesCnt = cC[0]; // 3
const cranes = c.sort((a, b) => b - a); // [ 9,8,7 ]
const boxesCnt = bC[0]; // 5
const boxes = b.sort((a, b) => b - a); // [ 7, 5, 4, 2, 2]
let time = 0;

if (cranes[0] < boxes[0]) {
  console.log(-1);
  return;
}

while (boxes.length) {
  for (let i = 0; i < cranes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      if (cranes[i] >= boxes[j]) {
        boxes.splice(j, 1);
        break;
      }
    }
  }
  time++;
}

console.log(time);
