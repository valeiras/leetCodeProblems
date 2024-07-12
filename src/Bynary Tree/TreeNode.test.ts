import { describe, expect, it } from "vitest";
import { TreeNode } from "./TreeNode";

describe("TreeNode", () => {
  it("Should be created by the constructor using numbers", () => {
    const rightNode = new TreeNode(5, null);
    expect(rightNode.getVal()).toBe(5);
    expect(rightNode.getRight()).toBe(null);
    expect(rightNode.getLeft()).toBe(null);

    const rootNode = new TreeNode(22, { right: rightNode });
    expect(rootNode.getVal()).toBe(22);
    expect(rootNode.getRight()).toEqual(rightNode);
  });

  it("Should be created from an array of integers with two levels", () => {
    let treeNode = TreeNode.createFromArray([0, 1, 2, null, 4, 5, null, 3, 2, null, 6]);
    expect(treeNode.getVal()).toBe(0);

    const l1 = treeNode.getLeft();
    const r1 = treeNode.getRight();
    expect(l1.getVal()).toBe(1);
    expect(r1.getVal()).toBe(2);

    const l1l2 = l1.getLeft();
    const l1r2 = l1.getRight();
    expect(l1l2).toBe(null);
    expect(l1r2.getVal()).toBe(4);

    const r1l2 = r1.getLeft();
    const r1r2 = r1.getRight();
    expect(r1l2.getVal()).toBe(5);
    expect(r1r2).toBe(null);
  });

  it("Should be created from an array of integers with three levels", () => {
    let treeNode = TreeNode.createFromArray([0, 1, 2, null, 4, 5, null, 3, 2, null, 6]);
    expect(treeNode.getVal()).toBe(0);

    const l1 = treeNode.getLeft();
    const r1 = treeNode.getRight();
    expect(l1.getVal()).toBe(1);
    expect(r1.getVal()).toBe(2);

    const l1l2 = l1.getLeft();
    const l1r2 = l1.getRight();
    expect(l1l2).toBe(null);
    expect(l1r2.getVal()).toBe(4);

    const r1l2 = r1.getLeft();
    const r1r2 = r1.getRight();
    expect(r1l2.getVal()).toBe(5);
    expect(r1r2).toBe(null);

    const l1r2l3 = l1r2.getLeft();
    const l1r2r3 = l1r2.getRight();
    expect(l1r2l3.getVal()).toBe(3);
    expect(l1r2r3.getVal()).toBe(2);

    const r1l2l3 = r1l2.getLeft();
    const r1l2r3 = r1l2.getRight();
    expect(r1l2l3).toBe(null);
    expect(r1l2r3.getVal()).toBe(6);
  });
});

describe("isSymmetric", () => {
  it("Should return true for a symmetric binary tree", () => {
    let treeNode = TreeNode.createFromArray([1, 0, 0, 3, 4, 4, 3]);
    expect(TreeNode.isSymmetric(treeNode)).toBe(true);
  });

  it("Should return false for a symmetric binary tree", () => {
    let treeNode = TreeNode.createFromArray([1, 0, 0, 3, 4, 5, 3]);
    expect(TreeNode.isSymmetric(treeNode)).toBe(false);
  });
});

describe("isSymmetricRecursive", () => {
  it("Should return true for a symmetric binary tree", () => {
    let treeNode = TreeNode.createFromArray([1, 0, 0, 3, 4, 4, 3]);
    expect(TreeNode.isSymmetricRecursive(treeNode)).toBe(true);
  });

  it("Should return false for a symmetric binary tree", () => {
    let treeNode = TreeNode.createFromArray([1, 0, 0, 3, 4, 5, 3]);
    expect(TreeNode.isSymmetricRecursive(treeNode)).toBe(false);
  });
});
