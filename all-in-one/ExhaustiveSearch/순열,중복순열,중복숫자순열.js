// 백트래킹 사용
function permute(nums) {
  const result = [];

  function backtrack(cur) {
    // nums.length는 몇개 뽑을지
    if (cur.length === nums.length) {
      result.push([...cur]);
      return;
    }
    // 1, 2, 3
    for (let num of nums) {
      if (!cur.includes(num)) {
        cur.push(num);
        backtrack(cur);
        cur.pop(); // num(1,2,3) 밑에 각각 다 끝나면 num을 pop하고 다음 num으로 넘어감
      }
    }
    // 중복 순열
    // for (let num of nums) {
    //   cur.push(num);
    //   backtrack(cur);
    //   cur.pop();
    // }
  }

  backtrack([]);
  return result;
}

// Example usage:
const nums = [1, 2, 3];
console.log(permute(nums));
// [[ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 1, 2 ], [ 3, 2, 1 ]]

// 중복 숫자 순열
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
