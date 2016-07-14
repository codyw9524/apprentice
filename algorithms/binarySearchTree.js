//add(val), isEmpty, contains(val), Min, Max

function btNode(value){
	this.val = value;
	this.left = null;
	this.right = null;
}

function binarySearchTree(){
	this.root = null;
	this.add = function(value){
		var current;
		if(this.root == null){
			this.root = new btNode(value);
			return this;
		}
		current = this.root;
		while(current){
			if(value < current.val){
				if(!current.left){
					current.left = new btNode(value);
					return this;
				}
				current = current.left;
			} else {
				if(!current.right){
					current.right = new btNode(value);
					return this;
				}
				current = current.right;
			}
		}
	}
	this.isEmpty = function(){
		if(!this.root){
			return true;
		} else {
			return false;
		}
	}
	this.contains = function(val){
		if(!this.root){
			return false;
		} else {
			var current = this.root;
			while(current){
				if(current.val == val){
					return true;
				}
				else if(val > current.val){
					current = current.right;
				} else {
					current = current.left;
				}
			}
			return false;
		}
	}
	this.max = function(){
		if(!this.root){
			return null;
		} else {
			var current = this.root;
			while(current.right){
				current = current.right
			}
			return current.val;
		}
	}
	this.min = function(){
		if(!this.root){
			return null;
		} else {
			var current = this.root;
			while(current.left){
				current = current.left;
			}
			return current.val;
		}
	}
}

var a = new binarySearchTree();
a.add(5).add(10).add(20).add(4).add(25)
console.log(a.min());
