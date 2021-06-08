'use strict'

function bogosort(arr) {
	function isSorted(arr) {
		for (let i = 0; i < arr.length - 1; i++) {
			if(arr[i] > arr[i + 1]) return false;
		}
		return true
	}

	function shuffle(arr) {
		arr.sort(() => Math.random() - 0.5);
	}

	while(!isSorted(arr)) {
		shuffle(arr);
	}
	return arr
}

console.log(bogosort([38, 45, 35, 8, 13]))