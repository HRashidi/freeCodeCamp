var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

var Node = function() {
	this.keys = new Map();
	this.end = false;
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};

var Trie = function() {
	this.root = new Node();
	this.add = function(string) {
		if(!string) return;

		let curNode = this.root;
		for(let char of string) {
			// console.log(char);
			if(curNode.keys.has(char)) {
				curNode = curNode.keys.get(char);
			} else {
				let newNode = new Node();
				curNode.keys.set(char, newNode);
				curNode = newNode;
			}
		}
		curNode.setEnd();
	}

	this.isWord = function(string) {
		let curNode = this.root;
		for(let char of string) {
			console.log(char);
			if(curNode.keys.has(char))
				curNode = curNode.keys.get(char);
			else
				return false;
		}
		return curNode.isEnd();				
	}

	this.print = function() {
		function lookUp(root, string) {
			let arr = [];
			if(root.isEnd()) arr.push(string);

			for (let [char, node] of root.keys) {
				arr = arr.concat(lookUp(node, string + char))
			}
			return arr;
		}

		return lookUp(this.root, "");
	}
};

let myTrie = new Trie();
myTrie.add("a");
myTrie.add("ad");
myTrie.add("abc");
myTrie.add("ac");
console.log(myTrie.isWord("ab"));
console.log(myTrie.print());
