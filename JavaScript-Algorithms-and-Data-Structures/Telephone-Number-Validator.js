function telephoneCheck(str) {
	return true;
}

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

let res = telephoneCheck("555-555-5555");
console.log(res);