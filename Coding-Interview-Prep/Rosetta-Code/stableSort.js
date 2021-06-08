'use strict'

function stableSort(arr) {
	return arr.sort((a,b) => a[1] < b[1]? -1: 1)
}


console.log(stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]]))
// [["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]

console.log(stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]]))
// [[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]