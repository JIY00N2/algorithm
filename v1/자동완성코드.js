class Node {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  // 단어를 트라이에 삽입
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new Node());
      }
      node = node.children.get(char);
    }
    node.end = true;
  }

  // 주어진 접두사를 기준으로 자동 완성된 단어들을 반환
  autoComplete(prefix) {
    const result = [];
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return result;
      }
      node = node.children.get(char);
    }
    this.traverse(node, prefix, result);
    return result;
  }

  // 재귀적으로 노드, 현재 단어, 결과 배열을 순회하면서 자동 완성된 단어를 찾음
  traverse(node, word, result) {
    if (node.end) {
      result.push(word);
    }
    for (const [char, child] of node.children) {
      this.traverse(child, word + char, result);
    }
  }
}

const trie = new Trie();

trie.insert("cat");
trie.insert("coffee");
trie.insert("cow");
trie.insert("book");
trie.insert("bag");
trie.insert("box");

console.log(trie.autoComplete("c")); // [ 'cat', 'coffee', 'cow' ]
console.log(trie.autoComplete("co")); // [ 'coffee', 'cow' ]
console.log(trie.autoComplete("b")); // [ 'book', 'box', 'bag' ]
console.log(trie.autoComplete("bo")); // [ 'book', 'box' ]
