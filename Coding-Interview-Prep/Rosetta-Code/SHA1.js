'use stric'
function str2bin(str) {
	return str.split("").reduce((acc, el) => {
		let b = el.charCodeAt(0).toString(2)
		b = "0".repeat(8 - b.length) + b;
		return acc + b
	}, "");
}

function bin2str(bin) {
	return bin.match(/(.{1,8})/g).reduce((acc, el) => acc + String.fromCharCode(parseInt(el, 2)), "");
}

function SHA1(message) {
	let bin = str2bin(message);
	return bin2str(bin)
}


console.log(SHA1("abc")); // "a9993e364706816aba3e25717850c26c9cd0d89d"