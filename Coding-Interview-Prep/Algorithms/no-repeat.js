function allPerm(string) {
	if(string.length < 2) return string;

	let permutations = [];
	for(let index=0; index < string.length; index++ ) {
		let char = string[index];
		let remainingString = string.slice(0, index) + string.slice(index+1, string.length);
		for(let permute of allPerm(remainingString)){
			permutations.push(char + permute)
		}
	}
	return permutations;
}

function checkNoRepeat(string) {
	let regex = /(\w)\1/
	return !regex.test(string)
}

function permAlone(string) {
	let permutations = allPerm(string);

	let counter = 0;
	for(let word of permutations) {
		if(checkNoRepeat(word)) counter++;
	}
	
	return counter;
}

let result = permAlone('zzzzzzzz');
// let result = checkNoRepeat('abababa');
result
