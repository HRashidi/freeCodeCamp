function updateInventory(curInv, newInv) {
	let outInv = [...curInv];
	newInv.forEach(newRow => {
		let findedRow = outInv.find(oldRow => oldRow[1] === newRow[1]);
		if(!findedRow) outInv.push(newRow);
		else findedRow[0] += newRow[0];
	})

    return outInv.sort((a,b) => a[1] < b[1] ? -1 : 1);
}

// Example inventory lists
var curInv = [
    [2, "Dirty Sock"],
    [21, "Bowling Ball"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

let result = updateInventory(curInv, newInv);
result