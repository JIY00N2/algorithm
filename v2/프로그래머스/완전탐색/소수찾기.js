function solution(numbers) {
  const answer = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    const permutation = [...getPermutation([...numbers], i)]; // 	[ [ '1' ], [ '7' ] ] [ [ '1', '7' ], [ '7', '1' ] ]
    const primeNumbers = permutation.filter((arr) => {
      // 	[ '1' ] [ '7' ] [ '1', '7' ] [ '7', '1' ]
      const number = +arr.join(''); // 1, 7, 17, 71
      const isPrimeNumber = checkPrimeNumber(number);
      return isPrimeNumber;
    }); // [ [ '7' ] ], [ [ '1', '7' ], [ '7', '1' ] ]
    primeNumbers.forEach((arr) => {
      answer.add(+arr.join('')); // 7, 17, 71
    });
  }
  return answer.size;
}

const checkPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPermutation = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((v) => [v]);
  else {
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutation(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });
  }

  return results;
};
