class Graph {
    constructor() {
        this.adjacencyList = {};
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }
    addEdge(v1, v2) {
        const vertex = this.adjacencyList[v1];
        vertex.push(v2);
        const vertex2 = this.adjacencyList[v2];
        vertex2.push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
    removeVertex(vertex) {
        this.adjacencyList[vertex].map(edge => {
            this.removeEdge(vertex, edge);
        });
        delete this.adjacencyList[vertex];
    }
}
const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("London");
graph.addEdge("Tokyo", "London");
graph.addVertex("SanFrancisco");
graph.addEdge("SanFrancisco", "London");
graph.removeVertex("SanFrancisco");
// console.log(graph);
// graph.removeEdge("SanFrancisco","London")
console.log(graph);
