export class DisjointSet {
  private rootArray: number[];

  constructor(n: number, edges?: Array<[number, number]>) {
    this.rootArray = Array.from({ length: n }, (_, i) => i);
    edges?.forEach((edge) => this.union(edge));
  }

  find(vertex: number): number {
    if (vertex >= this.rootArray.length || vertex < 0) {
      throw new Error("Vertex is not in the graph");
    }

    while (vertex !== this.rootArray[vertex]) {
      vertex = this.rootArray[vertex];
    }
    return vertex;
  }

  union(edge: [number, number]): boolean {
    if (edge[0] >= this.rootArray.length || edge[0] < 0 || edge[1] >= this.rootArray.length || edge[1] < 0) {
      throw new Error("Nodes are not in the graph");
    }
    const parent = Math.min(...edge);
    const child = Math.max(...edge);

    this.rootArray[child] = parent;
    return true;
  }
}
