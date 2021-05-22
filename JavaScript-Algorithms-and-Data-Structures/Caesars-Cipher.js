function rot13(str) {
	function ascii (a) { return a.charCodeAt(0); }
	function deascii (a) { return String.fromCharCode(a); }

	function decode(a) {
		return (ascii(a) < 65 || ascii(a) > 90)? a : deascii(((ascii(a) - 65) + 13) % 26 + 65 );
	}
	return str.split('').map(decode).join('');
}


let res = rot13("SERR CVMMN!");
console.log(res);

function rot13x(str) {
	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var index = x => input.indexOf(x);
	var decode = x => index(x) > -1 ? input[(index(x) + 13) % 26] : x;
	return str.split('').map(decode).join('');
}

res = rot13x("SERR CVMMN!");
console.log(res);