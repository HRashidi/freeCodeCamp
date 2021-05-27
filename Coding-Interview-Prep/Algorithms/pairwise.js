function pairwise(arr, arg) {
	let usedIndexes = [];
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		if(usedIndexes.includes(i)) continue;
		for(let j = i+1; j < arr.length; j++) {
			if(usedIndexes.includes(i) || usedIndexes.includes(j)) continue;
			if(arr[i] + arr[j] === arg){
				sum += i + j;
				usedIndexes = usedIndexes.concat([i,j]);
				break;
			}
		}
	}

	return sum;
}
  
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));