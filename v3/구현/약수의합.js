// 약수의 합
function solution(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return getDivisorSum(n);
  }
}

function getDivisorSum(n) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === n / i) {
        sum += i;
      } else {
        sum += i + n / i;
      }
    }
  }
  return sum;
}
