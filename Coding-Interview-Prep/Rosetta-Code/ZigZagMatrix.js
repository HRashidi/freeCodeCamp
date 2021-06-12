'use strict'

function ZigZagMatrix(n) {
	let mat = new Array(n).fill([...Array(n).fill(0)]);
	
	let i = 1, j = 1;
	for (let el = 0; el < n * n; el ++) {
		mat[i - 1, j - 1] = el;
		
		if((i + j) % 2 === 0) {
			// Even stripes
			if (j < n) j ++;
            else       i += 2;
            if (i > 1) i --;
			
		}
		else {
			// Odd stripes
			if (i < n) i ++;
            else       j += 2;
            if (j > 1) j --;
		}


	}

	return mat;
	
}

console.log(ZigZagMatrix(5))