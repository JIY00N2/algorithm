// 늑대와 올바른 단어
let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const wolf = ['w', 'o', 'l', 'f'];
const temp = [];
for (let i = 1; i <= 12; i++) {
  temp.push(wolf.map((v) => v.repeat(i)).join(''));
}

temp.forEach((v) => (input = input.replaceAll(v, 'a')));
console.log(input.replaceAll('a', '').length ? 0 : 1);
