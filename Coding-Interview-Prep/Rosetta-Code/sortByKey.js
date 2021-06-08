'use strict'

function sortByKey(arr) {
	return arr.sort((a, b) => a.key < b.key ? -1 : 1)
}


console.log(sortByKey(
	[{key: 3, value: "foo"}, {key: 2, value: "bar"}, {key: 4, value: "baz"}, {key: 1, value: 42}, {key: 5, value: "another string"}
])) // should return [{key: 1, value: 42}, {key: 2, value: "bar"}, {key: 3, value: "foo"}, {key: 4, value: "baz"}, {key: 5, value: "another string"}]