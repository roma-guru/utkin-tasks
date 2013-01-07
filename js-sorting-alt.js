 /*
	simple-js-sorting: Simple JS library with sorting algorithms. 
	Created during course study at Saint Petersburg State University.
	You may use it for any purpose, if you find it useful.

	Implemented by Basov Leonid
*/



// Merge Sort, O(n*ln(n))
function merge_sort(ar){
  _merge_sort(ar, 0, ar.length);
  return ar;
}

// Merge Sort, O(n*ln(n))
function _merge_sort(ar, min, max){
	if( (max - min) > 1){
		var middle =  Math.floor( (max+min) / 2 );
		_merge_sort(ar, min, middle);
		_merge_sort(ar, middle, max);
		merge(ar, min, middle, max);
	}
}

function merge(ar, min, middle, max){
	var size_left  = middle - min + 1;
	var size_right = max - middle + 1;
	var left = ar.slice(min, middle);
	var right= ar.slice(middle, max);
	left[size_left -1]   = 1000000;
	right[size_right -1] = 1000000;
	console.log(left, size_left);
	var i = 0;
	var j = 0;
	for( var k= min; k < max; ++k){
		if(left[i] < right[j])
			ar[k] = left[i++];
		else
			ar[k] = right[j++];
	}
}






function bubble_sort(ar){
	for(var i=0; i < ar.length; i++){
		var founded = false;
		for(var j=0; j < ar.length - i; j++){
			if( ar[j] > ar[j+1] ){
				swap( ar[j], ar[j+1]);
				founded = true;
			}
		}
		if(!founded)
			break;
	}
}

// function qsort(ar){

// }

// function _qSort(ar, low, high) {
//       var i = low;
//       var j = high;
//       var x = A[ (low+high) / 2 ];
//       do {
//           while(ar[i] < x) ++i;
//           while(ar[j] > x) --j;
//           if(i <= j){
//               int temp = ar[i];
//               ar[i] = ar[j];
//               ar[j] = temp;
//               i++; j--;
//           }
//       } while(i <= j);
 
//       if(low < j) qSort(ar, low, j);
//       if(i < high) qSort(ar, i, high);
//   }




function heap_sort2(ar){
	build_heap(ar);
	for(var i = ar.length - 1; i > 0; i--){
		my_swap(ar, 0, i);
		heapify(ar, 0, i-1);
	}
	return ar;
}

function heapify(a, i, j){
	var k;
	if(2*i+1 > j) return;
	if(2*i+2 > j) {
		k = 2*i+1;
	} else {
		if(a[2*i+1] > a[2*i+2])
			k = 2*i+1;
		else
			k = 2*i+2;
	}
	if(a[i] < a[k] ){
		my_swap(a, i, k);
		heapify(a, k, j);
	}
}

function build_heap (a){
	var mid = Math.floor(a.length / 2);
	for(var i= mid-1; i >= 0; i--){
		heapify(a, i, a.length - 1);
	}
}

function my_swap(ar, i, j) {	
    var tmp = ar[i];
    ar[i] = ar[j];
    ar[j] = tmp;
}
