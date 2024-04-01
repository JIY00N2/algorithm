// 백트래킹 사용
function combine(nums, k) {
  const result = [];

  function backtrack(start, cur) {
    if (cur.length === k) {
      result.push([...cur]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i]);
      //backtrack(i, cur); 중복 조합
      backtrack(i + 1, cur);
      cur.pop();
    }
  }

  backtrack(0, []);
  return result;
}

// Example usage:
const nums = [1, 2, 3, 4];
const k = 2;
console.log(combine(nums, k));
// [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
