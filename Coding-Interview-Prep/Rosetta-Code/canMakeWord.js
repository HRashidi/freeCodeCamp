'use strict'
function canMakeWord(word) {
	let blocks = {
		b: "o", o: "b",
		x: "k", j: "w",
		d: "q", q: "d",
		c: "p", p: "c",
		n: "a", a: "n",
		g: "t", z: "m",
		r: "e", e: "r",
		f: "s", s: "f",
		h: "u", v: "i",
		l: "y", t: "g"
	}

	let fLookup = (dict, key) => {
		let value = blocks[key];
		if(!value) return false;
		delete dict[key];
		return true;
	}

	let rLookup = (dict, value) => {
		let key = Object.keys(dict).find(key => dict[key] === value );
		if(!key) return false;
		delete dict[key];
		return true;
	}

	word = word.toLowerCase().split("");
	for(let char of word) {
		if(fLookup(blocks, char) || rLookup(blocks, char))
			continue
		else
			return false;
		
	}

	return true;
}

console.log(canMakeWord("squAD")); // true
console.log(canMakeWord("TreaT")); // true
console.log(canMakeWord("Book")); // true