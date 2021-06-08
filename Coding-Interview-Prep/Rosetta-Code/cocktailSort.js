'use strict'

function cocktailSort(arr) {
	let swap = (i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]]
	} 

	let swapped = false;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if(arr[i] > arr[i + 1]) {
				swap(i, i + 1);
				swapped = true
			}
		}
		if(! swapped) break;
		for (let i = arr.length - 2; i > 0; i--) {
			if(arr[i] > arr[i + 1]) {
				swap(i, i + 1);
				swapped = true
			}
		}
	} while(swapped)

	return arr;
}

console.log(cocktailSort([25, 32, 12, 7, 20]))