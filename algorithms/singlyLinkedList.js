function linkedList () {
	this.head = null;
	this.addFront = function(val){
		if(!this.head){
			this.head = new node(val);
		} else {
			var temp = this.head;
			this.head = new node(val);
			this.head.next = temp;
		}
		return this;
	}
	this.addBack = function(val){
		if(!this.head){
			this.head = new node(val);
		} else {
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = new node(val);
		}
		return this;
	}
	this.removeFront = function(){
		if(!this.head){
			return this;
		}
		else if(!this.head.next){
			this.head = null;
		} else {
			this.head = this.head.next;
		}
		return this;
	}
	this.front = function(){
		if(this.head.value){
			return this.head.value;
		} else {
			return null;
		}
	}
	this.back = function(){
		if(!this.head){
			return null;
		} else {
			var current = this.head;
			while(current.next){
				current = current.next;
			}
			return current.value;
		}
	}
	this.isEmpty = function(){
		if(!this.head){
			return true;
		} else {
			return false;
		}
	}
	this.count = function(){
		if(!this.head){
			return 0;
		} else {
			var count = 0;
			var current = this.head;
			while(current){
				count++;
				current = current.next;
			}
			return count;
		}
	}
	this.contains = function(val){
		if(!this.head){
			return false;
		} else {
			var current = this.head;
			while(current){
				if(current.value == val){
					return true;
				}
				current = current.next;
			}
			return false;
		}
	}
}

function node(val){
	this.value = val;
	this.next = null;
}

var a = new linkedList();
a.addFront(10).addBack(2).removeFront();
console.log(a.contains(2));