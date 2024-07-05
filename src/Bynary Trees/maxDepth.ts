import { TreeNode } from "./TreeNode";

export function maxDepth(root: TreeNode | null): number {
  return depth(root, 0);
}

function depth(root: TreeNode | null, currDepth: number) {
  if (!root) return currDepth;
  return Math.max(depth(root.left, currDepth + 1), depth(root.right, currDepth + 1));
}
