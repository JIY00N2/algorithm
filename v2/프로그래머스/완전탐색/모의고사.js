function solution(answers) {
  const correct = [0, 0, 0];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    if (one[i % 5] === answers[i]) {
      correct[0]++;
    }
    if (two[i % 8] === answers[i]) {
      correct[1]++;
    }
    if (three[i % 10] === answers[i]) {
      correct[2]++;
    }
  }

  const answer = [];
  const max = Math.max(...correct);
  for (let i = 0; i < correct.length; i++) {
    if (correct[i] === max) {
      answer.push(i + 1);
    }
  }
  return answer;
}
