function insertionSort(array) {
	let newArr = [...array];

	let replaceItem = (arr, a, b) => {
		let [value] = arr.splice(a, 1);
		arr.splice(b, 0, value)
	}
	for(let startI = 1; startI < newArr.length; startI++) {
		let pos = startI;
		for(let curI = startI; curI >= 0; curI --) {
			if(newArr[startI] < newArr[curI]) pos = curI;
		}
		replaceItem(newArr, startI, pos);
	}
	return newArr;
}
  
let result = insertionSort([9,8,7,6,5,4,3,2,1]);
console.log(result);