// 3005 크로스워드 퍼즐 쳐다보기
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const [n, m] = input[0];
const arr = input.slice(1).flat();
const transposed = Array.from({ length: m }, () => new Array(n).fill(0));
const temp = [];

for (let i = 0; i < arr.length; i++) {
  temp.push(arr[i].split('#'));
}

for (let i = 0; i < n; i++) {
  const word = arr[i].split('');
  for (let j = 0; j < m; j++) {
    transposed[j][i] = word[j];
  }
}

for (let i = 0; i < transposed.length; i++) {
  temp.push(transposed[i].join('').split('#'));
}

const answers = temp
  .flat()
  .sort()
  .filter((v) => v.length >= 2)[0];

console.log(answers);
