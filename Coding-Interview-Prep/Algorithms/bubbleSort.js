function bubbleSort(array) {
	let newArr = [...array];

	let swap = (arr, a,b) => {
		[arr[b], arr[a]] = [arr[a], arr[b]];
	}

	for(let startI = 0; startI < newArr.length - 1; startI++) {
		let flag = false;
		for(let curI = 0; curI < newArr.length - 1 - startI; curI++) {
			if(newArr[curI] > newArr[curI  + 1]) {
				swap(newArr, curI, curI + 1);
				flag = true;
			}
		}
		// if we dont swap anything in a loop we can break; because everything is sorted
		if(!flag) break;
	}
	return newArr;
}
  
let result = bubbleSort([9,8,7,6,5,4,3,2,1]);
console.log(result);