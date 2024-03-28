// 이 문제의 관건 -> 첫 스타트 인지 판단해야 함
// 완탐: O(n^3), 해시: O(n), 정렬: O(nlogn)
// 1. 객체
function longestConsecutive(nums) {
  let longest = 0;
  let object = {};

  for (let num of nums) {
    object[num] = true;
  }

  for (const num in object) {
    if (!(parseInt(num) - 1 in object)) {
      let cnt = 1;
      let target = parseInt(num) + 1;
      while (target in object) {
        target++;
        cnt++;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}

// 2. set
function longestConsecutive(nums) {
  let longest = 0;

  const set = new Set(nums);

  for (const num of set) {
    if (!set.has(num - 1)) {
      let cnt = 1;
      let target = num + 1;
      while (set.has(target)) {
        cnt++;
        target++;
      }
      longest = Math.max(longest, cnt);
    }
  }

  return longest;
}
