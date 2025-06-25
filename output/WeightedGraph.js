class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2, weight) {
        const vertex = this.adjacencyList[v1];
        vertex.push({ node: v2, weight });
        const vertex2 = this.adjacencyList[v2];
        vertex2.push({ node: v1, weight });
    }
}
const weightGraph = new WeightedGraph();
weightGraph.addVertex("A");
weightGraph.addVertex("B");
weightGraph.addVertex("C");
weightGraph.addEdge("A", "B", 1);
weightGraph.addEdge("A", "C", 12);
weightGraph.addEdge("C", "B", 8);
console.log(weightGraph);
