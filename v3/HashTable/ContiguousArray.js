// 525 Contiguous Array 2:54-3:21
function findMaxLength(nums) {
  let maxLen = 0;
  let count = 0; // zero === one => 0, zero > one => 음수 zero < one => 양수
  const map = new Map(); // count => index
  map.set(0, -1); // count === 0 and index === -1 init setting

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count += -1;
    } else {
      count += 1;
    }

    if (map.has(count)) {
      Math.max(max, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }
  return maxLen;
}
