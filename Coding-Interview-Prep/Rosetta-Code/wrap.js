'use strict'
function wrap(text, limit) {

	let arr = text.split(/\s/);
	
	let output = "";
	let line = "";

	arr.forEach(word => {
		if(line.length + word.length < limit) {	// Not equal ==> because we have 1 for space betwwen line and word
			line += line.length ? " " + word : word;
		} else {
			output += output.length ? "\n" + line : line;
			line = word
		}
	});
	output += line.length ? "\n" + line : "";

	return output;
}



let text = "Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX \
algorithm. If your language provides this, you get easy extra credit, but you \
must reference documentation indicating that the algorithm is something better \
than a simple minimum length algorithm.";
console.log(wrap(text, 42))