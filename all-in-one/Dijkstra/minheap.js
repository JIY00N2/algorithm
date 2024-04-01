class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[parentIndex] > this.heap[currentIndex]) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return removedValue;
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      const smallerChildIndex =
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;
      if (this.heap[currentIndex] > this.heap[smallerChildIndex]) {
        this.swap(currentIndex, smallerChildIndex);
        currentIndex = smallerChildIndex;
      } else {
        break;
      }
    }
  }
}

const min_heap = new MinHeap();
const arr = [45, 36, 54, 27, 63];
arr.forEach((v) => min_heap.insert(v));
console.log(min_heap.heap); // min heap: [ 27, 36, 54, 45, 63 ]
