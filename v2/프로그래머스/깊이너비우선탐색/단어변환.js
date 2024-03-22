function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const bfs = (start) => {
    const q = [[start, 0]]; // [[hit, 0]]
    while (q.length) {
      const [curWord, stage] = q.shift(); // hit, 0
      if (curWord === target) {
        return stage;
      }
      for (let i = 0; i < words.length; i++) {
        let diff = 0;
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
          if (word[j] !== curWord[j]) {
            diff += 1;
          }
        }
        if (diff === 1) {
          q.push([word, stage + 1]);
        }
      }
    }
  };

  return bfs(begin);
}
