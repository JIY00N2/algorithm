/*2023.04.17
1. 점프와 순간 이동 🔺

내 풀이
function solution(n)
{
    let result = 0;
    while(n > 0){
        if(n % 2 === 0){
            n = n / 2;
        }else{
            n = n - 1;
            result++;
        }
    }
    return result;
    // 주어진 수를 2로 계속 나눈다
    // 나머지 0 -> 진행
    // 나머지 1 -> -1 빼주고 진행, result++;
}

2. N개의 최소공배수 ❌

내 풀이
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}
// a는 누적값, b는 현재 요소의 값
//  2 6 8 14
function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
    // (2*6)/getGcd(2,6) -> getGcd(6, 2 % 6) -> getGcd(6,2) -> getGcd(2,0) -> 2 -> 2 * 6 / 2 = 6
    // (6,8) / getGcd(6,8)
}
// x * y / 최대 공약수 = 최소 공배수
*/