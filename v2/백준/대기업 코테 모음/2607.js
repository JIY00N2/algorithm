// 2607
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const n = Number(input[0]);
const arr = input.slice(1).flat();
const target = arr[0];
const length = target.length;
const words = arr.slice(1);
let cnt = 0;

for (let i = 0; i < words.length; i++) {
  const word = words[i]; // DOLL
  // ABA, ABB === AAAB
  let compare = target;
  if (word.length === length - 1) {
    let l = 0;
    for (let j = 0; j < word.length; j++) {
      if (compare.includes(word[j])) {
        compare = compare.replace(word[j], '');
        l++;
      } else {
        break;
      }
    }
    if (l === length - 1) {
      cnt++;
    }
  }
  // GOD, GOL === DOG
  if (word.length === length) {
    let l = 0;
    for (let j = 0; j < word.length; j++) {
      if (compare.includes(word[j])) {
        compare = compare.replace(word[j], '');
        l++;
      }
    }
    if (l === length || l === length - 1) {
      cnt++;
    }
  }
  // DOGG, DOGL === GOD
  if (word.length === length + 1) {
    let l = 0;
    for (let j = 0; j < word.length; j++) {
      if (compare.includes(word[j])) {
        compare = compare.replace(word[j], '');
        l++;
      }
    }
    if (l === length || l === length + 1) {
      cnt++;
    }
  }
}

console.log(cnt);
