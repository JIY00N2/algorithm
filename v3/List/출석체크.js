const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, k, q, m] = input[0];
const sleeps = new Set(input[1]);
const students = input[2];
const arrs = input.slice(3);

const attendance = new Array(n + 3).fill(0);

// 졸고 있는 학생 처리
sleeps.forEach((s) => {
  attendance[s] = -1;
});

// 출석 코드를 받은 학생 처리
students.forEach((student) => {
  if (attendance[student] === -1) {
    return;
  }
  for (let i = student; i < attendance.length; i += student) {
    if (attendance[i] === 0) {
      attendance[i] = 1;
    }
  }
});

// Prefix sum 배열 생성
const prefixSum = new Array(n + 3).fill(0);
for (let i = 3; i < prefixSum.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + (attendance[i] !== 1 ? 1 : 0);
}

// 각 구간에 대해 정답 계산
for (let x = 0; x < m; x++) {
  const [s, e] = arrs[x];
  console.log(prefixSum[e] - prefixSum[s - 1]);
}
