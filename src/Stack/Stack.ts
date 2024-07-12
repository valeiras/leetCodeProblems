export class Stack<T> {
  data: T[];

  constructor(initialValues?: T[]) {
    this.data = initialValues || [];
  }

  push(x: T): void {
    this.data.push(x);
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  top(): T {
    return this.data[this.data.length - 1];
  }

  pop(): boolean {
    if (this.isEmpty()) return false;
    this.data.pop();
    return true;
  }
}
