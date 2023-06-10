function solution(clothes) {
  const map = new Map();
  let total = 1;

  for (let i = 0; i < clothes.length; i++) {
    const kind = clothes[i][1];
    if (map.has(kind)) {
      const isKind = map.get(kind);
      map.set(kind, isKind + 1);
    } else {
      map.set(kind, 1);
    }
  }

  for (const kindCnt of map.values()) {
    total *= kindCnt + 1;
  }

  return total - 1;
}
/*
14:10 ~ 15:17

*/
