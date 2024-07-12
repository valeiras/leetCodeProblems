import { Queue } from "../Queue";

export function openLock(deadends: string[], target: string): number {
  const visited = new Set<string>();
  const dead = new Set<string>(deadends);

  if (dead.has(target) || dead.has("0000")) return -1;

  const queue = new Queue<string>();
  queue.enQueue("0000");

  let count = 0;
  while (!queue.isEmpty()) {
    const elementsInThisLevel = queue.size();
    for (let jj = 0; jj < elementsInThisLevel; jj++) {
      const curr = queue.getFrontAndDequeue();
      const currArr = curr.split("");

      if (curr === target) return count;

      for (let ii = 0; ii < 4; ii++) {
        const candidate1 = curr.slice(0, ii) + ((+currArr[ii] + 1) % 10).toString() + curr.slice(ii + 1);
        const candidate2 = curr.slice(0, ii) + ((+currArr[ii] + 9) % 10).toString() + curr.slice(ii + 1);

        if (!dead.has(candidate1) && !visited.has(candidate1)) {
          queue.enQueue(candidate1);
          visited.add(candidate1);
        }
        if (!dead.has(candidate2) && !visited.has(candidate2)) {
          queue.enQueue(candidate2);
          visited.add(candidate2);
        }
      }
    }
    count++;
  }
  return -1;
}
