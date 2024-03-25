function solution(phone_book) {
  let answer = true;
  let map = new Map();

  // 1) Map(3) { '119' => '', '97674223' => '', '1195524421' => '' }
  phone_book.forEach((e) => {
    map.set(e, '');
  });

  // 2)
  for (let [key, value] of map) {
    for (let i = 1; i < key.length; i++) {
      let pre = key.slice(0, i);

      // 접두어를 확인하기 위한 문자열 자르는데 최소한의 길이는 1이 필요
      // 해당 접두어가 해시에 존재하면 return
      if (map.has(pre)) return false;
    }
  }
  return answer;
}
