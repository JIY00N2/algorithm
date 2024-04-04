// bfs 템플릿
function canVisitAllRooms(rooms) {
  function bfs(start) {
    const visited = Array.from({ length: rooms.length }, () => false);
    const q = [start];
    visited[start] = true;
    while (q.length) {
      const cur = q.shift();
      rooms[cur].forEach((element) => {
        if (!visited[element]) {
          q.push(element);
          visited[element] = true;
        }
      });
    }
    return visited;
  }
  const temp = bfs(0);
  const answer = temp.every((v) => v);
  return answer;
}
