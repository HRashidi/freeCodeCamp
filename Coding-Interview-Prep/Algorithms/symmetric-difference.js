function sym(...args) {
	let outArr = [];
	args.forEach(arr=> {
	  	let newArr = [];
		arr.forEach(item => {
			if(!outArr.includes(item))
				newArr.push(item);
		})
		outArr.forEach(item=> {
			if(!arr.includes(item))
				newArr.push(item);
		})
		outArr = [...new Set(newArr)];
		})
	return outArr;
}
  
console.log(sym([1, 2, 3], [5, 2, 1, 4]));