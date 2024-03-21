function solution(name) {
  let answer = 0;

  let min = name.length - 1; // AAA같이 젤 최소인 경우 길이는 name.length - 1

  for (let i = 0; i < name.length; i++) {
    let alpha = name.charCodeAt(i);
    // 현재 알파벳이 N(78: 13번째임) 기준으로 작으면 앞에서 진행, 크면 z부터 뒤에서 진행
    if (alpha < 78) {
      answer += alpha % 65;
    } else {
      answer += 91 - alpha;
    }

    // i의 다음 인덱스가 A이면 하나의 혹은 연속된 A 다음에 오는 알파벳의 인덱스를 가리킨다.
    let nextIndex = i + 1;

    // 현재알파벳이 마지막 알파벳이 될 때까지 && 다음알파벳으로 A가 나올때까지 nextIndex += 1
    // nextIndex가 A가 아니면 넘어가고, nextIndex에 A가 나온다면 nextIndex += 1을 하여 A의 다음 인덱스도 A인지 확인한다.
    // -> 다음 문자열들에서 A를 찾는 작업
    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex += 1;
    }

    // length - nextIndex는 뒤로 쭉 갔을 때의 길이(A를 통과해서 갔을 때).
    min = Math.min(
      min,
      i * 2 + name.length - nextIndex, // 먼저 오른쪽으로 가기
      // 이 경우는 A의 앞에 있는 알파벳들이 뒤에 있는 알파벳의 수보다 적을 경우 최소가 된다.
      // 앞에서 갔다가 뒤돌아오는 횟수 (A 뭉떵이를 기준으로 앞에 알파벳 < 뒤에 알파벳일 때 앞에서 A 직전까지 갔다가 다시 돌아오기 때문에 곱하기 2를 해준다.)
      // 예를 들어 CDAAJJJJ이면 JJJJ보다 CD가 짧기 때문에 D로 갔다가 다시 뒤돌아서 마지막인 J로 가야한다.
      // C에서 D까지 조작해서 +1, 다시 D에서 C로 되돌아갈 때 + 1, 따라서 i * 2를 해줘야 한다.
      // 여기서 [문자열의 길이]에서 [마지막에 위치한 A의 바로 뒤에 있는 문자의 인덱스]를 빼주면 A 뒤에 있는 알파벳들의 길이를 구할 수 있다. 예시에서는 JJJ이기 때문에 3.
      i + (name.length - nextIndex) * 2 // 처음부터 반대로 가기
      // 이 경우는 A의 앞에 있는 알파벳들보다 뒤에 있는 알파벳들의 수가 적을 경우 최소가된다.
      // 예를 들어, JJJJAACD 일 때, A의 앞에 문자열이 뒤보다 많기 때문에
      // 네번째 J까지 갔다가 다시 앞으로 돌아가는것(8회)보다 처음부터 CD를 돌고 다시 JJJJ로 돌아가는게 횟수가 적다(7회)
    );
  }
  answer += min;
  return answer;
}
