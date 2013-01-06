 /*
	simple-js-sorting: Simple JS library with sorting algorithms. 
	Created during course study at Saint Petersburg State University.
	You may use it for any purpose, if you find it useful.

	Implemented by Basov Leonid
*/



// Merge Sort, O(n*ln(n))
function merge_sort(ar){
  var res = _merge_sort(ar, 0, ar.length-1);
  return res;
}

// Merge Sort, O(n*ln(n))
function _merge_sort(ar, min, max){
	if(max == min){
		return [ar[min]];
	} else {
		var middle =  min + Math.round( (max-min) / 2 );
		var left = new Array();
		var right = new Array();
		left  = _merge_sort(ar, min, middle-1);
		right = _merge_sort(ar, middle, max);
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
