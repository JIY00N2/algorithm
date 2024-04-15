// 1025 제곱수찾기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [row, col] = input[0].split(' ').map((v) => +v);
const arr = input.slice(1);

let answer = -1;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    for (let di = -row; di < row; di++) {
      for (let dj = -col; dj < col; dj++) {
        if (di === 0 && dj === 0) {
          continue;
        }
        let x = i;
        let y = j;
        let str = '';
        while (x >= 0 && y >= 0 && x < row && y < col) {
          str += arr[x][y];
          if (Number.isInteger(Math.sqrt(+str))) {
            answer = Math.max(answer, +str);
          }
          x += di;
          y += dj;
        }
      }
    }
  }
}

console.log(answer);
