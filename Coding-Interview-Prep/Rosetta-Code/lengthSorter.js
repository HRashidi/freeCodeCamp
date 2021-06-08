'use strict'

function lengthSorter(arr) {
	return arr.sort((a, b) => a.length === b.length ? a < b ? -1 : 1 : b.length - a.length)
}


console.log(lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"]))
// ["strings", "sample", "sorted", "Here", "some", "are", "be", "to"]