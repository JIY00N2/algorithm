class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  size() {
    return this.heap.length - 1;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      // 부등호 방향 변경
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  pop() {
    const max = this.heap[1]; // 변수명 변경
    if (this.heap.length <= 2) {
      this.heap = [null];
    } else {
      this.heap[1] = this.heap.pop();
    }

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    if (!this.heap[leftIndex]) return max; // 부등호 방향 변경
    else if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex] > this.heap[currentIndex]) {
        // 부등호 방향 변경
        this.swap(leftIndex, currentIndex);
      }
      return max; // 변수명 변경
    }

    while (
      this.heap[leftIndex] > this.heap[currentIndex] || // 부등호 방향 변경
      this.heap[rightIndex] > this.heap[currentIndex] // 부등호 방향 변경
    ) {
      const maxIndex =
        this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex; // 변수명 변경
      this.swap(maxIndex, currentIndex);
      currentIndex = maxIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return max; // 변수명 변경
  }
}

const heap = new MaxHeap(); // 클래스명 변경
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); // [ null, 63, 54, 45, 27, 36 ]

console.log(heap.pop()); // 63
console.log(heap.pop()); // 54
console.log(heap.pop()); // 45
console.log(heap.pop()); // 36
console.log(heap.pop()); // 27
