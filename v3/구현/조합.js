const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let [n, r] = input;
n = BigInt(n);
r = BigInt(r);

function factorial(num) {
  if (num === 1n) return 1n;
  return num * factorial(num - 1n);
}
// const calculate = (start, n) => {
//   let result = 1;
//   let temp = start;
//   for (let i = 0; i < n; i++) {
//     result *= temp;
//     temp -= 1;
//   }
//   return result;
// };

const s = factorial(n) / (factorial(r) * factorial(n - r));
console.log(s.toString());
