'use strict'

function getCircles(...args) {

	let [x1, y1] = args[0];
	let [x2, y2] = args[1];
	let r = args[2];
	
	let q = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
	let y3 = (y1+y2)/2;
	let x3 = (x1+x2)/2;

	// handle exeption
	if(r === 0) return "Radius Zero";
	if(x1 === x2 && y1 === y2) return "Coincident point. Infinite solutions";
	if(2 * r < q) return "No intersection. Points further apart than circle diameter";
	if(2 * r === q) return [x3, y3];

	let basex = Math.sqrt(Math.pow(r,2)-Math.pow((q/2),2))*(y1-y2)/q; //calculate once
	let basey = Math.sqrt(Math.pow(r,2)-Math.pow((q/2),2))*(x2-x1)/q; //calculate once

	let step = 10000; 
	let cx1 = Math.round((x3 + basex) * step) / step;
	let cy1 = Math.round((y3 + basey) * step) / step;
	let cx2 = Math.round((x3 - basex) * step) / step;
	let cy2 = Math.round((y3 - basey) * step) / step;

	return [[cx1, cy1], [cx2, cy2]];
}


console.log(getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0));	// [[1.8631, 1.9742], [-0.8632, -0.7521]]
console.log(getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0));	// [[1.8631, 1.9742], [-0.8632, -0.7521]]