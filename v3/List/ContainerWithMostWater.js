// 투포인터
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let h = Math.min(height[left], height[right]);
    let area = h * (right - left);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    max = Math.max(area, max);
  }
  return max;
}
