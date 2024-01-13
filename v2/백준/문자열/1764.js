// 1764번: 듣보잡
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

// 교집합 구하기
const [n] = input[0];
const people = input.slice(1).flat();
const unheardSet = new Set(people.slice(0, Number(n)));
const unseenSet = new Set(people.slice(Number(n)));
const unheardAndUnseen = [...unseenSet].filter((v) => unheardSet.has(v)).sort();
const cnt = unheardAndUnseen.length;
const answers = [cnt, ...unheardAndUnseen].join('\n');
console.log(answers.trim());
