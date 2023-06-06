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
}

// 중위 순회
function inorderTraverse(node) {
  if (node !== null) {
    inorderTraverse(node.left);
    console.log(node.value);
    inorderTraverse(node.right);
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
tree.root.left.right.left = new Node(9);
tree.root.left.right.right = new Node(10);
tree.root.right.left.left = new Node(11);

// 중위 순회 실행
inorderTraverse(tree.root);
