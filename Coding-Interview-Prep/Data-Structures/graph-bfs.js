function bfs(graph, root) {
	let nodesLen = {};

	// Init all nodes
	let graphSize = graph.length;
	for(let i = 0; i < graphSize; i++)
		nodesLen[i] = Infinity;

	let visited = [];
	let queue = [root];

	let distance = 0;
	while(queue.length > 0) {
		let curNode = queue.shift();

		visited.push(curNode);
		nodesLen[curNode] = distance;

		// Add children to queue
		let childCount = 0;
		for(let child = 0; child < graphSize; child++) {
			if(child !== curNode && graph[curNode][child] === 1 && !visited.includes(child)) {
				queue.push(child);
				childCount++;
			}
		}
		childCount !== 0 && distance++
	}

	return nodesLen;
};

var exBFSGraph = [
	[0, 1, 0, 0],
	[1, 0, 1, 0],
	[0, 1, 0, 1],
	[0, 0, 1, 0]
];
// console.log(bfs(exBFSGraph, 3));
console.log(bfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1));
console.log(bfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 1));
console.log(bfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 0));
console.log(bfs([[0, 1], [1, 0]], 0));
