function partition(s) {
  const answer = [];

  function isPalindrome(str) {
    if (str === [...str].reverse().join('')) {
      return true;
    }
    return false;
  }

  function backtracking(start, cur) {
    // base case
    if (start === s.length) {
      answer.push([...cur]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      let subStr = s.slice(start, i + 1);
      if (isPalindrome(subStr)) {
        cur.push(subStr);
        backtracking(i + 1, cur);
        cur.pop();
      }
    }
  }

  backtracking(0, []);

  return answer;
}
