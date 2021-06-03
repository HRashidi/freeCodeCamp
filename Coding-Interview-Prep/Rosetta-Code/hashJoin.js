'use strict'
// https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/hash-join
// An inner join is an operation that combines two data tables into one table, based on 
// matching column values. The simplest way of implementing this operation is the nested loop 
// join algorithm, but a more scalable alternative is the hash join algorithm.


function hashJoin(hash1, hash2) {
	let result = [];
	
	return result;
}

console.log(hashJoin(
	[
		{ age: 27, name: "Jonah" }, 
		{ age: 18, name: "Alan" }, 
		{ age: 28, name: "Glory" }, 
		{ age: 18, name: "Popeye" }, 
		{ age: 28, name: "Alan" }
	], 
	[
		{ character: "Jonah", nemesis: "Whales" }, 
		{ character: "Jonah", nemesis: "Spiders" }, 
		{ character: "Alan", nemesis: "Ghosts" }, 
		{ character:"Alan", nemesis: "Zombies" }, 
		{ character: "Glory", nemesis: "Buffy" }, 
		{ character: "Bob", nemesis: "foo" }
	]));
/* [
	{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"},
	{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"},
	{"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"},
	{"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"},
	{"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"},
	{"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"},
	{"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}] */