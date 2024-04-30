const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

let s = input[0][0].split('');
const n = +input[1][0];
const arr = input.slice(2);

const stack = [];

for (let i = 0; i < n; i++) {
  if (arr[i][0] === 'L' && s.length) {
    stack.push(s.pop());
  } else if (arr[i][0] === 'D' && stack.length) {
    s.push(stack.pop());
  } else if (arr[i][0] === 'B') {
    s.pop();
  } else if (arr[i][0] === 'P') {
    s.push(arr[i][1]);
  }
}

let answer = s.join('');
answer += stack.reverse().join('');
console.log(answer);

// 시간초과 풀이..
// s = s + '0'; // 0abcd0
// let cursorIndex = s.length - 1; // 4

// let object = { s, cursorIndex };

// function Lcalculate(object) {
//   let { s, cursorIndex } = object;
//   if (cursorIndex === 0) {
//     return { s, cursorIndex };
//   }
//   cursorIndex--;
//   return { s, cursorIndex };
// }

// function Dcalculate(object) {
//   let { s, cursorIndex } = object;
//   if (cursorIndex === s.length - 1) {
//     return { s, cursorIndex };
//   }
//   cursorIndex++;
//   return { s, cursorIndex };
// }

// function Bcalculate(object) {
//   let { s, cursorIndex } = object;
//   if (cursorIndex === 0) {
//     return { s, cursorIndex };
//   }
//   s = s.slice(0, cursorIndex - 1) + s.slice(cursorIndex);
//   cursorIndex--;
//   return { s, cursorIndex };
// }

// function Pcalculate(object, addChar) {
//   let { s, cursorIndex } = object;
//   if (cursorIndex === 0) {
//     s = addChar + s;
//   } else {
//     s = s.slice(0, cursorIndex) + addChar + s.slice(cursorIndex);
//   }
//   cursorIndex++;
//   return { s, cursorIndex };
// }

// for (let i = 0; i < n; i++) {
//   if (arr[i][0] === 'L') {
//     object = Lcalculate(object);
//   }
//   if (arr[i][0] === 'D') {
//     object = Dcalculate(object);
//   }
//   if (arr[i][0] === 'B') {
//     object = Bcalculate(object);
//   }
//   if (arr[i][0] === 'P') {
//     object = Pcalculate(object, arr[i][1]);
//   }
// }

// console.log(object.s.replaceAll('0', ''));
