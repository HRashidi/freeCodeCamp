'use strict'
function add12Hours(dateString) {
	let months = [
		"January", "February", "March", "April",
		"May", "June", "July", "August",
		"September", "October", "November", "December"
	];

	// "January 17 2017 11:43am EST"
	let [curMonth, curDay, curYear, curTime, curTZ] = dateString.split(" ");

	let amFlag = /am$/.test(curTime);
	curTime = curTime.split(/am|pm/)[0].split(":");

	var d = new Date(parseInt(curYear), months.indexOf(curMonth), parseInt(curDay), parseInt(curTime[0]) + (amFlag ? 0 : 12), parseInt(curTime[1]));
	d.setHours(d.getHours() + 12);

	amFlag = d.getHours() < 12;
	let hour = d.getHours() % 12;
	hour = hour ? hour : 12;

	let dateFormat = `${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
	let timeFormat = `${hour}:${d.getMinutes()}${amFlag?'am':'pm'} ${curTZ}`;
	return `${dateFormat} ${timeFormat}`
}


console.log(add12Hours("January 17 2017 11:43am EST"))	// should return "January 17 2017 11:43pm EST")
console.log(add12Hours("December 31 2020 1:45pm EST"))	// should return "January 1 2021 1:45am EST"
console.log(add12Hours("February 28 1999 3:15pm EST"))	// should return "March 1 1999 3:15am EST")