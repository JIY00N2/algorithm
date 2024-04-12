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

function diameterOfBinaryTree(root) {
  let max = 0;
  function postorder(root) {
    // 노드가 null인 경우 높이를 0으로 반환
    if (root === null) {
      return 0;
    }
    let left = postorder(root.left); // 왼쪽 서브 트리의 높이를 계산
    let right = postorder(root.right); // 오른쪽 서브 트리의 높이를 계산
    max = Math.max(max, left + right); // 왼쪽 서브 트리와 오른쪽 서브 트리의 지름의 합을 최대 지름과 비교하여 더 큰 값을 선택
    return Math.max(left, right) + 1; // 현재 노드를 포함한 서브 트리의 높이를 반환
  }

  postorder(root);

  return max;
}
