// 백트래킹
function getPermutation(n, k) {
  let str = '';
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  const used = Array(n).fill(false);

  function backtrack(cur) {
    if (cur.length === n) {
      k--;
      if (k === 0) {
        return (str = cur.join(''));
      }
    }
    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        used[i] = true;
        cur.push(nums[i]);
        backtrack(cur);
        cur.pop();
        used[i] = false;
      }
    }
  }

  backtrack([]);
  return str;
}

// 내풀이
function getPermutation(n, k) {
  let str = '';
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  k--;

  function factorial(n) {
    let temp = 1;
    for (let i = n; i >= 1; i--) {
      temp *= i;
    }
    return temp;
  }

  let total = factorial(n);

  for (let i = n; i >= 1; i--) {
    total = total / i;
    const index = Math.floor(k / total);
    str += nums.splice(index, 1);
    k = k % total;
  }

  return str;
}
