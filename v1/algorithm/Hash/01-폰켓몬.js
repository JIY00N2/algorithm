/* 01-폰켓몬 ⭕
내 풀이
function solution(nums) {
    const set = new Set(nums);
    const setArr = [...set];
    const kind = nums.length / 2;
    const answer = setArr.length < kind ? setArr.length : kind;
    return answer;
}
// 가짓수 nums.length / 2
// 중복을 없애서 종류의 최댓값 구하자 -> Set을 이용한 해시 풀이!

다른 사람 풀이

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}
 */
