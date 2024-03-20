function solution(word) {
  const set = ['A', 'E', 'I', 'O', 'U'];
  const temp = [];
  function dfs(current, depth) {
    if (depth <= 5) {
      temp.push(current);
      for (let i = 0; i < set.length; i++) {
        dfs(current + set[i], depth + 1);
      }
    }
  }
  dfs('', 0);
  return temp.indexOf(word);
}
