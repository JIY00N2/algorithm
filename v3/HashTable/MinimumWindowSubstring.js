function minWindow(s, t) {
  // T에 있는 각 문자의 등장 횟수를 저장하는 해시 맵
  const tCount = {};
  for (const char of t) {
    tCount[char] = (tCount[char] || 0) + 1;
  }

  // 슬라이딩 윈도우 설정을 위한 포인터 및 결과 변수
  let left = 0;
  let right = 0;
  let minLen = Infinity;
  let minWindowStr = '';
  let requiredChars = t.length;

  // right 포인터가 문자열 s의 끝에 도달할 때까지 아래의 과정을 반복합니다.
  while (right < s.length) {
    // 현재 문자를 윈도우에 추가
    // 현재 right가 가리키는 문자가 t에 속한다면, 해당 문자의 등장 횟수를 감소시키고,
    // 필요한 문자의 수도 갱신합니다.
    const char = s[right];
    if (char in tCount) {
      tCount[char]--;
      if (tCount[char] >= 0) {
        requiredChars--;
      }
    }
    // 모든 문자가 포함된 경우
    while (requiredChars === 0) {
      // 최소 윈도우 갱신
      const windowLength = right - left + 1;
      if (windowLength < minLen) {
        minLen = windowLength;
        minWindowStr = s.substring(left, right + 1);
      }
      // left를 이동하여 최소 윈도우 축소
      const char = s[left];
      if (char in tCount) {
        tCount[char]++;
        if (tCount[char] > 0) {
          requiredChars++;
        }
      }
      left++;
    }
    // right를 이동하여 윈도우 확장
    right++;
  }

  return minWindowStr;
}
