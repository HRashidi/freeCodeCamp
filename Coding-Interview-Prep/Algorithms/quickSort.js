let partition = (arr, low, high) => {
	
	let pIndex = low + Math.floor((high - low) / 2);
	let pValue = arr[pIndex];
	let lHalf = [], rHalf = [];
	for (let index = low; index <= high; index++) {
		if(index == pIndex) continue;
		if(arr[index] <= pValue)
			lHalf.push(arr[index]);
		else
			rHalf.push(arr[index])
	}

	let newArr = [...lHalf, pValue].concat(rHalf);
	arr.splice(low, newArr.length, ...newArr);
	return low + lHalf.length;
	// return mArr;
}

function quickSort(array, low = 0, high) {
	if(high === undefined) high = array.length - 1;
	if(high <= low) return;
	
	let pi = partition(array, low, high);
	quickSort(array, low, pi - 1);
	quickSort(array, pi + 1, high);
	return array;
}

let arr = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
// let arr = [9,8,7,6,5,4,3,2,1]
let result = quickSort(arr);
console.log(result);