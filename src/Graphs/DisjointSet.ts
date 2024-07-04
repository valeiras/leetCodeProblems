// Disjoint set using quick union, with rank and path compression optimizations
export class DisjointSet {
  private rootArray: number[];
  private rank: number[];
  private count: number;

  constructor({ n, edges }: { n: number; edges?: Array<[number, number]> }) {
    this.rootArray = Array.from({ length: n }, (_, i) => i);
    this.rank = Array.from({ length: n }, () => 1);
    this.count = n;
    edges?.forEach((edge) => this.union(...edge));
  }

  find(vertex: number): number {
    if (vertex >= this.rootArray.length || vertex < 0) throw new Error("Vertex is not in the graph");

    if (vertex === this.rootArray[vertex]) {
      return vertex;
    } else {
      const rootNode = this.find(this.rootArray[vertex]);
      this.rootArray[vertex] = rootNode;
      return rootNode;
    }
  }

  union(x: number, y: number): boolean {
    if (x >= this.rootArray.length || x < 0 || y >= this.rootArray.length || y < 0)
      throw new Error("Nodes are not in the graph");

    const root1 = this.find(x);
    const root2 = this.find(y);

    if (root1 === root2) return true;

    if (this.rank[root1] > this.rank[root2]) {
      this.rootArray[root2] = root1;
    } else if (this.rank[root2] > this.rank[root1]) {
      this.rootArray[root1] = root2;
    } else {
      this.rootArray[root2] = root1;
      this.rank[root1]++;
    }
    this.count--;
    return true;
  }

  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  getCount(): number {
    return this.count;
  }
}
