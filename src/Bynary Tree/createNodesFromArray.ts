import { TreeNode } from "./TreeNode";
import { Queue } from "../Queue/Queue";
export function createNodesFromArray<T>(arr: (T | null)[]): TreeNode<T> | null {
  if (arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const rootsQueue = new Queue<TreeNode<T>>();
  rootsQueue.enQueue(root);
  let count = 1;
  while (count < arr.length) {
    const currRoot = rootsQueue.front();
    if (arr[count] !== null) {
      const newNode = new TreeNode(arr[count]);
      currRoot.left = newNode;
      rootsQueue.enQueue(newNode);
    }
    count++;
    if (arr[count] !== null) {
      const newNode = new TreeNode(arr[count]);
      currRoot.right = newNode;
      rootsQueue.enQueue(newNode);
    }
    count++;
    rootsQueue.deQueue();
  }
  return root;
}
