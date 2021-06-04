function operation(op, arr1, arr2) {
	let opLookup = {
		add:  (a,b) => a + b,
		sub:  (a,b) => a - b,
		mult: (a,b) => a * b,
		div:  (a,b) => a / b,
		exp:  (a,b) => Math.pow(a, b),
	}

	let [dim1, dim2] = [arr1.length, arr1[0].length];

	// Init output matrix
	let res = new Array(dim1);
	for (var i = 0; i < dim1; i++) {
	  res[i] = new Array(dim2);
	}

	// check for matrix-matrix and scalar-matrix
	let [type, func] = op.split("_");
	let matOp = type === "m";
	func = opLookup[func];

	for (let i = 0; i < dim1; i++) {
		const row = arr1[i];
		for (let j = 0; j < dim2; j++) {
			let a = row[j];
			let b = matOp ? arr2[i][j] : arr2;
			res[i][j] = func(a,b);
		}
	}
	return res;
}


console.log(operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])); // [[2,4],[6,8]]
console.log(operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]]))		// [[0,0],[0,0]]
console.log(operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]]))	// [[1,4],[9,16]]
console.log(operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]]))		// [[1,1],[1,1]]
console.log(operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]]))		// [[1,4],[27,256]]
