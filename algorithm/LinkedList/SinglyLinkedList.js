// 단일 연결 리스트
// 접근: O(n), 탐색: O(n), 추가: O(1), 삭제: O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // 요소 찾기
  find(value) {
    let currentNode = this.head;
    // 같지 않으면 다음으로 넘어가서 탐색
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    // 같으면 리턴
    return currentNode;
  }
  // 끝 부분에 요소 추가
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 중간에 요소 추가
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  // 요소 삭제
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    let displayString = "";
    while (currentNode !== null) {
      displayString += `${currentNode.value} `;
      currentNode = currentNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 1);
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
