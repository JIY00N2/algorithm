function solution(str1, str2) {
  let lstr1 = str1.toLowerCase();
  let lstr2 = str2.toLowerCase();
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < lstr1.length - 1; i++) {
    arr1.push(lstr1.slice(i, i + 2));
  }
  for (let i = 0; i < lstr2.length - 1; i++) {
    arr2.push(lstr2.slice(i, i + 2));
  }
  const a1 = arr1.filter((v) => {
    if (
      v.charCodeAt(0) >= 97 &&
      v.charCodeAt(0) <= 122 &&
      v.charCodeAt(1) >= 97 &&
      v.charCodeAt(1) <= 122
    ) {
      return true;
    }
    return false;
  });
  const a2 = arr2.filter((v) => {
    if (
      v.charCodeAt(0) >= 97 &&
      v.charCodeAt(0) <= 122 &&
      v.charCodeAt(1) >= 97 &&
      v.charCodeAt(1) <= 122
    ) {
      return true;
    }
    return false;
  });
  const a3 = [...a2];
  // 교집합 개수 세기
  let intersectionCnt = 0;
  a1.forEach((v, id) => {
    for (let j = 0; j < a2.length; j++) {
      if (v === a2[j]) {
        a2.splice(j, 1);
        intersectionCnt++;
        break;
      }
    }
  });
  const unionCnt = a1.length + a3.length - intersectionCnt;

  return unionCnt > 0
    ? Math.floor((intersectionCnt / unionCnt) * 65536)
    : 65536;
}
