export class CircularQueue {
  head: number;
  tail: number;
  readonly k: number;
  readonly queue: Array<number>;

  constructor(k: number) {
    this.head = -1;
    this.tail = -1;
    this.k = k;
    this.queue = Array<number>(k);
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    if (this.head === -1) this.head++;

    try {
      this.tail = (this.tail + 1) % this.k;
      this.queue[this.tail] = value;
    } catch (error) {
      return false;
    }
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.k;
    }
    return true;
  }

  front(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.head];
  }

  rear(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.tail];
  }

  isEmpty(): boolean {
    return this.head === -1;
  }

  isFull(): boolean {
    return (this.tail + 1) % this.k === this.head;
  }
}
