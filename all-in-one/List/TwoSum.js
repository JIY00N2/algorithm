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

// 투포인터
function twoSumTwoPointer(nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      left++;
    } else if (nums[left] + nums[right] > target) {
      right--;
    } else {
      return 'True';
    }
  }
  return 'False';
}

console.log(twoSumTwoPointer([4, 1, 9, 7, 5, 3, 18], 14));
