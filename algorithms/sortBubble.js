function bubbleSort(arr){
	var temp;
	var sorted = true;
	for(var i = 1; i < arr.length; i++){
		for(var j = 0; j < arr.length - i; j++){
			if(arr[j] > arr[j + 1]){
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				sorted = false;
			}
		}
		if(sorted){
			break;
		} else {
			sorted = true;
		}
	}
	return arr;
}

var result = bubbleSort([1,2,3,5,4]);
var result2 = bubbleSort([5,4,3,2,1])
console.log(result);
console.log(result2);