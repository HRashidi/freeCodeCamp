function selectionSort(array) {
	let newArr = [...array];

	let swap = (arr, a,b) => {
		[arr[b], arr[a]] = [arr[a], arr[b]];
	}

	let indexOfMin = arr => arr.indexOf(Math.min(...arr));
	for(let startI = 0; startI < newArr.length; startI++) {
		let minIndex = indexOfMin(newArr.slice(startI, newArr.length)) + startI;
		swap(newArr, startI, minIndex)
	}
	return newArr;
}
  
let result = selectionSort([9,8,7,6,5,4,3,2,1]);
console.log(result);