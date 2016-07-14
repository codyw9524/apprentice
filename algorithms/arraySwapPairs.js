function swap(arr, i, j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function swapPairs(arr){
	var length = arr.length;
	for(var i = 0; i < length - 1; i += 2){
		swap(arr, i, i + 1);
	}
	return arr;
}

console.log(swapPairs([1,2,3,4,5]));
console.log(swapPairs([1,2,3,4]));