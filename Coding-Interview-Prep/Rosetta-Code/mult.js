'use strict'

function add(strNum1, strNum2) {
	let arr1 = strNum1.split("").reverse();
	let arr2 = strNum2.split("").reverse();

	let len = Math.max(arr1.length, arr2.length);

	let res = "";
	let carry = 0;
	for(let i= 0; i < len; i++) {
		let a = parseInt(arr1[i]);
		let b = parseInt(arr2[i]);
		a = Number.isNaN(a) ? 0 : a;
		b = Number.isNaN(b) ? 0 : b;
		let c = a + b + carry;
		carry = Math.floor(c / 10);
		c = c % 10;
		res = c + res;
	}
	res = carry ? carry + res : res;
	return res;
}

function multScale(strNum, scale) {
	let b = parseInt(scale);
	if(!b) return "";
	let arr = strNum.split("").reverse();

	let len = Math.max(arr.length);
	let res = "";
	let carry = 0;
	
	for(let i= 0; i < len; i++) {
		let a = parseInt(arr[i]);
		
		a = Number.isNaN(a) ? 1 : a;

		let c = a * b + carry;
		carry = Math.floor(c / 10);
		c = c % 10;
		res = c + res;
	}

	res = carry ? carry + res : res;
	return res;
}

function mult(strNum1, strNum2) {

	let len = Math.max(strNum1.length, strNum2.length);
	[strNum1, strNum2] = strNum1.length === len ? [strNum1, strNum2] : [strNum2 , strNum1];

	let arr = strNum2.split("").reverse();

	let res = "";
	for(let i= 0; i < len; i++) {
		let scale = arr[i];
		res = add(res, multScale(strNum1, scale) + "0".repeat(i))

	}
	return res;
}


console.log(mult("18446744073709551616", "18446744073709551616")); // "340282366920938463463374607431768211456"
console.log(mult("19", "10"));