function maximumSubsequence(population) {
	if(population.length < 1) return [];

	// Calc forward and backward summation for once
	let forwardSums = [];
	let sum = 0;
	for(let i = population.length - 1; i >= 0; i--) {
		sum += population[i]
		forwardSums.unshift(sum);
	}

	let backwardSums = [];
	sum = 0;
	for(let i = 0; i < population.length; i++) {
		sum += population[i]
		backwardSums.push(sum);
	}

	let maxForward  = Math.max(...forwardSums);
	let maxBackward = Math.max(...backwardSums);

	console.log(forwardSums);
	console.log(backwardSums);
	// console.log(maxForward, maxBackward);


	let start = forwardSums.findIndex (el => el === maxForward);
	let end   = backwardSums.findIndex(el => el === maxBackward);

	console.log("points: ",start, end);

	if(end < start) 
		start = 0;
	
	
	return population.slice(start, end + 1)
}

console.log(maximumSubsequence([])); // []
console.log(maximumSubsequence([ -1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1 ])); // [ 3, 5, 6, -2, -1, 4 ]
console.log(maximumSubsequence([ 7, 1, -5, -3, -8, 1 ])); // [ 7, 1 ]
console.log(maximumSubsequence([ -3, 6, -1, 4, -4, -6 ])); // [ 6, -1, 4 ]
console.log(maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])); // [ 1, 2, -1, 3, 10 ]