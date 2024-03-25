// 6:06~6:26
function solution(n, k) {
  let answer = 0;
  const num = n.toString(k);
  const arr = num.split('0');
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(+arr[i])) {
      answer++;
    }
  }
  return answer;
}
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
