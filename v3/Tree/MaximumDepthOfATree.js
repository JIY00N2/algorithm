// postorder
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
// 레벨 순회 bfs
function maxDepth(root) {
  let maxDepth = 0;
  if (root === null) {
    return maxDepth;
  }
  const q = [[root, 1]];
  while (q.length) {
    const [cur, depth] = q.shift();
    maxDepth = Math.max(maxDepth, depth);
    if (cur.left) {
      q.push([cur.left, depth + 1]);
    }
    if (cur.right) {
      q.push([cur.right, depth + 1]);
    }
  }
  return maxDepth;
}

// postorder dfs
function maxDepth(root) {
  if (root === null) {
    return 0;
  }
  const left_depth = maxDepth(root.left);
  const right_depth = maxDepth(root.right);
  return Math.max(left_depth, right_depth) + 1;
}
