// hash table
function longestConsecutive(nums) {
  let longest = 0;
  const set = new Set(nums);
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let cnt = 1;
      let target = Number(num) + 1;
      while (set.has(target)) {
        target++;
        cnt++;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}
