/* 해시
1. 구현 방법 : 배열(비추), 객체, Map, Set
2. 빅오: 탐색: O(1), 추가: O(1), 삭제: O(1)
3. 예시

1. 객체 이용
let object = new Object();

2. Map 이용
> 키-값 쌍과 키의 원래 삽입 순서를 기억함
> 키는 오직 단 하나만 존재
> get, delete, has, set, keys, values, entries, forEach

const map1 = new Map();
map1.set("a",1);
map1.set("b",2);
map1.set("c",3);
console.log(map1.get("a")); // 1

map1.set("a",97);
console.log(map1.get("a")); // 97

console.log(map1.size); // 3

map1.delete("b");
console.log(map1.size); // 2

for (const [key, value] of map1) {
  console.log(`${key} = ${value}`); 
}
// "a = 97"
// "c = 3"

const is = map1.has("a");
console.log(is); // true

for (const key of map1.keys()) {
  console.log(key);
}
// "a"
// "c"

for (const value of myMap.values()) {
  console.log(value);
}
// 97
// 3


for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// "a = 97"
// "c = 3"


3. Set 이용
const set1 = new Set();
set1.add(1); // Set { 1 }
set1.add(5); // Set { 1, 5 }
set1.add(5); // Set { 1, 5 }

set1.has(1); // true
set1.has(3); // false

console.log([...set1]); // [1,5]
*/
