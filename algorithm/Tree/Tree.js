// 1. 배열로 구현
// 2. 연결 리스트로 구현

/*
const tree = [
  undefined,
  9,
  3,8,
  2,5,undefined,7,
  undefined, undefined, undefined, 4
];
*/

/*

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(node){
    this.root = node;
  }

  display(){
    const queue = new Queue();
    queue.enqueue(this.root);
    while(queue.size){
      const currentNode = queue.dequeue();
      if(currentNode.left){
        queue.enqueue(currentNode.left);
      }
      if(currentNode.right){
        queue.enqueue(currentNode.right);
      }
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);
 */
