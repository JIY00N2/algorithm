function solution(rectangle, characterX, characterY, itemX, itemY) {
  //좌표에 2곱해주기
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  const doubleRec = rectangle.map((rec) => rec.map((point) => point * 2));

  //이동좌표 설정해주기
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  // 방문 배열
  const v = Array.from({ length: 103 }, () => Array(103).fill(0));
  // 테두리는 1, 테두리 내부 2
  doubleRec.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (v[i][j] === 0) {
            v[i][j] = 1;
          }
        } else {
          v[i][j] = 2;
        }
      }
    }
  });

  const bfs = (sx, sy) => {
    const q = [[sx, sy, 0]];

    //시작점을 탐색하면 안되므로 0으로 설정해준다.
    v[sx][sy] = 0;

    //BFS 탐색을 시작한다.
    while (q.length) {
      const [curX, curY, move] = q.shift();

      if (curX === itemX && curY === itemY) {
        return move / 2;
      }

      for (let i = 0; i < 4; i++) {
        let x = curX + dx[i];
        let y = curY + dy[i];
        if (v[x][y] === 1) {
          q.push([x, y, move + 1]);
          v[x][y] = 0;
        }
      }
    }
  };

  return bfs(characterX, characterY);
}
