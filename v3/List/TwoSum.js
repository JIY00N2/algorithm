// 투포인터
function twoSum(nums, target) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    temp[i] = { index: i, value: nums[i] };
  }
  temp.sort((a, b) => a.value - b.value);
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    if (temp[l].value + temp[r].value > target) {
      r--;
    } else if (temp[l].value + temp[r].value < target) {
      l++;
    } else {
      return [temp[l].index, temp[r].index];
    }
  }
  return [-1, -1];
}
