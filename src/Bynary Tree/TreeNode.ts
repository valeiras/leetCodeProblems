import { ListNode } from "../List/ListNode";
import { Queue } from "../Queue/Queue";

export class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(
    val: T,
    // options?: {title?: string, autoHideAfter?: number}
    childNodes?: { left?: TreeNode<T> | null; right?: TreeNode<T> | null }
  ) {
    const left = childNodes?.left || null;
    const right = childNodes?.right || null;

    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  getVal(): T {
    return this.val;
  }

  setVal(val: T) {
    this.val = val;
  }

  getRight(): TreeNode<T> | null {
    return this.right;
  }

  getLeft(): TreeNode<T> | null {
    return this.left;
  }

  setRight(right: TreeNode<T> | null) {
    this.right = right;
  }

  setLeft(left: TreeNode<T> | null) {
    this.left = left;
  }

  static createFromArray<T>(arr: T[]): TreeNode<T> | null {
    if (arr.length === 0) return null;

    const rootNode = new TreeNode(arr[0]);
    const queue = new Queue<TreeNode<T>>();
    queue.enQueue(rootNode);

    let count = 0;
    while (++count < arr.length) {
      const currentNode = queue.front();
      queue.deQueue();

      if (arr[count] !== null) {
        const leftChild = new TreeNode(arr[count]);
        currentNode.setLeft(leftChild);
        queue.enQueue(leftChild);
      }

      if (++count < arr.length) {
        if (arr[count] !== null) {
          const rightChild = new TreeNode(arr[count]);
          currentNode.right = rightChild;
          queue.enQueue(rightChild);
        }
      }
    }
    return rootNode;
  }

  static isSymmetric<T>(root: TreeNode<T> | null): boolean {
    const q = new Queue<TreeNode<T>>();
    q.enQueue(root.left);
    q.enQueue(root.right);

    while (!q.isEmpty()) {
      const left = q.front();
      q.deQueue();
      const right = q.front();
      q.deQueue();

      if (!left && !right) continue;
      if (!left || !right) return false;
      if (left.val !== right.val) return false;

      q.enQueue(left.left);
      q.enQueue(right.right);
      q.enQueue(left.right);
      q.enQueue(right.left);
    }
    return true;
  }

  static isSymmetricRecursive<T>(root: TreeNode<T> | null): boolean {
    function sameTree<T>(left: TreeNode<T>, right: TreeNode<T>): boolean {
      if (!left && !right) return true;
      if (!left || !right) return false;

      if (left.val !== right.val) return false;
      return sameTree(left.left, right.right) && sameTree(left.right, right.left);
    }

    return sameTree(root.left, root.right);
  }
}
