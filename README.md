## 백준 문제 예제 입력받기

### 1. 한 줄에 공백으로 값이 들어올 때

```js
// 1 2
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
```

### 2. 한 줄에 하나씩 값이 들어올 때

```js
// 1
// 2
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
```
