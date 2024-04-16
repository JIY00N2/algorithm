// Permutations 46
function permute(nums) {
  const k = nums.length;
  const result = [];

  function backtracking(cur) {
    if (cur.length === k) {
      result.push([...cur]);
      return;
    }

    for (let num of nums) {
      if (!cur.includes(num)) {
        cur.push(num);
        backtracking(cur);
        cur.pop();
      }
    }
  }

  backtracking([]);

  return result;
}
