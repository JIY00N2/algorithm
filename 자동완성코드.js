class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node());
      }
      currentNode = currentNode.children.get(char);
    }
    currentNode.end = true;
  }

  automaticCompletion(prefix) {
    let currentNode = this.root;
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return [];
      }
      currentNode = currentNode.children.get(char);
    }

    const result = [];
    this.move(currentNode, prefix, result);
    return result;
  }

  move(currentNode, prefix, result) {
    if (currentNode.end) {
      result.push(prefix);
    }
    for (const [char, child] of currentNode.children) {
      this.move(child, prefix + char, result);
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

console.log(trie.automaticCompletion("c")); // [ 'cat', 'coffee', 'cow' ]
console.log(trie.automaticCompletion("co")); // [ 'coffee', 'cow' ]
console.log(trie.automaticCompletion("b")); // [ 'book', 'box', 'bag' ]
console.log(trie.automaticCompletion("bo")); // [ 'book', 'box' ]
