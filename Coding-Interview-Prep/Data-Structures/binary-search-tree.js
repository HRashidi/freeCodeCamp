var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinarySearchTree() {
	this.root = null;


	this.add = (value) => {
		if(this.root === null) {
			this.root = new Node(value);
			return;
		}

		function addRecursive(root, value) {
			if(root.value === value) return null;

			if(value < root.value) {
				if(root.left === null) {
					root.left = new Node(value);
					return;
				}
				return addRecursive(root.left, value)
			} else {
				if(root.right === null) {
					root.right = new Node(value);
					return;
				}
				return addRecursive(root.right, value)
			}
		}

		return addRecursive(this.root, value);
	}

	this.findMin = function() {
		if(this.root === null) {
			return null;
		}
		
		let curNode = this.root;
		while(curNode.left !== null) {
			curNode = curNode.left;
		}
		return curNode.value;
	}

	this.findMax = function() {
		if(this.root === null) {
			return null;
		}
		
		let curNode = this.root;
		while(curNode.right !== null) {
			curNode = curNode.right;
		}
		return curNode.value;
	}

	this.isPresent = function(value) {
		if(this.root === null) return false;
			
		function findRecursive(root, value) {
			if(root.value === value) return true;
			if(value < root.value) {
				return root.left === null? false : findRecursive(root.left, value);
			} else {
				return root.right === null? false : findRecursive(root.right, value);
			}
		}
		return findRecursive(this.root, value);
	}

	this.findMinHeight = function() {
		function findHeightRecursive(root) {
			if(root === null) return -1;
			return Math.min(findHeightRecursive(root.left), findHeightRecursive(root.right)) + 1;
		}
		return findHeightRecursive(this.root);
	}

	this.findMaxHeight = function() {
		function findHeightRecursive(root) {
			if(root === null) return -1;
			return Math.max(findHeightRecursive(root.left), findHeightRecursive(root.right)) + 1;
		}
		return findHeightRecursive(this.root);
	}

	this.isBalanced = function() {
		return this.findMaxHeight() - this.findMinHeight() <= 1;
	}

	this.inorder = function() {
		if(this.root === null) return null;

		function inorder(root) {
			if(root === null) return [];
			return [...inorder(root.left), root.value, ...inorder(root.right)];
		}
		return inorder(this.root);
	}

	this.preorder = function() {
		if(this.root === null) return null;

		function preorder(root) {
			if(root === null) return [];
			return [root.value, ...preorder(root.left), ...preorder(root.right)]
		}
		return preorder(this.root);
	}

	this.postorder = function() {
		if(this.root === null) return null;

		function postorder(root) {
			if(root === null) return [];
			return [...postorder(root.left), ...postorder(root.right), root.value]
		}
		return postorder(this.root);
	}

	this.levelOrder = function() {
		if(this.root === null) return null;
		let output = [];
		let queue = [this.root];

		while(queue.length > 0) {
			let curNode = queue.shift();
			if(curNode === null)
				continue;
			output.push(curNode.value)
			queue.push(curNode.left);
			queue.push(curNode.right);
		}
		return output;
	}

	this.reverseLevelOrder = function() {
		if(this.root === null) return null;
		let output = [];
		let queue = [this.root];

		while(queue.length > 0) {
			let curNode = queue.shift();
			if(curNode === null)
				continue;
			output.push(curNode.value)
			queue.push(curNode.right);
			queue.push(curNode.left);
		}
		return output;
		
	}

	this.remove = function(value) {
		if(this.root === null) return null;

		function findNode(root, value) {
			if(value < root.value) {
				if(root.left && root.left.value === value) return [root.left, root];
				return root.left === null? [null, null] : findNode(root.left, value);
			} else {
				if(root.right && root.right.value === value) return [root.right, root];
				return root.right === null? [null, null] : findNode(root.right, value);
			}
		}

		let node = null, parent = null;
		if(this.root.value === value) {
			[node, parent] = [this.root, null];
		}
		else
			[node, parent] = findNode(this.root, value);

		// If not finded
		if(node === null) return null;

		let children = (node.left !== null ? 1 : 0) + (node.right !== null ? 1 : 0);
		
		// if the node is a leaf
		if(children === 0){
			if(node === this.root)
				this.root = null;
			else if(node === parent.left)
				parent.left = null;
			else
				parent.right = null;
		}
		else if(children == 1) {
			if(node === this.root) {
				this.root = node.left || node.right;
			}
			else if(node === parent.left)
				parent.left = node.left || node.right;
			else
				parent.right = node.left || node.right;
		}
		else {
			// if(node === this.root) {
			// 	this.root = node;
			// }

			// finding mainimum value in the right branch
			let curNode = node.right;
			let rParent = node;
			while(curNode.left !== null){
				rParent = curNode;
				curNode = curNode.left;
			}

			// case 1: childless
			node.value = curNode.value;
			if(curNode.right === null) {
				if(rParent !== node) {
					rParent.left = null;
					node.right = curNode;
				} else {
					node.right = null;
				}
			} 
			// case 2: curNode has a right child
			else {
				if(rParent !== node) {
					rParent.left = curNode.right;
				} else {
					rParent.right = curNode.right;
				}
			}
		}
	}

	this.invert = function() {
		if(this.root === null) return null;
		let queue = [this.root];

		while(queue.length > 0) {
			let curNode = queue.shift();
			if(curNode === null)
				continue;
			queue.push(curNode.left);
			queue.push(curNode.right);
			[curNode.left, curNode.right] = [curNode.right, curNode.left];
		}
	}
	

}

function isBinarySearchTree(tree) {

	function checkRecursive(root) {
		if(root === null) return true;
		
		if(root.left  && root.left.value  >= root.value) return false;
		if(root.right && root.right.value < root.value)  return false;

		return checkRecursive(root.left) && checkRecursive(root.right);
	}
	return checkRecursive(tree.root);
}

let myTree = new BinarySearchTree();
myTree.add(10);
myTree.add(5);
myTree.add(15);
// myTree.add(18);
// myTree.add(5);
// myTree.add(4);
// myTree.add(6);
// myTree.add(13);
// myTree.add(1);
// myTree.add(4);
// displayTree(myTree);
// console.log(myTree.findMax());
// console.log(myTree.isPresent(2));
// console.log(myTree.isPresent(10));
// console.log(myTree.isPresent(1));
// console.log(isBinarySearchTree(myTree))

// console.log(myTree.findMinHeight());
// console.log(myTree.findMaxHeight());
// console.log(myTree.isBalanced());

// console.log(myTree.inorder());
// console.log(myTree.preorder());
// console.log(myTree.postorder());

// console.log(myTree.levelOrder());

console.log(myTree.remove(10));
displayTree(myTree);;
