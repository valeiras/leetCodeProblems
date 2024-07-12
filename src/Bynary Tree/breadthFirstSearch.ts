import { Queue } from "../Queue/Queue";
import { TreeNode } from "./TreeNode";

export function breadthFirstSearch(root: TreeNode | null): number[][] {
  const output: number[][] = [];
  let level = 0;
  const rootsQueue = new Queue<TreeNode>();
  if (root) rootsQueue.enQueue(root);
  while (!rootsQueue.isEmpty()) {
    output.push([]);
    const n = rootsQueue.size();
    for (let ii = 0; ii < n; ii++) {
      const root = rootsQueue.front();
      output[level].push(root.val);
      if (root.left) rootsQueue.enQueue(root.left);
      if (root.right) rootsQueue.enQueue(root.right);
      rootsQueue.deQueue();
    }
    level++;
  }
  return output;
}
