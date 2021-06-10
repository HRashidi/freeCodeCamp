'use strict'

const Point = function(x, y) {
	this.x = x;
	this.y = y;
};

Point.prototype.getX = function() {
	return this.x;
};

Point.prototype.getY = function() {
	return this.y;
};

function getClosestPair(pointsArr) {

	return {distance: 1, pair : []};
}

let samplePoints = [
	new Point(0.748501,4.09624),
	new Point(3.00302, 5.26164),
	new Point(3.61878, 9.52232),
	new Point(7.46911, 4.71611),
	new Point(5.7819, 2.69367),
	new Point(2.34709, 8.74782),
	new Point(2.87169, 5.97774),
	new Point(6.33101, 0.463131),
	new Point(7.46489, 4.6268),
	new Point(1.45428, 0.087596)];

console.log(getClosestPair(samplePoints));


// closestPair of (xP, yP)
	// where xP is P(1) .. P(N) sorted by x coordinate, and
	// yP is P(1) .. P(N) sorted by y coordinate (ascending order)
// if N ≤ 3 then
// 	return closest points of xP using brute-force algorithm
// else
// 	xL ← points of xP from 1 to ⌈N/2⌉
// 	xR ← points of xP from ⌈N/2⌉+1 to N
// 	xm ← xP(⌈N/2⌉)x
// 	yL ← { p ∈ yP : px ≤ xm }
// 	yR ← { p ∈ yP : px > xm }
// 	(dL, pairL) ← closestPair of (xL, yL)
// 	(dR, pairR) ← closestPair of (xR, yR)
// 	(dmin, pairMin) ← (dR, pairR)
// 	if dL < dR then
//     	(dmin, pairMin) ← (dL, pairL)
//   	endif
// 	yS ← { p ∈ yP : |xm - px| < dmin }
// 	nS ← number of points in yS
// 	(closest, closestPair) ← (dmin, pairMin)
// 	for i from 1 to nS - 1
// 		k ← i + 1
// 		while k ≤ nS and yS(k)y - yS(i)y < dmin
// 			if |yS(k) - yS(i)| < closest then
// 				(closest, closestPair) ← (|yS(k) - yS(i)|, {yS(k), yS(i)})
// 			endif
// 			k ← k + 1
// 		endwhile
//   	endfor
// return closest, closestPair
// endif