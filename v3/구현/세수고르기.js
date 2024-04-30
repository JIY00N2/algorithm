// 우웩 최악..
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let s = [];
let res = Number.MAX_SAFE_INTEGER;

rl.question('', (line1) => {
  [n, m] = line1.trim().split(' ').map(Number);

  rl.question('', (line2) => {
    s = line2.trim().split(' ').map(Number);
    for (let i = 1; i < 1002; i++) {
      if (s.includes(i)) continue;
      for (let j = 1; j < 1002; j++) {
        if (s.includes(j)) continue;
        for (let k = 1; k < 1002; k++) {
          if (s.includes(k)) continue;
          const q = i * j * k;
          if (Math.abs(n - q) < res) res = Math.abs(n - q);
          if (n + 1 < q) break;
        }
      }
    }
    console.log(res);
    rl.close();
  });
});
