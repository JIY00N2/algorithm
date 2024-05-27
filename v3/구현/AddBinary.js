// 0b 접두사가 붙으면 2진수다, parseInt로 안되면 BigInt 사용
// a가 2진수, parseInt(a, 2) -> 2진수를 10진수로 변환
// b가 10진수, b.toString(2) -> 10진수를 2진수로 변환
function addBinary(a, b) {
  let n = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return n.toString(2);
}
