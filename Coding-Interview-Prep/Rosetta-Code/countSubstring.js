function countSubstring(str, subStr) {
	subStr = subStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	let re = new RegExp(subStr, 'g');
	return str.match(re).length;
}

console.log(countSubstring("the three truths", "th")); // 3
console.log(countSubstring("abaabba*bbaba*bbab", "a*b")); // 2