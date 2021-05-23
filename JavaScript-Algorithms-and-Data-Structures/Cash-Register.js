function checkCashRegister(price, cash, cid) {
	let valueArray = [
		["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10],
		["FIVE", 5], ["ONE", 1], ["QUARTER", .25],
		["DIME", .1], ["NICKEL", 0.05], ["PENNY", .01]
	];

	function arr2dict(arr) {
		let dict = {};
		arr.map(el => dict[el[0]] = el[1]);
		return dict;
	}

	let change = cash - price;
	let cidCash = Math.round((cid.reduce((acc, section) => acc + section[1], 0) + Number.EPSILON) * 100) / 100;
	// console.log(cidCash);
	if (change > cidCash) return {status: "INSUFFICIENT_FUNDS", change: []};
	if (change === cidCash) return {status: "CLOSED", change: cid};

	let cashInDrawer = arr2dict(cid);

	let bigExchange = [];

	// Big money
	for (let index = 0; index < 5; index++) {
		const [name, value] = valueArray[index];
		// console.log(name, value, change);
		if(cashInDrawer[name] > 0 && change > value ) {
			// change -= 1
			let drawerCount = Math.floor(cashInDrawer[name] / value);
			let changeCount = Math.floor(change / value);
			let exCount = Math.min(changeCount, drawerCount);
			change = change - exCount * value;
			change = Math.round(change * 100) / 100;
			exCount && bigExchange.push([name, exCount * value]);
		}
	}

	let bigChange = change;
	let smallExchange = [];
	// Even Quarter
	for (let index = 5; index < valueArray.length; index++) {
		const [name, value] = valueArray[index];
		// console.log(name, value, change);
		if(cashInDrawer[name] > 0 && change > value ) {
			// change -= 1
			let drawerCount = Math.floor(cashInDrawer[name] / value);
			let changeCount = Math.floor(change / value);
			let exCount = Math.min(changeCount, drawerCount);
			if (name === "QUARTER" && exCount % 2 !== 0) {
				exCount = Math.max(0, exCount - 1);
			}
			change = change - exCount * value;
			change = Math.round(change * 100) / 100;
			exCount && smallExchange.push([name, exCount * value]);
		}
	}
	if(change == 0) return {status: "OPEN", change: bigExchange.concat(smallExchange)};

	// Odd Quarter
	change = bigChange;
	smallExchange = [];
	// Even Quarter
	for (let index = 5; index < valueArray.length; index++) {
		const [name, value] = valueArray[index];
		// console.log(name, value, change);
		if(cashInDrawer[name] > 0 && change > value ) {
			let drawerCount = Math.floor(cashInDrawer[name] / value);
			let changeCount = Math.floor(change / value);
			let exCount = Math.min(changeCount, drawerCount);
			if (name === "QUARTER" && exCount % 2 === 0) {
				exCount = Math.max(0, exCount - 1);
			}
			change = change - exCount * value;
			change = Math.round(change * 100) / 100;
			exCount && smallExchange.push([name, exCount * value]);
		}
	}
	if(change == 0) return {status: "OPEN", change: bigExchange.concat(smallExchange)};
	return {status: "INSUFFICIENT_FUNDS", change: []};
}
  
// let res = checkCashRegister(3.26, 100, 
// 	[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
// 	["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
let res = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
	["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(res);
