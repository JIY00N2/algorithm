// 반복문
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return 'True';
      }
    }
  }
  return 'False';
}

console.log(twoSum([4, 1, 9, 7, 5, 3, 18], 14));
