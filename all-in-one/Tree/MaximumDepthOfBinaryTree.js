/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 트리 문제네 -> 트리 구현인가 순회인가 -> 순회 -> 레벨 -> bfs -> 큐 배열(예약) -> 마지막 방문이 max depth
// 1. 레벨 순회 -> bfs
function maxDepth(root) {
  let maxDepth = 0;
  if (root === null) {
    return maxDepth;
  }
  const q = [[root, 1]];
  while (q.length) {
    const [node, depth] = q.shift();
    maxDepth = Math.max(maxDepth, depth);
    if (node.left) {
      q.push([node.left, depth + 1]);
    }
    if (node.right) {
      q.push([node.right, depth + 1]);
    }
  }
  return maxDepth;
}

// 2. postorder -> dfs
function maxDepth(root) {
  // basecase
  if (root === null) {
    return 0;
  }
  let left_depth = maxDepth(root.left);
  let right_depth = maxDepth(root.right);
  return Math.max(left_depth, right_depth) + 1;
}
