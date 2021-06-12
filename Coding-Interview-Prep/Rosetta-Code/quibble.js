'use strict'

function quibble(words) {
	let line = "{";
	
	for (let i = 0; i < words.length; i++) {
		const el = words[i];
		if(i === 0) {
			line += `${el}`
		}
		else if(i === words.length -1) {
			line += ` and ${el}`
		} else {
			line += `, ${el}`
		}
	}
	line += "}"
	return line;
}

console.log(quibble([])); // "{}"
console.log(quibble(["ABC", "DEF", "G", "H"])); // "{ABC,DEF,G and H}"
console.log(quibble(["ABC", "DEF"])); // "{ABC and DEF}"
console.log(quibble(["ABC", "DEF", "G", "H"])); // "{ABC,DEF,G and H}"