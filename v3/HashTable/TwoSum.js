// hash table
function twoSum(nums, target) {
  let memo = {};
  let answer = [-1, -1];
  nums.forEach((num, id) => {
    const needed = target - num;
    if (needed in memo) {
      answer = [memo[needed], id];
    } else {
      memo[num] = id;
    }
  });
  return answer;
}
