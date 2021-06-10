function entropy(string) {
	let dict = {};
	string.split("").map(char => {
		dict[char] = dict.hasOwnProperty(char) ? dict[char] + 1 : 1;
	})

	let len = string.length;

	return Object.keys(dict).reduce((acc, key) => {
		return acc - (dict[key] / len) * Math.log2((dict[key] / len));
	}, 0)
}


// console.log(entropy("0123456789abcdef")) // 4
console.log(entropy("1223334444")) // 1.8464393446710154
