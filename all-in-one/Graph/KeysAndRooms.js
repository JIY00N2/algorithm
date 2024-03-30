// 1. dfs

function canVisitAllRooms(rooms) {
  const visited = Array(rooms.length).fill(false); // ex) 5번방 방문 안했네? -> False / 모든 방 방문 True

  // v에 연결되어 있는 모든 vertex 방문할거다.
  function dfs(cur_v) {
    visited[cur_v] = true;
    rooms[cur_v].forEach((next_v) => {
      if (!visited[next_v]) {
        dfs(next_v);
      }
    });
  }

  dfs(0);

  return visited.every((v) => v === true);
}

// 2. bfs

function canVisitAllRooms(rooms) {
  function bfs(start) {
    const visited = Array(rooms.length).fill(false);
    visited[start] = true;
    const q = [start];
    while (q.length) {
      const cur = q.shift();
      rooms[cur].forEach((next) => {
        if (!visited[next]) {
          q.push(next);
          visited[next] = true;
        }
      });
    }
    return visited;
  }

  const v = bfs(0);
  return v.every((v) => v === true);
}
