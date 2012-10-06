/*
	simple-js-sorting: Simple JS library with sorting algorithms. 
	Created during course study at Saint Petersburg State University.
	You may use it for any purpose, if you find it useful.

	Implemented by Basov Leonid
*/



// Merge Sort, O(n*ln(n))
function merge_sort(ar){
	if(ar.length == 1){
		return ar;
	} else {
		var middle = Math.round(ar.length / 2);
		var left = new Array();
		var right = new Array();
		for(var i=0; i < middle; i++)
			left.push(ar[i]);
		for(var j=middle; j < ar.length; j++)
			right.push(ar[j]);
		left = merge_sort(left);
		right = merge_sort(right);
		var result = merge(left, right);
		return result;
	}
}

function merge(left, right){
	var result = new Array();
	while (left.length > 0  && right.length > 0){
		if( left[0] <= right[0] ){
			result.push( left[0] );
			left.shift();
		}else {
			result.push(right[0]);
			right.shift();
		}
	}
	if (left.length > 0)
		result = result.concat(left);
	if( right.length > 0)
		result = result.concat(right);
	return result;
}
