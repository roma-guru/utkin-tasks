/*
	simple-js-sorting: Simple JS library with sorting algorithms. 
	Created during course study at Saint Petersburg State University.
	You may use it for any purpose, if you find it useful. 
*/

// Insert Sort, O(n^2)
function insert_sort(a) {
	var b = a.slice();
	for (var i=1; i<b.length; i++) {		
		var j=i-1;
		var q = a[i];
		while (j>=0 && b[j]>q) {
			b[j+1] = b[j]
			j--;
		}
		b[j+1]=q;
	}
	return b;
}

// Merge Sort, O(n*ln(n))
function merge_sort(a) {
	if (a.length<2) return a;	
	var m = Math.round(a.length/2);
	var left = a.slice(0,m);
	var right = a.slice(m);
	left = merge_sort(left);
	right = merge_sort(right);
	return merge(left,right);
}

// Helper function for merge sort
function merge(left,right) {
	var res=new Array();
	var li=0, ri = 0;
	while (li<left.length && ri<right.length) {
		if (left[li] < right[ri]) {
			res = res.concat(left[li]);			
			li++;
		}
		else {
			res = res.concat(right[ri]);			
			ri++;
		}
	}
	while (li<left.length) {
		res = res.concat(left[li]);			
		li++;
	}
	while (ri<right.length) {
		res = res.concat(right[ri]);			
		ri++;
	}
	return res;
}

// Heap Sort, O(n*ln(n))
function heap_sort(a) {
	var b = a.slice();
	heapify(b, b.length);
	var end = b.length - 1;
	while (end>0) {
		swap(b, end, 0);
		--end;
		siftDown(b, 0, end);
	}
	return b;
}

// Builds heap
function heapify(a, count) {
	var start = (count - 2)>>1;
	while (start >=0) {
		siftDown(a, start, count-1);
		--start;
	}
}

// Moves element down until it descendants are less then element
function siftDown(a, start, end) {
	var root = start;
	while ((root<<1)+1 <=end) {
		var child = (root<<1)+1;
		var toswap = root;
		if (a[toswap] < a[child]) toswap = child;
		if (child+1 <=end && a[toswap] < a[child+1]) toswap = child+1;
		if (toswap !=root) {
			swap(a,root,toswap);
			root=toswap;
		}
		else
			return;			
	}
}

// Quick Sort, O(n*ln(n)) in most cases
function quick_sort(a) {
	var b = a.slice();
	_qsort(b,0,b.length-1);
	return b;
}

// Helper function for Quick Sort
function _qsort(a,p,q) {
	if (q<=p) return;
	var i=p,j=q,k=p;
	var tmp;
	var x=a[q];
	for (var i=p; i<q; i++){
		if (a[i]<x) { 
			swap(a,k,i);
			k++;
		}
	}
	swap(a,k,q);
	_qsort(a,p,k-1);
	_qsort(a,k+1,q);	
}

// Swaps two elements of array
function swap(a, i, j) {	
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

// Pocket sort (for integers 0<=n< N), O(n)
var N = 1000;
function pocket_sort(a) {
	var b = [];
	var count = [];
	for (var i = 0; i < N; i++) count[i] = 0;
	for (var i in a) {		
		count[a[i]]++;
	}	
	var k=0;
	for (var i = 0; i < N; i++) {
		while (count[i] > 0 ) {
			b[k] = i;
			count[i]--;
			k++;
		}
	}
	return b;
}