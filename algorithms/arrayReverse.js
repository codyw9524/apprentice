//Reverse the elements of the input array

function reverse(arr){
	var temp;
	var length = arr.length;
	for(var i = 0; i < length / 2; i++){
		temp = arr[i];
		arr[i] = arr[length - 1 - i];
		arr[length - 1 - i] = temp;
	}
	return arr;
}

var result = reverse([1,2,3,4,5])
console.log(result);