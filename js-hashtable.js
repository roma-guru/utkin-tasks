function HashTable(capacity) {	
	this.capacity = capacity;
	this.buckets = new Array();	
	this.put = put;
	this.get = get;
}

function put(str, obj) {
	var bucket = this.buckets[hash(str)%this.capacity];
	if (bucket == undefined) 
		bucket = this.buckets[hash(str)%this.capacity] = new Array();
	bucket.push({key:str, val:obj});
}

function get(str) {
	var bucket =  this.buckets[hash(str)%this.capacity];
	if (bucket == undefined) return undefined;
	if (bucket.length < 2) return bucket[0].val;
	for (var i in bucket) {
		if (bucket[i].key == str) return bucket[i].val;
	}	
}

function hash(str) {
	var h = 0;        	
     for (i in str) {
         h = 31*h + str.charCodeAt(i); // from Java
     }                    
     return h;
}

function hash_probe(str,n) {
	return hash(str) * (n+1) + n;
}

// Hash table with open adressing collision resolution
function HashTable_oa(capacity) {	
	this.capacity = capacity;
	this.buckets = [];	
	this.put = put_oa;
	this.get = get2;
}

function put_oa(str, obj) {
	var i = 0;	
	while (this.buckets[hash_probe(str, i)%this.capacity] != undefined) {		
		if (++i>999) throw "No space in " + this;
	}
	this.buckets[hash_probe(str, i)%this.capacity] = {key:str, val:obj};
}

function get_oa(str) {
	var i = 0;	
	var k = hash_probe(str, i);
	while (this.buckets[k%this.capacity] != undefined && 
				this.buckets[k%this.capacity].key != str) {
		k = hash_probe(str, i);
		if (++i>999) throw "No space in " + this;
	}
	if (this.buckets[k%this.capacity] == undefined) return undefined;
	return this.buckets[k%this.capacity].val ;
}