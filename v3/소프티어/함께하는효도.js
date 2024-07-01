const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (item) => {
  input.push(item.split(' ').map((v) => +v));
});

function solution(n, m, arr, location) {
  const dir = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  const isValid = (x, y) => {
    return x >= 0 && y >= 0 && x < n && y < n;
  };

  let v = Array.from({ length: n }, () => Array(n).fill(false));

  const bfs = (sx, sy) => {
    let max = 0;
    let maxHis = [];

    const q = [[sx, sy, arr[sx][sy], [[sx, sy]]]];
    while (q.length) {
      let [curX, curY, sum, his] = q.shift();
      if (his.length === 4) {
        if (max <= sum) {
          max = sum;
          maxHis = his;
        }
        continue;
      }
      for (let i = 0; i < dir.length; i++) {
        const nx = curX + dir[i][0];
        const ny = curY + dir[i][1];
        if (
          isValid(nx, ny) &&
          !v[nx][ny] &&
          !his.some(([x, y]) => x === nx && y === ny)
        ) {
          q.push([nx, ny, sum + arr[nx][ny], [...his, [nx, ny]]]);
        }
      }
    }
    for (let i = 0; i < maxHis.length; i++) {
      const [mx, my] = maxHis[i];
      v[mx][my] = true;
    }
    return max;
  };

  const getPermutations = (n, arr) => {
    const result = [];
    if (n === 1) {
      return arr.map((v) => [v]);
    } else {
      arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(n - 1, rest);
        const attatched = permutations.map((v) => [fixed, ...v]);
        result.push(...attatched);
      });
    }
    return result;
  };

  let answer = 0;
  getPermutations(m, location).forEach((arr) => {
    let temp = 0;
    v = Array.from({ length: n }, () => Array(n).fill(false));
    for (let i = 0; i < m; i++) {
      const [sx, sy] = arr[i];
      temp += bfs(sx - 1, sy - 1);
    }
    answer = Math.max(temp, answer);
  });

  return answer;
}

rl.on('close', () => {
  const [n, m] = input[0]; // 격자 칸, 친구 수
  const arr = input.slice(1, n + 1);
  const location = input.slice(n + 1);
  console.log(solution(n, m, arr, location));
  process.exit();
});
