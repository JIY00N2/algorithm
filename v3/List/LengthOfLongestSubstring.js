// 내 풀이 while
function lengthOfLongestSubstring(s) {
  let i = 0;
  let str = '';
  const temp = [];
  let arr = s.split('');
  while (arr.length > 0 && arr[i]) {
    if (str.includes(arr[i])) {
      temp.push(str.length);
      arr.shift();
      str = '';
      i = 0;
    } else {
      str += arr[i];
      i++;
    }
  }
  temp.push(str.length);
  const len = Math.max(...temp);
  return len;
}
