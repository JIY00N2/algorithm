function solution(k, dungeons) {
  const length = dungeons.length;
  const arr = Array.from({ length }, (_, i) => i);
  const temp = getPermutations(arr, length);
  const answer = [];

  //[[ 0, 1, 2 ],[ 0, 2, 1 ],[ 1, 0, 2 ],[ 1, 2, 0 ],[ 2, 0, 1 ],[ 2, 1, 0 ]]
  for (let i = 0; i < temp.length; i++) {
    const t = temp[i]; // [0,2,1]
    let cnt = 0;
    let originK = k;
    for (let j = 0; j < t.length; j++) {
      const [need, consume] = dungeons[t[j]];
      if (originK >= need) {
        cnt += 1;
        originK = originK - consume;
      }
    }
    answer.push(cnt);
  }
  return Math.max(...answer);
}

function getPermutations(arr, selectNum) {
  const results = [];
  if (selectNum === 1) {
    return arr.map((v) => [v]);
  } else {
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNum - 1);
      const attatched = permutations.map((permuatation) => [
        fixed,
        ...permuatation,
      ]);
      results.push(...attatched);
    });
  }
  return results;
}
