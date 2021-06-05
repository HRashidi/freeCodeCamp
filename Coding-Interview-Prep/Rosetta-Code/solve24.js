'use strict'

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

function calc(elem) {
	if(typeof elem === "string") return parseInt(elem)
	switch(elem[1]) {
		case "+":
			return calc(elem[0]) + calc(elem[2]);
		case "-":
			return calc(elem[0]) - calc(elem[2]);
		case "*":
			return calc(elem[0]) * calc(elem[2]);
		case "/":
			return calc(elem[0]) / calc(elem[2]);
	}
}

function arr2str(elem) {
	if(typeof elem === "string") return elem;
	switch(elem[1]) {
		case "+":
			return `(${arr2str(elem[0])}+${arr2str(elem[2])})`;
		case "-":
			return `(${arr2str(elem[0])}-${arr2str(elem[2])})`;
		case "*":
			return `${arr2str(elem[0])}*${arr2str(elem[2])}`;
		case "/":
			return `${arr2str(elem[0])}/${arr2str(elem[2])}`;
	}
}

function selection(string) {
	let opArr = ["+", "-", "*", "/"]
	if(string.length === 1 ) {
		return [string]
	};

	if(string.length === 2 ) {
		return opArr.map(op => ([string[0], op , string[1]]));
		;
	}

	let allParts = [];
	for(let index = 0; index < string.length -1; index++ ) {
		let firstPart = string.slice(0, index  + 1);
		let secondPart = string.slice(index + 1);

		let firstArr = selection(firstPart);
		let secondArr = selection(secondPart);
		for(let fPart of firstArr){
			for(let lPart of secondArr){
				opArr.forEach(op => {
					allParts.push([fPart, op ,lPart])
				})
			}
		}
	}

	return allParts;
}

function solve24 (numStr) {
	let perms =  allPerm(numStr);
	let domain = [];
	
	perms.forEach(el => {
		domain = domain.concat(selection(el));
	})
	let res = domain.find(el => calc(el) === 24)
	return res ? arr2str(res) : null
}

console.log(solve24("4878"));	// (7-8/8)*4
console.log(solve24("6789"));	// 6*8/(9-7)