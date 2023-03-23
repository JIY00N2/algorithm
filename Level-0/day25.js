/*
1. 안전지대

다른사람 풀이 
function solution(board) {
  const N = board.length
  const dx = [-1, 1, 0, 0, -1, -1, 1, 1]
  const dy = [0, 0, -1, 1, -1, 1, -1, 1]

  // 지뢰가 설치된 곳
  const booms = []
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (board[x][y] === 1) {
        booms.push([x, y])
      }
    }
  }

  // 지뢰가 설치된 곳 주변에 폭탄 설치
  booms.forEach(([x, y]) => {
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        board[nx][ny] = 1
      }
    }
  })

  // 폭탄이 설치되지 않은 곳만 카운팅
  let count = 0
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (board[x][y] === 0) {
        count++
      }
    }
  }

  return count
}
2. 겹치는 선분의 길이

다른 사람 풀이
function solution(lines) {
  const table = Array.from({ length: 200 }, () => new Set())
  lines.forEach(([a, b], index) => {
    for (let i = a; i < b; i++) {
      table[i + 100].add(index)
    }
  })

  let count = 0
  table.forEach((line) => {
    if ([...line].length > 1) count++
  })
  return count
}

3. 평행

다른사람 풀이
function solution(dots) {
  let answer = 0;

  function calculation(a, b, c, d) {
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) {
      answer += 1;
    }
  }

  // 1-2, 3-4가 이어졌을 때
  calculation(dots[0], dots[1], dots[2], dots[3]);
  // 1-3, 2-4가 이어졌을 때
  calculation(dots[0], dots[2], dots[1], dots[3]);
  // 1-4, 2-3가 이어졌을 때
  calculation(dots[0], dots[3], dots[1], dots[2]);
  return answer > 0 ? 1 : 0;
}

4. 옹알이(1)

다른사람 풀이
function solution(babbling) {
    let cnt = 0;
    babbling.forEach(element => {
        if (element.split(/aya|ye|woo|ma/g).join('') === '') {
            cnt++;
        }
    });
    return cnt;
}
 */