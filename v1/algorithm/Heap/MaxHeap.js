class MaxHeap {
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
  // swap함수
  // 삽입과 삭제 함수에 두 번 사용되어서 함수로 만들자
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
    // 최소힙으로 부모 노드가 제일 작아야 함
    // 부모 노드가 현재 노드보다 큰지 검사하며 반복함
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  pop() {
    const max = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      const maxIndex =
        this.heap[leftIndex] < this.heap[rightIndex] ? rightIndex : leftIndex;
      this.swap(maxIndex, currentIndex);
      currentIndex = maxIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return max;
  }
}

const heap = new MaxHeap();
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
