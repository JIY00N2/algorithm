### 1. HashTable

<img src="img/hash-table.png" width="80%" height="100%">

- 해시 테이블: 효율적인 탐색(빠른 탐색)을 위한 자료구조로써 key-value 쌍의 데이터를 입력 받음
- hash function h에 key값을 입력으로 넣어 얻은 해시 값h(k)를 위치로 지정하여 key-value 데이터 쌍을 저장
- 저장, 삭제, 검색의 시간복잡도 모두 O(1)

- key가 객체에 있는지 -> O(1)

```ts
const myObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

// 특정 키가 있는지 확인
if ('key1' in myObject) {
  console.log('key1 exists in myObject');
} else {
  console.log('key1 does not exist in myObject');
}
```

- 기억하고 싶은걸 key로..

### 2. 코테 적용

- 해시 테이블의 활용
  > 1. 메모리를 사용해서 시간복잡도를 줄일 때 사용
  > 2. key in {} 가 핵심 -> O(1)
