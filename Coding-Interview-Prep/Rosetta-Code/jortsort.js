'use strict'
function jortsort(array) {
	for(let i = 0; i < array.length - 1; i++)
		if(array[i] > array[i+1])
			return false;
	return true;
}


console.log(jortsort([1,2,13,4,5]));
console.log(jortsort([1,2,3,4,5]));