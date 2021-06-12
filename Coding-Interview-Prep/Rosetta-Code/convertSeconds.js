'use strict'

function convertSeconds(sec) {
	let minute = 60;
	let hour = minute * 60;
	let day = hour * 24; 
	let week = day * 7;

	let res = [];
	let remain = sec;

	let wkCount = Math.floor(remain / week);
	remain %= week;
	if(wkCount) res.push(`${wkCount} wk`)

	let dCount = Math.floor(remain / day) ;
	remain %= day;
	if(dCount) res.push(`${dCount} d`)


	let hrCount = Math.floor(remain / hour);
	remain %= hour;
	if(hrCount) res.push(`${hrCount} hr`)


	let minCount = Math.floor(remain / minute);
	remain %= minute;
	if(minCount) res.push(`${minCount} min`)


	let secCount = remain;
	if(secCount) res.push(`${secCount} sec`)

	return res.join(", ");
}



console.log(convertSeconds(7259));	// 2 hr, 59 sec
console.log(convertSeconds(86400));	// 1
console.log(convertSeconds(6000000));	// 9 wk, 6 d, 10 hr, 40 min