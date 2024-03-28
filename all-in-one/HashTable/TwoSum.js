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

console.log(twoSum([2, 7, 11, 15], 9));
