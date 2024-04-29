const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  solution(input.shift(), input);
  process.exit();
});

function solution([v, e], costs) {
  const sorted = costs.sort((a, b) => a[2] - b[2]);

  const arr = Array.from({ length: v }, (_, i) => i);

  const find = (arr, n) => {
    if (arr[n] === n) return n;
    return (arr[n] = find(arr, arr[n]));
  };

  const union = (arr, a, b) => {
    a = find(arr, a);
    b = find(arr, b);
    if (a < b) arr[b] = a;
    else arr[a] = b;
  };

  const isUnion = (arr, a, b) => {
    return find(arr, a) === find(arr, b);
  };

  let cost = 0;
  for (const [a, b, c] of sorted) {
    if (!isUnion(arr, a, b)) {
      cost += c;
      union(arr, a, b);
    }
  }

  console.log(cost);
}

// const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
// const input = require('fs')
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((el) => el.split(' ').map(Number));

// const [v, e] = input[0];
// const graph = input.slice(1);

// const sorted = graph.sort((a, b) => a[2] - b[2]);

// const arr = Array.from({ length: v + 1 }, (_, i) => i);

// const find = (n) => {
//   if (arr[n] === n) return n;
//   return (arr[n] = find(arr[n]));
// };

// const union = (a, b) => {
//   a = find(a);
//   b = find(b);
//   if (a < b) arr[b] = a;
//   else arr[a] = b;
// };

// const isUnion = (a, b) => {
//   return find(a) === find(b);
// };

// let cost = 0;
// for (const [a, b, c] of sorted) {
//   if (!isUnion(arr, a, b)) {
//     cost += c;
//     union(arr, a, b);
//   }
// }

// console.log(cost);
