function multiply(num1, num2) {
  let len = num1.length + num2.length;
  const arr = Array(len).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      arr[i + j + 1] += parseInt(num1[i]) * parseInt(num2[j]);
      arr[i + j] += Math.floor(arr[i + j + 1] / 10);
      arr[i + j + 1] %= 10;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return arr.slice(i).join('');
    }
  }

  return '0';
}
