// Int8Array	1
// Uint8Array	1
// Uint8ClampedArray	1
// Int16Array	2
// Uint16Array	2
// Int32Array	4
// Uint32Array	4
// Float32Array	4
// Float64Array	8

var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
console.log(buffer.byteLength);
console.log(i32View.byteLength);
