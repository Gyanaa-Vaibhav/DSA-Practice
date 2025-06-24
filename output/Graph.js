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
    DFS(vertex) {
        const visited = {};
        const result = [];
        this.DFS_Recursive(vertex, visited, result);
        return result;
    }
    DFS_Recursive(vertex, visited, result) {
        result.push(vertex);
        if (this.adjacencyList[vertex]) {
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(edge => {
                if (!visited[edge]) {
                    this.DFS_Recursive(edge, visited, result);
                }
            });
        }
        return;
    }
    DFS_Iterative(vertex) {
        const result = [];
        const visited = {};
        const stack = [];
        stack.push(vertex);
        while (stack.length > 0) {
            const v = stack.pop();
            if (!visited[v]) {
                visited[v] = true;
                result.push(v);
                this.adjacencyList[v].map(edge => {
                    if (!visited[edge]) {
                        stack.push(edge);
                    }
                });
            }
        }
        return result;
    }
    BFS(vertex) {
        const result = [];
        const visited = {};
        const stack = [];
        stack.push(vertex);
        while (stack.length > 0) {
            const v = stack.shift();
            if (!visited[v]) {
                visited[v] = true;
                result.push(v);
                this.adjacencyList[v].map(edge => {
                    if (!visited[edge]) {
                        stack.push(edge);
                    }
                });
            }
        }
        return result;
    }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("F", "E");
// console.log(graph);
// graph.removeEdge("SanFrancisco","London")
// console.log(graph);
console.log(graph.DFS("A"));
console.log(graph.DFS_Iterative("A"));
console.log(graph.BFS("A"));
