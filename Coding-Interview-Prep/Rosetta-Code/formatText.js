'use strict'

const testArr = [
	"Given$a$text$file$of$many$lines,$where$fields$within$a$line$",
	"are$delineated$by$a$single$'dollar'$character,$write$a$program",
	"that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$",
	"column$are$separated$by$at$least$one$space.",
	"Further,$allow$for$each$word$in$a$column$to$be$either$left$",
	"justified,$right$justified,$or$center$justified$within$its$column."
];

function formatText(input, justification) {

	function position(word = "", maxLen, justification) {
		switch(justification) {
			case "left":
				return word + " ".repeat(maxLen - word.length);
			case "right":
				return " ".repeat(maxLen - word.length) + word;
			case "center":
				return " ".repeat(Math.floor((maxLen - word.length) / 2)) + word + " ".repeat(Math.ceil((maxLen - word.length) / 2));
		}
	}

	input = input.map(el => el.replace(/\$+/g, " ").trim().split(" "));
	let maxLength = input.reduce((max, el) => {
		return Math.max(max, el.length)
	}, 0);

	let colLengths = [];
	for (let index = 0; index < 12; index++) {
		let max = input.map(row => row[index]).reduce((max, word) => Math.max(max, word? word.length: 0), 0)
		colLengths.push(max);
	}

	input = input.map(row => colLengths.map((len, index) => position(row[index], len, justification)).join(" "))

	return input.join("\n");
}


// console.log(formatText(testArr, "left"));
// console.log(formatText(testArr, "right"));
console.log(formatText(testArr, "center"));