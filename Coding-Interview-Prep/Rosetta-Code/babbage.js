'use strict'

function babbage(babbageNum, endDigits) {
	let start = Math.floor(Math.sqrt(endDigits));
	for (let i = start; i < babbageNum; i++) {
		if((i * i) % 1000000 === endDigits)
			return i		
	}
}

function babbage1(babbageNum, endDigits) {
	let step = 1000000;
	let end = Math.floor(babbageNum * babbageNum / step);
	for (let i = 1; i <= end; i++) {
		let root = Math.sqrt(endDigits + i * step);
		if(Number.isInteger(root)) {
			return root;
		}
	}
}

console.log(babbage(99736, 269696));