import { TreeNode } from "./TreeNode";

export function maxDepth<T>(root: TreeNode<T> | null): number {
  return depth(root, 0);
}

function depth<T>(root: TreeNode<T> | null, currDepth: number) {
  if (!root) return currDepth;
  return Math.max(depth(root.left, currDepth + 1), depth(root.right, currDepth + 1));
}
