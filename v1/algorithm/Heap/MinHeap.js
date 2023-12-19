// 최소힙: 부모 노드의 키 값이 자식 노드의 키 값보다 항상 작은 힙
class MinHeap {
  constructor() {
    // 배열의 첫번째 요소가 가지는  index는 0이기 때문에 '1번째'를 표현하기에 어려움이 있음
    // 따라서 배열의 첫번째 요소는 사용하지 않는다 -> null
    this.heap = [null];
  }
  // 부모와 자식 관계 확인
  // 예시로 부모 = 4, 왼쪽 자식 = 3, 오른쪽 자식 = 2

  // 힙의 크기
  size() {
    return this.heap.length - 1;
  }

  // 삽입과 삭제 함수에 두 번 사용되어서 함수로 만들자
  // 구조분해 할당으로 쉽게 swap함수를 구현 가능
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  // 삽입
  push(value) {
    // 마지막 노드에 들어온 값을 삽입
    this.heap.push(value);
    // 현재 index 값
    let currentIndex = this.heap.length - 1;
    // 부모 index 값
    let parentIndex = Math.floor(currentIndex / 2);
    // 최소힙으로 부모 노드가 제일 작아야 하므로
    // 부모 노드가 현재 노드보다 큰지 검사하며 반복함
    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      // swap함수를 통해 부모와 자식을 교체
      this.swap(parentIndex, currentIndex);
      // index도 교체
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  // 삭제
  pop() {
    // 위에서 배열의 첫 원소를 비워두었으므로 root는 heap[1]에 위치!
    const min = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    // 부모가 왼쪽 자식이나 오른쪽 자식보다 큰 경우에 계속 반복
    while (
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ) {
      // 두 자식 노드 중 작은 값을 가진 자식을 minIndex로 설정
      const minIndex =
        this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;
      // minIndex와 부모의 교체
      this.swap(minIndex, currentIndex);
      // index 교체 및 업데이트
      currentIndex = minIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    // 최소값 반환
    return min;
  }
}

const heap = new MinHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); // [ null, 63, 54, 45, 36, 27 ]

console.log(heap.pop()); // 63
console.log(heap.pop()); // 54
console.log(heap.pop()); // 45
console.log(heap.pop()); // 36
console.log(heap.pop()); // 27
