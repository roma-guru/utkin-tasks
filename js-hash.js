/*
	js-hash.js: Simple JS library with sorting algorithms. 
	Created during course study at Saint Petersburg State University.
	You may use it for any purpose, if you find it useful. 
*/


				
function HashTable(ht_size) {
	this.size = ht_size;
	this.init();
}

HashTable.prototype = {
	hash: function(str){
			var sum=0;
			/* Make sure a valid string passed in */
			if (str==null) return -1;

			/* Sum up all the characters in the string */
			var len = str.length;

			for(var i=0; i < len; i++ ){ 
				sum += str.charCodeAt(i);
			}
			/* Return the sum mod the table size */
			return sum % this.size;
	},
	
	init: function(){
		this._table = new Array(this.size);
		for(var i= 0; i < this.size; i++){
			this._table[i] = null;
		}
	},
	
	add: function(key,data) {
		var hashval = this.hash(key);
		var current_list = this.get(key);
		if( current_list != null ) return 2;
		var new_list = new LinkedList(key,data);
		if( this._table[hashval] == null){
			this._table[hashval] = new_list;
			return 0;
		}else {
			var last_elem;
			for(var list_elem = this._table[hashval]; list_elem != null; list_elem = list_elem.next ){
				last_elem = list_elem;
			}
			last_elem.next = new_list; //add our data to list tail
		}
		return 0;
	},
	
	
	
	
	get: function(key)
	{
		var hashval = this.hash(key);

		/* Go to the correct list based on the hash value and see if str is
		 * in the list.  If it is, return return a pointer to the list element.
		 * If it isn't, the item isn't in the table, so return NULL.
		 */
		// for(list = hashtable->table[hashval]; list != NULL; list = list->next) {
		// 		if (strcmp(str, list->str) == 0) return list;
		// }
		
		for(var list = this._table[hashval]; list != null; list = list.next ){
			if( key == list.data.key ) 
				return list.data.val;
		}
		
		return null;
	}
	
	
}



function LinkedList(_key,_val) {
     this.data = {key: _key, val: _val};
     this.next = null;
}

// LinkedList.prototype = {

    // add: function (data){
        // //create a new node, place data in
        // var node = {
                // data: data,
                // next: null
            // };
        // var  current;
        // //special case: no items in the list yet
        // if (this._head === null){
            // this._head = node;
        // } else {
            // current = this._head;

            // while(current.next){
                // current = current.next;
            // }
            // current.next = node;
        // }
        // //don't forget to update the count
        // this._length++;

    // },
	
	// remove: function(index){

        // //check for out-of-bounds values
        // if (index > -1 && index < this._length){
            // var current = this._head,
                // previous,
                // i = 0;
            // //special case: removing first item
            // if (index === 0){
                // this._head = current.next;
            // } else {
                // //find the right location
                // while(i++ < index){
                    // previous = current;
                    // current = current.next;
                // }
                // //skip over the item to remove
                // previous.next = current.next;
            // }
            // //decrement the length
            // this._length--;

            // //return the value
            // return current.data;
        // } else {
            // return null;
        // }

    // },
	
	// item: function(index){

        // //check for out-of-bounds values
        // if (index > -1 && index < this._length){
            // var current = this._head,
                // i = 0;
            // while(i++ < index){
                // current = current.next;
            // }

            // return current.data;
        // } else {
            // return null;
        // }
    // }
// };