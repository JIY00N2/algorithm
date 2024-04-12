function numSubarraysWithSum(nums, goal) {
  const temp = Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    temp[i + 1] = temp[i] + nums[i];
  }
  // temp = [ 0, 1, 1, 2, 2, 3 ]
  const map = new Map();
  let cnt = 0;

  temp.forEach((sum) => {
    cnt += map.has(sum) ? map.get(sum) : 0;
    map.set(sum + goal, map.has(sum + goal) ? map.get(sum + goal) + 1 : 1);
  });
  // map 객체에 새로운 요소를 추가합니다.
  // 이 때, 키는 sum + goal이 되고, 값은 해당 키의 이전 값에 1을 더한 값이 됩니다.
  return cnt;
}
