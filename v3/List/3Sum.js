// 투포인터
function threeSum(nums) {
  const answer = [];
  if (nums.length < 3) {
    return answer;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return answer;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        answer.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        right--;
      }

      while (i < nums.length - 2 && nums[i] === nums[i + 1]) {
        i++;
      }
    }
  }
  return answer;
}
