// Doubly Linked-List
class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class BrowserHistory {
  constructor(homepage) {
    let node = new Node(homepage);
    this.head = node;
    this.current = node;
  }

  visit(url) {
    this.current.next = new Node(url, null, this.current);
    this.current = this.current.next;
    return;
  }

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
