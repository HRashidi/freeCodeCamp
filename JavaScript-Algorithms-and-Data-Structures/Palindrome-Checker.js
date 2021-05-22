function palindrome(str) {
	
	function normalizeStr(input = "") {
		return input.replace(/[^0-9a-z]/gi, '').toLowerCase();
	}

	function reverse(input=""){
		return input.split("").reverse().join("");
	}

	str = normalizeStr(str);
	let halfLen  = Math.ceil(str.length /2);

	let leftSide = str.substring(0, halfLen);
	let rightSide = reverse(str).substring(0, halfLen);

	return leftSide === rightSide;
}
  
  
  
res = palindrome("eye_fGASDFG..#@ 2A3*3a2");
res = palindrome("five|\_/|four");
console.log(res);