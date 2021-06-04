function getDateFormats() {
	// ['2007-11-23', 'Friday, November 23, 2007']
	let months = [
		"January", "February", "March", "April",
		"May", "June", "July", "August",
		"September", "October", "November", "December"
	];
	let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	var d = new Date();
	let res = [
		`${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`,
		`${weekday[d.getUTCDay()]}, ${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`]
	return res;
}


console.log(getDateFormats());