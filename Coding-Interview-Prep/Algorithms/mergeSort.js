let merge = (arr, l, m, r) => {
	let mArr = [];
	let lIndex = l, rIndex = m+1;
	while(lIndex<=m && rIndex <=r) {
		if(arr[lIndex] <= arr[rIndex]) {
			mArr.push(arr[lIndex]);
			lIndex++
		} else {
			mArr.push(arr[rIndex]);
			rIndex++
		}
	}
	// Adding remaining items in the left and right
	mArr = mArr.concat(arr.slice(lIndex, m + 1));
	mArr = mArr.concat(arr.slice(rIndex, r + 1));
	arr.splice(l, mArr.length, ...mArr)
	// return mArr;
}

function mergeSort(array, l = 0, r) {
	if(r === undefined) r = array.length - 1;
	let m = Math.floor(l + (r - l) / 2);
	if(r <= l) return;
	
	mergeSort(array, l, m);
	mergeSort(array, m + 1, r);
	merge(array, l, m, r);
	return array;
}
  
let result = mergeSort([9,8,7,6,5,4,3,2,1]);
console.log(result);



