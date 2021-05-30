function dfs(graph, root) {

	let visited = [];
	let graphSize = graph.length;
	let queue = [root];

	while(queue.length > 0) {
		let curNode = queue.pop();
		visited.push(curNode);

		for(let child = 0; child < graphSize; child++) {
			if(child !== curNode && graph[curNode][child] === 1 && !visited.includes(child)) {
				queue.push(child);
			}
		}
	}

	return visited;
}

var exDFSGraph = [
	[0, 1, 0, 0],
	[1, 0, 1, 0],
	[0, 1, 0, 1],
	[0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));