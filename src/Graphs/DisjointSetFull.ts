type Algorithm = "quick find" | "quick union";
export class DisjointSetFull {
  private rootArray: number[];
  private rank: number[];
  private algorithm: Algorithm;

  constructor({
    n,
    edges,
    algorithm = "quick union",
  }: {
    n: number;
    edges?: Array<[number, number]>;
    algorithm?: Algorithm;
  }) {
    this.rootArray = Array.from({ length: n }, (_, i) => i);
    this.rank = Array.from({ length: n }, () => 1);
    this.algorithm = algorithm;
    edges?.forEach((edge) => this.union(edge));
  }

  find(vertex: number): number {
    if (vertex >= this.rootArray.length || vertex < 0) throw new Error("Vertex is not in the graph");

    if (this.algorithm === "quick find") return this.quickFind(vertex);
    else return this.quickUnionFind(vertex);
  }
  quickFind(vertex: number): number {
    return this.rootArray[vertex];
  }

  quickUnionFind(vertex: number): number {
    if (vertex === this.rootArray[vertex]) {
      return vertex;
    } else {
      const rootNode = this.quickUnionFind(this.rootArray[vertex]);
      this.rootArray[vertex] = rootNode;
      return rootNode;
    }
  }

  union(edge: [number, number]): boolean {
    if (edge[0] >= this.rootArray.length || edge[0] < 0 || edge[1] >= this.rootArray.length || edge[1] < 0)
      throw new Error("Nodes are not in the graph");

    if (this.algorithm === "quick union") return this.quickUnion(edge);
    else return this.quickFindUnion(edge);
  }

  quickUnion(edge: [number, number]): boolean {
    const root1 = this.find(edge[0]);
    const root2 = this.find(edge[1]);

    if (root1 === root2) return true;

    if (this.rank[root1] > this.rank[root2]) {
      this.rootArray[root2] = root1;
    } else if (this.rank[root2] > this.rank[root1]) {
      this.rootArray[root1] = root2;
    } else {
      this.rootArray[root2] = root1;
      this.rank[root1]++;
    }
    return true;
  }

  quickFindUnion(edge: [number, number]): boolean {
    let parent = edge[0];
    const child = edge[1];

    while (parent !== this.rootArray[parent]) {
      parent = this.rootArray[parent];
    }
    this.rootArray[child] = parent;

    return true;
  }

  connected(edge: [number, number]): boolean {
    return this.find(edge[0]) === this.find(edge[1]);
  }
}
