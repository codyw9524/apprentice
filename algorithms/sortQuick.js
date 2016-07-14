function quickSort(arr) {
	var pivot;
	var l_arr = []
	var g_arr = []
	console.log(arr);
	if(arr.length < 2){
		return arr
	}
	pivot = arr[0];
	for (var i = 1; i < arr.length; i++){
		if(arr[i] > pivot){
			g_arr.push(arr[i]);
		} else {
			l_arr.push(arr[i]);
		}
	}
	return quickSort(l_arr).concat(pivot).concat(quickSort(g_arr));
}
var result = quickSort([8,7,6,5,4,3,2,1])
console.log(result)