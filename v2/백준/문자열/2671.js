// 2671 잠수함 식별
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const regex = /^(100+1+|01)+$/; // (100~1~|01)~
if (input.match(regex)) {
  console.log('SUBMARINE');
} else {
  console.log('NOISE');
}
