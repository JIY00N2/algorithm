// 1. 객체
function twoSum(nums, target) {
  let answer = [-1, -1];
  const object = {};
  nums.forEach((v, id) => {
    const needed = target - v;
    if (needed in object) {
      answer = [object[needed], id];
      return;
    }
    object[v] = id;
  });
  return answer;
}

// 2. map
function twoSum() {
  let answer = [-1, -1];
  const map = new Map();
  nums.forEach((v, id) => {
    const needed = target - v;
    if (map.has(needed)) {
      const neededId = map.get(needed);
      answer = [neededId, id];
    } else {
      map.set(v, id);
    }
  });

  return answer;
}

console.log(twoSum([2, 7, 11, 15], 9));
