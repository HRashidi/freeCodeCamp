'use strict'

function deepcopy(obj) {

	if(typeof obj !== "object") return obj;
	
	let res;
	if(Array.isArray(obj)) {
		res = [...obj].map(el => deepcopy(el));
	} else {
		res = {};
		Object.keys(obj).forEach(key => {
			res[key] = deepcopy(obj[key]);
		});
	}
	return res;
}


console.log(deepcopy({test: "test"}));
console.log(deepcopy("string"));
console.log(deepcopy([1, 2, 3, [4, 5, 7], {a: 23}]));



