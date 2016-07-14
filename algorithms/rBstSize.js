function height(node, count){
	var count;
	if(!count){
		count = -1;
	}
	if(!node){
		return count;
	}
	var left = height(node.left, count);
	var right = height(node.right, count);
	if(left > right){
		return left + 1;
	} else {
		return right + 1;
	}
}

function bST(){
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
}

function btNode(value){
	this.val = value;
	this.left = null;
	this.right = null;
}

a = new bST();
a.add(10).add(5).add(20).add(25).add(30);
console.log(height(a.root));