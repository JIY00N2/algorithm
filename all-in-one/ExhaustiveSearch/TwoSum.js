// 백트래킹 + 조합
function solution(nums, target, k) {
  function backtrack(start, cur) {
    const sum = cur.reduce((acc, idx) => acc + nums[idx], 0);

    if (cur.length === k && sum === target) {
      return cur;
    }

    for (let i = start; i < nums.length; i++) {
      cur.push(i);
      const ret = backtrack(i + 1, cur);
      if (ret) {
        return ret;
      }
      cur.pop();
    }
    return null;
  }

  return backtrack(0, []);
}

console.log(solution([4, 9, 7, 5, 1], 15, 3));
