// BackTracking + 해시
function permuteUnique(nums) {
  const result = [];
  const k = nums.length;
  const map = new Map(); // Map(2) { 1 => 2, 2 => 1 }

  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  function backtracking(cur) {
    if (cur.length === k) {
      result.push([...cur]);
      return;
    }

    for (let [key, value] of map.entries()) {
      if (value > 0) {
        cur.push(key);
        map.set(key, value - 1);

        backtracking(cur);

        map.set(key, value);
        cur.pop();
      }
    }
  }

  backtracking([]);

  return result;
}

/** 
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
 */
