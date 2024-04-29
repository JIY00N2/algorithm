## 백준

> 실버 5문제, 골드 3문제

## 백준 문제 예제 입력받기

- 시간 초과 날 때 고려하기

```ts
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  solution(/** */); // input
  process.exit();
});

function solution() {}
```

### 1. 하나의 값을 입력받을 때

1. 입력값이 하나일 경우(문자)

```ts
const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(path).toString().trim();
//input: hello
//output: hello
```

2. 입력값이 하나일 경우(숫자)

```ts
const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = +require('fs').readFileSync(path).toString().trim();
또는
const input = require('fs').readFileSync(path).toString().trim();
let num = +input; 또는 parseInt(input) 또는 Number(input)
//input: 8
//output: 8
```

3. 입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(문자)

```ts
const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(path).toString().trim().split(' ');
//input: hello world
//output: ['hello', 'world']
```

4. 입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(숫자)

```ts
const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
//input: 8 7 56
//output: [8, 7, 56]
```

5. 입력값이 여러 줄의 값들인 경우(문자)

```ts
const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
//input:
//a
//b
//c
//d
//output: ['a', 'b', 'c', 'd']
```

6. 입력값이 여러 줄의 값들인 경우(숫자)

```ts
const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
//input:
//1
//2
//3
//4
//5
//output: [1, 2, 3, 4, 5]
```

7. 입력값이 여러 줄의 값들이 띄어쓰기로 구분되어 있는 경우(문자)

```ts
const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));
//input:
//ab cd
//ef gh
//my name is yoon
//hi hello
//output: [
//  [ 'ab', 'cd' ],
//  [ 'ef', 'gh' ],
//  [ 'my', 'name', 'is', 'yoon' ],
//  [ 'hi', 'hello' ]
//]
```

8. 입력값이 여러 줄의 값들이 띄어쓰기로 구분되어 있는 경우(모두 숫자)

```ts
const path = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));
//input:
//3
//1 2
//3 4 5 6
//5 3 2 5
//0 1 1 0
//output: [ [ 3 ], [ 1, 2 ], [ 3, 4, 5, 6 ], [ 5, 3, 2, 5 ], [ 0, 1, 1, 0 ] ]
```
