/*
	js-hash.js: Simple JS library with sorting algorithms. 
	Created during course study at Saint Petersburg State University.
	You may use it for any purpose, if you find it useful. 

	Implementation: Basov Leonid
*/


function twoDimList (size){
	this.size = size;
	this.init();
}


thoDimList.prototype = {
	init: function() {
		this._back = new Array(this.size);
		this._val  = new Array(this.size);
		this._forw = new Array(this.size);
		for( var i=0; i < this.size;   i++){
			this._back[i] = i -1;
			this._val[i]  = null;
			this._forw[i] = i +1;
		}
		this._forw[ this.size - 1 ] = -1;
		this._free = 0;
		this._tail = -1;
		this._head = -1;
		this._forw[0] = 1; 
		this._back[0] = -1;
	},
	
	add: function (val) {
		if(this._head == -1) this._head = this._free;
		var next_free =  this._forw[ this._free ];
		
		// fill value to first free cell
		this._val[  this._free  ] = val;
		this._back[ this._free  ] = this._tail;
		this._forw[ this._free  ] = -1;
		this._tail = this._free;
		this._free =  next_free;
		
	},
	
	find: function(val) {
		var founded_cell  = -1;
		for( var cell_index = this._head; this.forw;  cell_index != -1 ; cell_index = this._forw[ cell_index] ){
			if(val == this._val[ cell_index] ){
				founded_cell = cell_index;
				return founded_cell;
			}
		}
		return founded_cell;	
	}
	
	remove: function (value) {
		//remove element
		var del_index = this.find(val)
		if(  del_index == -1 )
			return -1; // value not found
		this._val[ del_index ] = null;
		
		
		//push freed cell to head of free list
		var old_free = this._free;
		this._free = del_index;
		this._forw[ del_index ] = old_free;
		
	}
	

}