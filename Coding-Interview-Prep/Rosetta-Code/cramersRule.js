'use strict'

function portion(arr, rowIndices, colIndices) {
	let res = arr.filter((row, rowIndex) => rowIndices.includes(rowIndex)); 
	return res.map(row => row.filter((col, colIndex) => colIndices.includes(colIndex)));
}

function remove(arr, rowIndex, colInex) {
	let res = arr.filter((row, index) => index !== rowIndex); 
	return res.map(row => row.filter((col, index) => index !== colInex));
}

function position(arr, col, colIndex) {
	let res = arr.map(row => row.map(col => col));
	res.forEach((row, rowIndex) => {
		row[colIndex] = col[rowIndex]
	});
	return res;
}

function determinant(arr) {
	let [rows, cols] = [arr.length, arr[0].length];
	if(rows === 1) return arr[0][0];

	let sum = 0;
	let flag = true;

	for (let colIndex = 0; colIndex < cols; colIndex++) {
		let subArray = remove(arr, 0, colIndex);
		sum += arr[0][colIndex] * (flag?1:-1) * determinant(subArray);
		flag = !flag;		
	}
	return sum;
}


function cramersRule(matrix, freeTerms) {
	let res = [];

	let [rows, cols] = [matrix.length, matrix[0].length];
	
	let rootDet = determinant(matrix);
	for (let colIndex = 0; colIndex < cols; colIndex++) {
		let newMat = position(matrix, freeTerms, colIndex);
		let calced =  determinant(newMat) / rootDet;
		res.push(calced);
	}
	return res;
}

console.log(cramersRule([
	[2, -1, 5, 1],
	[3, 2, 2, -6],
	[1, 3, 3, -1],
	[5, -2, -3, 3]],
	[-3, -32, -47, 49]
)) // [2, -12, -4, 1]

console.log(cramersRule([
	[3, 1, 1],
	[2, 2, 5],
	[1, -3, -4]],
	[3, -1, 2])) // [1, 1, -1]