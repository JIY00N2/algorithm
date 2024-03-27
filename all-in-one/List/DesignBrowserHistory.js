// Doubly Linked-List
class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class BrowserHistory {
  // 초기 설정
  constructor(homepage) {
    let node = new Node(homepage);
    this.head = node;
    this.current = node;
  }

  visit(url) {
    // 이전 노드의 next가 새로 생성한 노드의 prev를 가리키고, 새로 생성한 노드의 prev는 이전 노드의 next를 가리킴 -> 연결
    this.current.next = new Node(url, null, this.current);
    // 현재 노드를 옮김
    this.current = this.current.next;
    return;
  }
  // step이 0이 될 때 까지 & current가 맨 앞까지 올 때 까지
  back(steps) {
    while (steps > 0 && this.current.prev !== null) {
      steps--;
      this.current = this.current.prev;
    }
    return this.current.val;
  }

  forward(steps) {
    while (steps > 0 && this.current.next !== null) {
      steps--;
      this.current = this.current.next;
    }
    return this.current.val;
  }
}
