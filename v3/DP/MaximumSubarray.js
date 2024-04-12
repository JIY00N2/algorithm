function maxSubArray(nums) {
  function dp() {
    const temp = Array.from({ length: nums.length }, () => 0);
    temp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      temp[i] = Math.max(temp[i - 1] + nums[i], nums[i]);
    }
    return Math.max(...temp);
  }

  return dp();
}
