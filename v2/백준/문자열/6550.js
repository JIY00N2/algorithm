// 6550번: 부분 문자열
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

let answers = '';
for (let i = 0; i < input.length; i++) {
  let first = input[i][0]; // person
  const second = input[i][1]; //compression
  for (let j = 0; j < second.length; j++) {
    if (second[j] === first[0]) {
      first = first.slice(1);
    } else {
      continue;
    }
  }
  if (first.length === 0) {
    answers += 'Yes\n';
  } else {
    answers += 'No\n';
  }
}

console.log(answers.trim());
