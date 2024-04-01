// 백트래킹 + 조합 사용
function combine(nums) {
  const result = [];

  function backtrack(start, cur, k) {
    if (cur.length === k) {
      result.push([...cur]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i]);
      backtrack(i + 1, cur, k);
      cur.pop();
    }
  }

  for (let k = 0; k <= nums.length; k++) {
    backtrack(0, [], k);
  }

  return result;
}

// Example usage:
console.log(combine([1, 2, 3, 4]));
// [[],[ 1 ],[ 2 ],[ 3 ],[ 4 ],[ 1, 2 ],[ 1, 3 ],[ 1, 4 ],[ 2, 3 ],[ 2, 4 ],[ 3, 4 ],[ 1, 2, 3 ],[ 1, 2, 4 ],[ 1, 3, 4 ],[ 2, 3, 4 ],[ 1, 2, 3, 4 ]]
