function selectionSort(arr){
	var length = arr.length;
	var min;
	for(var i = 0; i < length; i++){
		min = i;
		for(var j = i + 1; j < length; j++){
			if(arr[min] > arr[j]){
				min = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return arr;
}

var result = selectionSort([5,4,3,2,1])
console.log(result);