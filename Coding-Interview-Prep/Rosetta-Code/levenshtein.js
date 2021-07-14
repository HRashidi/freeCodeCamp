'use strict'

function levenshtein(strA, strB) {
	// change a to be b
	if(strA === strB) return 0;
	if(strA.length == 0) return strB.length;	// insertion
	if(strB.length == 0) return strA.length;	// deletion

	if(strA[0] === strB[0])
		return levenshtein(strA.slice(1), strB.slice(1))
	else {
		// substitution
		let sub = levenshtein(strA.slice(1), strB.slice(1)) + 1;
		// insertion
		let ins = levenshtein(strA, strB.slice(1)) + 1
		// deletion
		let del = levenshtein(strA.slice(1), strB) + 1;

		return Math.min(sub, ins, del);
	}
}

console.log(levenshtein("tier", "tor"));	// 2
console.log(levenshtein("rosettacode", "raisethysword"));	// 8