class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  // 전위 순회
  preorderTraversal() {
    const result = [];
    // traverse 함수는 재귀적으로 호출되며, 인자로 현재 노드를 받음
    const traverse = (node) => {
      // 만약 현재 노드가 null이라면 함수를 종료(재귀 호출의 종료 조건)
      if (node === null) return;
      // 현재 노드의 값을 result 배열에 추가, 이는 현재 노드를 전위 순회한 결과
      result.push(node.value);
      // 왼쪽 서브 트리를 전위 순서로 방문하기 위해 traverse(node.left)를 호출
      // 현재 노드의 왼쪽 자식 노드를 전위 순회
      traverse(node.left);
      // 오른쪽 서브 트리를 전위 순서로 방문하기 위해 traverse(node.left)를 호출
      // 현재 노드의 오른쪽 자식 노드를 전위 순회
      traverse(node.right);
    };
    traverse(this.root); // traverse함수 호출
    return result; // 모든 처리가 완료되면 result 배열 반환
  }

  // 중위 순회
  inorderTraversal() {
    const result = [];
    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // 후위 순회
  postorderTraversal() {
    const result = [];
    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}

// 트리 생성
const tree = new Tree(new Node(0));
tree.root.left = new Node(1);
tree.root.right = new Node(2);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(4);
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(6);
tree.root.left.left.left = new Node(7);
tree.root.left.left.right = new Node(8);

// 전위 순회 실행
console.log("전위 순회: ", ...tree.preorderTraversal()); // 전위 순회:  0 1 3 7 8 4 2 5 6

// 중위 순회 실행
console.log("중위 순회: ", ...tree.inorderTraversal()); // 중위 순회:  7 3 8 1 4 0 5 2 6

// 후위 순회 실행
console.log("후위 순회: ", ...tree.postorderTraversal()); // 후위 순회:  7 8 3 4 1 5 6 2 0
