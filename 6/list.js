function List() {
	// List beginning
	this.head = null;
	// List ending
	this.tail = null;
	// Size of list
	this.size = 0;	
	
	// Append item to list 
	this.add = function(item) {
		var node = new Node(item);
		if (this.size==0) {
			this.head = this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.size++;
	}
	
	// Get list node by index
	this.getNode = function(index) {
		if (this.size==0 || index>=this.size) return null;
		var node = this.head;
		for (var i=0; i<index; i++) {
			node = node.next;
		}
		return node;
	}
	// Get list item by index
	this.get = function(index) {
		node = this.getNode(index);
		if (node==null) return null;
		return node.value;
	}
	
	// Remove list item by index
	this.remove = function(index) {
		this.removeNode(this.getNode(index));
		
	}
	
	// Remove Node
	this.removeNode = function(node) {
		if (node!=null){
			var prev = node.prev;
			var next = node.next;
			if (prev!=null) prev.next = node.next;
			if (next!=null) next.prev = node.prev;
			if (this.head==node) {
				this.head = node.next;
			}
			if (this.tail==node) {
				this.tail = node.prev;
			}
			this.size--;
		}
	}
	
	// Remove all list items with given value
	this.removeAll = function(item) {
		var node = this.head;
		while (node!=null) {
			if (node.value==item) this.removeNode(node);
			node = node.next;
		}
	}

	// Find all list items with given value
	this.find = function(item) {
		var node = this.head;
		var indeces = [];
		for (var i=0; i<this.size; i++) {
			if (node.value==item) indeces.push(i);
			node = node.next;
		}
		return indeces;
	}
	
	// Print all elements in list
	this.print = function() {
		var str = "[ ";
		var node = this.head;
		for (var i=0; i<this.size; i++) {
			str += node.value + " ";
			node = node.next;
		}
		str += "]";
		return str;
	}
	
	// Helper class, containing list node data
	function Node(item) {
		this.prev = null;
		this.next = null;
		this.value = item;
	}	
}

function testList() {
	var list = new List();
	console.log("Add items");
	list.add(0); list.add(1); list.add(1); list.add(2); list.add(3); list.add(5);
	list.add("String");
	console.log(list.print());
	console.log("Value of third element is "+list.get(2));
	console.log("Value of first element is "+list.get(0));
	console.log("Value of last element is "+list.get(list.size-1));
	console.log("Remove items 0,6");
	list.remove(0);
	list.remove(5);
	console.log(list.print());
	console.log("Indeces with value 1: " + list.find(1));
	console.log("Lets remove all them!");
	list.removeAll(1);
	console.log(list.print());

	var list2 = new List();
	console.log("List with one item:");
	list2.add("Only");
	console.log(list2.print());
	console.log("Search non-exist item:" + list2.find("None"));
	console.log("Delete the only element");
	list2.removeAll("Only");
	console.log(list2.print());	
}
