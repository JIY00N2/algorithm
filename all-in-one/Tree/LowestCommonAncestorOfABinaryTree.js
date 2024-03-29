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

/* 
접근 방법
1. left and right 둘 다 안들어올 때 -> x
2. p or q 일때 -> 자기 자신
3. left and right 둘 다 들어올 때 -> 자기 자신
4. 한쪽에서는 안들어오고 다른 한 쪽에서 left or right 들어올 때 -> left or right

코드 설계
1. 트리 문제라는 걸 알고 있기 때문에 트리의 특성을 이용한다.
2. 트리의 특성 -> 재귀 -> 작은 문제로 축소해도 전체로 확장 가능 -> root, left, right만 있는 트리로 구성하고, 확장
3. left, right에서 어떤 값이 오는지 알아야 함 
// LCA는 가장 낮은 공통 조상을 return 하는 함수
left = LCA()
right = LCA()
4. 그 다음 return 값(접근 방법 4가지 케이스 녹이기) 정하기
*/

// postorder랑 비슷
function lowestCommonAncestor(root, p, q) {
  if (root === null) {
    return null;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (root.val === p.val || root.val === q.val) {
    return root;
  } else if (left && right) {
    return root;
  } else {
    return left || right;
  }
}
