const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Heap {
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  getParent(idx) {
    return this.heap[this.getParentIndex(idx)];
  }
  getLeftChild(idx) {
    return this.heap[this.getLeftChildIndex(idx)];
  }
  getRightChild(idx) {
    return this.heap[this.getRightChildIndex(idx)];
  }
  swap(index1, index2) {
    let tmp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = tmp;
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
class MinHeap extends Heap {
  add(value) {
    this.heap[this.size()] = value;
    this.heapifyUp();
  }
  heapifyUp() {
    let currentIndex = this.size() - 1;
    while (
      this.getParent(currentIndex) !== undefined &&
      this.getParent(currentIndex) > this.heap[currentIndex]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  remove() {
    let removedValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return removedValue;
  }
  heapifyDown() {
    let currentIndex = 0;
    while (
      this.getLeftChild(currentIndex) !== undefined &&
      (this.getLeftChild(currentIndex) < this.heap[currentIndex] ||
        this.getRightChild(currentIndex) < this.heap[currentIndex])
    ) {
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.getRightChild(currentIndex) !== undefined &&
        this.getRightChild(currentIndex) < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(currentIndex);
      }
      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }
}

let n = 0;
let count = -1;
const min = new MinHeap();

rl.on('line', function (line) {
  if (count === -1) {
    count = parseInt(line);
    n = count;
    return;
  }
  //삽입및 사제하는 구문
  line.split(' ').forEach((value) => {
    min.add(Number(value));
    if (min.size() > n) min.remove();
  });
  count--;
  if (count === 0) rl.close();
}).on('close', function () {
  console.log(min.peek());
  process.exit();
});
