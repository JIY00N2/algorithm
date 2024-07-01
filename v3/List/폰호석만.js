const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(path).toString().trim().split(' ');
const [a, b] = input;
let cnt = 0;
let answer = '';

for (let i = 2; i <= 36; i++) {
  let aAnswer = parseInt(a, i);
  if (isNaN(aAnswer)) continue;
  for (let j = 2; j <= 36; j++) {
    let bAnswer = parseInt(b, j);
    if (isNaN(bAnswer)) continue;
    if (i === j) {
      continue;
    }
    if (aAnswer === bAnswer) {
      cnt++;
      answer = `${aAnswer} ${i} ${j}`;
    }
  }
}

if (cnt === 0) {
  console.log('Impossible');
} else if (cnt === 1) {
  console.log(answer);
} else {
  console.log('Multiple');
}
