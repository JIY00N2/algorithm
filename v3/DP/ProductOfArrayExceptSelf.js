// 238. Product of Array Except Self 누적곱
// 2:08-2:39
function productExceptSelf(nums) {
  const answer = [];

  const leftToRight = Array(nums.length).fill(0);
  leftToRight[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    leftToRight[i] = leftToRight[i - 1] * nums[i - 1];
  }

  const rightToLeft = Array(nums.length).fill(0);
  rightToLeft[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightToLeft[i] = rightToLeft[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answer.push(leftToRight[i] * rightToLeft[i]);
  }

  return answer;
}
