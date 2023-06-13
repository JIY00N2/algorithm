class MinHeap {
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
    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) {
      this.heap = [null];
    } else {
      this.heap[1] = this.heap.pop();
    }

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    if (!this.heap[leftIndex]) return min;
    else if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[currentIndex]) {
        this.swap(leftIndex, currentIndex);
      }
      return min;
    }

    while (
      this.heap[leftIndex] < this.heap[currentIndex] ||
      this.heap[rightIndex] < this.heap[currentIndex]
    ) {
      const minIndex =
        this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;
      this.swap(minIndex, currentIndex);
      currentIndex = minIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return min;
  }
}

const heap = new MinHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); // [ null, 27, 36, 54, 45, 63 ]

console.log(heap.pop()); // 27
console.log(heap.pop()); // 36
console.log(heap.pop()); // 45
console.log(heap.pop()); // 54
console.log(heap.pop()); // 63
